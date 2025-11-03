import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useChatStore, useActiveConversations, useSelectedConversationId } from '../../store/chatStore.js';
import { useAuthStore } from '../../store/authStore.js';

const DashboardSidebar = () => {
  const conversations = useActiveConversations();
  const selectedConversationId = useSelectedConversationId();
  const selectConversation = useChatStore((state) => state.selectConversation);
  const addConversation = useChatStore((state) => state.addConversation);
  const deleteConversation = useChatStore((state) => state.deleteConversation);
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside
      style={{
        width: '320px',
        background: 'rgba(5, 10, 26, 0.95)',
        borderRight: '1px solid rgba(148, 163, 184, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1.5rem',
        gap: '1.5rem',
      }}
    >
      <Logo />
      <button className="button-primary" type="button" onClick={() => addConversation({ title: 'Yeni Sohbet' })}>
        Yeni Sohbet Başlat
      </button>
      <div style={{ flex: 1, overflowY: 'auto', display: 'grid', gap: '0.75rem' }}>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="glass-panel"
            style={{
              padding: '1rem',
              border: conversation.id === selectedConversationId ? '1px solid rgba(34, 211, 238, 0.5)' : undefined,
              cursor: 'pointer',
              display: 'grid',
              gap: '0.5rem',
            }}
            onClick={() => selectConversation(conversation.id)}
          >
            <strong>{conversation.title}</strong>
            <span style={{ color: 'rgba(148, 163, 184, 0.75)', fontSize: '0.85rem' }}>
              {conversation.messages.length} mesaj
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                style={{
                  padding: '0.45rem 0.8rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(148, 163, 184, 0.25)',
                  background: 'transparent',
                  color: 'rgba(226, 232, 240, 0.9)',
                  cursor: 'pointer',
                }}
              >
                Aç
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteConversation(conversation.id);
                }}
                style={{
                  padding: '0.45rem 0.8rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(248, 113, 113, 0.35)',
                  background: 'rgba(248, 113, 113, 0.1)',
                  color: '#f87171',
                  cursor: 'pointer',
                }}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
      <nav style={{ display: 'grid', gap: '0.75rem' }}>
        <NavLink to="/pricing" className="link">
          Planları Yükselt
        </NavLink>
        <button
          type="button"
          onClick={logout}
          style={{
            background: 'transparent',
            border: '1px solid rgba(148, 163, 184, 0.25)',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
            color: 'rgba(226, 232, 240, 0.9)',
            cursor: 'pointer',
          }}
        >
          Çıkış Yap
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
