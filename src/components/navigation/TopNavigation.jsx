import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useAuthStore } from '../../store/authStore.js';

const menuItems = [
  { label: 'Platform', to: '/' },
  { label: 'Fiyatlandırma', to: '/pricing' },
  { label: 'SSS', to: '/faq' },
  { label: 'İletişim', to: '/contact' },
];

const TopNavigation = () => {
  const { isAuthenticated, logout } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    logout: state.logout,
  }));

  return (
    <header
      style={{
        padding: '1.4rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(20px)',
        background: 'rgba(10, 15, 35, 0.7)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/">
          <Logo />
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              style={({ isActive }) => ({
                color: isActive ? '#38bdf8' : 'rgba(226,232,240,0.75)',
                fontWeight: isActive ? 600 : 500,
              })}
            >
              {item.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <>
              <Link to="/app" className="button-primary" style={{ paddingInline: '1.3rem' }}>
                Kontrol Paneli
              </Link>
              <button
                type="button"
                onClick={logout}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(148, 163, 184, 0.35)',
                  borderRadius: '999px',
                  color: 'rgba(226, 232, 240, 0.9)',
                  padding: '0.7rem 1.2rem',
                  cursor: 'pointer',
                }}
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <Link to="/login" className="button-primary">
              Giriş Yap
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default TopNavigation;
