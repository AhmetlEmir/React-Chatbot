import { useAuthStore } from '../../store/authStore.js';

const DashboardHeader = () => {
  const currentUser = useAuthStore((state) => state.currentUser);

  return (
    <header
      style={{
        padding: '1.5rem 2.5rem',
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        background: 'rgba(4, 7, 21, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Kontrol Paneli</h2>
        <p style={{ margin: 0, color: 'rgba(148, 163, 184, 0.7)', fontSize: '0.9rem' }}>
          Merhaba {currentUser?.username}! Sohbetlerinizi yönetin, dosyalarınızı paylaşın ve komutları keşfedin.
        </p>
      </div>
      <div className="glass-panel" style={{ padding: '0.75rem 1.5rem', borderRadius: '18px', display: 'grid', gap: '0.25rem' }}>
        <span style={{ fontWeight: 600 }}>{currentUser?.email}</span>
        <span style={{ color: 'rgba(148, 163, 184, 0.75)', fontSize: '0.85rem' }}>Ülke: {currentUser?.country}</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
