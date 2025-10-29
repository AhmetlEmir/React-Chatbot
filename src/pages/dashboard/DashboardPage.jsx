import { Outlet, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardSidebar from '../../components/navigation/DashboardSidebar.jsx';
import DashboardHeader from '../../components/navigation/DashboardHeader.jsx';
import { useChatStore } from '../../store/chatStore.js';
import { useAuthStore } from '../../store/authStore.js';

const DashboardPage = () => {
  const hydrateFromUser = useChatStore((state) => state.hydrateFromUser);
  const currentUserId = useAuthStore((state) => state.currentUser?.id);

  useEffect(() => {
    hydrateFromUser();
  }, [hydrateFromUser, currentUserId]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <DashboardSidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <DashboardHeader />
        <main style={{ flex: 1, padding: '2.5rem', background: 'rgba(2, 6, 23, 0.9)' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
            <NavLink
              to="conversations"
              style={({ isActive }) => ({
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: isActive ? '#22d3ee' : 'rgba(226, 232, 240, 0.8)',
              })}
            >
              Sohbetler
            </NavLink>
            <NavLink
              to="settings"
              style={({ isActive }) => ({
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: isActive ? '#22d3ee' : 'rgba(226, 232, 240, 0.8)',
              })}
            >
              Ayarlar
            </NavLink>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
