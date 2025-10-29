import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from '../utils/nanoid.js';
import { generateAssistantReply, interpretCommand } from '../utils/chatEngine.js';
import { useAuthStore } from './authStore.js';

const deepCopy = (value) => JSON.parse(JSON.stringify(value));

const defaultConversation = () => ({
  id: nanoid(),
  title: 'Hoş geldiniz',
  role: 'genel',
  messages: [
    {
      id: nanoid(),
      author: 'assistant',
      content:
        'Merhaba, ben Cortex asistanı. Komutları veya belgeleri kullanarak hızlıca bilgi alabilirsiniz. Örneğin /özet yazmayı deneyin.',
      timestamp: new Date().toISOString(),
    },
  ],
});

const ensureUserState = (conversationsByUser, selectedConversationIdByUser, userId) => {
  if (!conversationsByUser[userId]) {
    const conversation = defaultConversation();
    conversationsByUser[userId] = [conversation];
    selectedConversationIdByUser[userId] = conversation.id;
  }
};

export const useChatStore = create(
  persist(
    (set, get) => ({
      conversationsByUser: {},
      selectedConversationIdByUser: {},
      addConversation: (conversation = {}) => {
        const userId = useAuthStore.getState().currentUser?.id;
        if (!userId) return null;
        const conversationsByUser = deepCopy(get().conversationsByUser || {});
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        ensureUserState(conversationsByUser, selectedConversationIdByUser, userId);
        const newConversation = {
          id: nanoid(),
          title: conversation.title || 'Yeni Sohbet',
          role: conversation.role || 'genel',
          messages: conversation.messages || [],
        };
        conversationsByUser[userId] = [newConversation, ...conversationsByUser[userId]];
        selectedConversationIdByUser[userId] = newConversation.id;
        set({ conversationsByUser, selectedConversationIdByUser });
        useAuthStore.getState().updateUser({ conversations: conversationsByUser[userId] });
        return newConversation;
      },
      selectConversation: (conversationId) => {
        const userId = useAuthStore.getState().currentUser?.id;
        if (!userId) return;
        const conversationsByUser = deepCopy(get().conversationsByUser || {});
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        ensureUserState(conversationsByUser, selectedConversationIdByUser, userId);
        selectedConversationIdByUser[userId] = conversationId;
        set({ conversationsByUser, selectedConversationIdByUser });
      },
      deleteConversation: (conversationId) => {
        const userId = useAuthStore.getState().currentUser?.id;
        if (!userId) return;
        const conversationsByUser = deepCopy(get().conversationsByUser || {});
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        ensureUserState(conversationsByUser, selectedConversationIdByUser, userId);
        conversationsByUser[userId] = conversationsByUser[userId].filter((conv) => conv.id !== conversationId);
        if (!conversationsByUser[userId].length) {
          const conversation = defaultConversation();
          conversationsByUser[userId] = [conversation];
        }
        if (
          selectedConversationIdByUser[userId] === conversationId ||
          !conversationsByUser[userId].some((conv) => conv.id === selectedConversationIdByUser[userId])
        ) {
          selectedConversationIdByUser[userId] = conversationsByUser[userId][0].id;
        }
        set({ conversationsByUser, selectedConversationIdByUser });
        useAuthStore.getState().updateUser({ conversations: conversationsByUser[userId] });
      },
      sendMessage: async ({ content }) => {
        const userId = useAuthStore.getState().currentUser?.id;
        if (!userId) return;
        const conversationsByUser = deepCopy(get().conversationsByUser || {});
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        ensureUserState(conversationsByUser, selectedConversationIdByUser, userId);
        const conversation = conversationsByUser[userId].find(
          (conv) => conv.id === selectedConversationIdByUser[userId],
        );
        if (!conversation) return;
        const interpreted = interpretCommand(content, conversation.role);
        const userMessage = {
          id: nanoid(),
          author: 'user',
          content,
          timestamp: new Date().toISOString(),
          meta: interpreted.meta,
        };
        conversation.role = interpreted.role || conversation.role;
        conversation.messages.push(userMessage);
        const assistantReply = await generateAssistantReply(conversation, userMessage);
        conversation.messages.push(assistantReply);
        conversationsByUser[userId] = conversationsByUser[userId].map((conv) =>
          conv.id === conversation.id ? conversation : conv,
        );
        set({ conversationsByUser, selectedConversationIdByUser });
        useAuthStore.getState().updateUser({ conversations: conversationsByUser[userId] });
      },
      renameConversation: (conversationId, title) => {
        const userId = useAuthStore.getState().currentUser?.id;
        if (!userId) return;
        const conversationsByUser = deepCopy(get().conversationsByUser || {});
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        ensureUserState(conversationsByUser, selectedConversationIdByUser, userId);
        conversationsByUser[userId] = conversationsByUser[userId].map((conv) =>
          conv.id === conversationId ? { ...conv, title } : conv,
        );
        set({ conversationsByUser, selectedConversationIdByUser });
        useAuthStore.getState().updateUser({ conversations: conversationsByUser[userId] });
      },
      clearAll: () => {
        const userId = useAuthStore.getState().currentUser?.id;
        if (!userId) return;
        const conversationsByUser = deepCopy(get().conversationsByUser || {});
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        const conversation = defaultConversation();
        conversationsByUser[userId] = [conversation];
        selectedConversationIdByUser[userId] = conversation.id;
        set({ conversationsByUser, selectedConversationIdByUser });
        useAuthStore.getState().updateUser({ conversations: conversationsByUser[userId] });
      },
      hydrateFromUser: () => {
        const authState = useAuthStore.getState();
        const userId = authState.currentUser?.id;
        if (!userId) return;
        const conversationsByUser = deepCopy(get().conversationsByUser);
        const selectedConversationIdByUser = { ...get().selectedConversationIdByUser };
        conversationsByUser[userId] = authState.currentUser.conversations?.length
          ? authState.currentUser.conversations
          : [defaultConversation()];
        selectedConversationIdByUser[userId] = conversationsByUser[userId][0].id;
        set({ conversationsByUser, selectedConversationIdByUser });
      },
    }),
    {
      name: 'cortex-chat-store',
    },
  ),
);

export const useActiveConversations = () => {
  const userId = useAuthStore((state) => state.currentUser?.id);
  return useChatStore((state) => {
    if (!userId) return [];
    return state.conversationsByUser[userId] || [];
  });
};

export const useSelectedConversationId = () => {
  const userId = useAuthStore((state) => state.currentUser?.id);
  return useChatStore((state) => {
    if (!userId) return null;
    return state.selectedConversationIdByUser[userId];
  });
};
