import { Outlet, Link, useLocation } from 'react-router-dom';
import Logo from '../navigation/Logo.jsx';

const AuthLayout = () => {
  const location = useLocation();
  const isRegister = location.pathname.includes('register');

  return (
    <div className="auth-layout" style={{ minHeight: '100vh', display: 'flex' }}>
      <div
        className="auth-hero"
        style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem',
        background:
          'radial-gradient(circle at top left, rgba(99,102,241,0.35), transparent 60%), rgba(6,11,32,0.9)',
      }}
    >
      <Logo size="lg" />
      <h1 style={{ fontSize: '2.5rem', marginTop: '2.5rem', maxWidth: '420px' }}>
        Cortex Technologies ile geleceğin yapay zekâ asistanı parmaklarınızın ucunda
      </h1>
      <p style={{ color: 'rgba(226, 232, 240, 0.75)', maxWidth: '480px' }}>
        Güvenlik, hız ve esneklik için sıfırdan tasarlanmış profesyonel chatbot platformumuzla ekiplerinizin
        verimliliğini artırın. Rol tabanlı cevaplar, komutlar ve belge analizi tek bir yerde.
      </p>
      <div style={{ marginTop: 'auto' }}>
        <p style={{ color: 'rgba(148, 163, 184, 0.7)', fontSize: '0.85rem' }}>
          Cortex Technologies © {new Date().getFullYear()}. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
    <div
      className="auth-panel"
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
      }}
    >
      <div className="glass-panel" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          {isRegister ? (
            <p style={{ fontSize: '0.9rem', color: 'rgba(148, 163, 184, 0.8)' }}>
              Zaten hesabınız var mı?{' '}
              <Link to="/login" className="link">
                Giriş yapın
              </Link>
            </p>
          ) : (
            <p style={{ fontSize: '0.9rem', color: 'rgba(148, 163, 184, 0.8)' }}>
              Hesabınız yok mu?{' '}
              <Link to="/register" className="link">
                Şimdi kayıt olun
              </Link>
            </p>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
