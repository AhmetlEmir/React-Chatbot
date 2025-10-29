import { useMemo } from 'react';
import ChatMessage from './ChatMessage.jsx';
import ChatInput from './ChatInput.jsx';
import { useChatStore, useActiveConversations, useSelectedConversationId } from '../../store/chatStore.js';

const ChatWindow = () => {
  const conversations = useActiveConversations();
  const selectedConversationId = useSelectedConversationId();
  const sendMessage = useChatStore((state) => state.sendMessage);
  const conversation = useMemo(
    () => conversations.find((conv) => conv.id === selectedConversationId),
    [conversations, selectedConversationId],
  );

  return (
    <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ margin: 0 }}>{conversation?.title}</h3>
        <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>Rol modu: {conversation?.role || 'genel'}</p>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', maxHeight: '520px', display: 'grid', gap: '1rem' }}>
        {conversation?.messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
