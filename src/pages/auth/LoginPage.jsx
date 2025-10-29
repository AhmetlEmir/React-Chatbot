import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const identifier = formData.get('identifier');
    const password = formData.get('password');

    try {
      await login({ identifier, password });
      const redirectTo = location.state?.from?.pathname || '/app';
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 style={{ marginBottom: '0.75rem' }}>Giriş Yap</h2>
        <p style={{ color: 'rgba(148, 163, 184, 0.75)', marginBottom: '1.5rem' }}>
          Kayıtlı kullanıcılar giriş yaparak sohbet geçmişlerine, medya kütüphanelerine ve komut sistemine erişebilir.
        </p>
      </div>
      <div>
        <label htmlFor="identifier">E-posta veya Kullanıcı Adı</label>
        <input id="identifier" name="identifier" placeholder="ornek@cortex.ai" required />
      </div>
      <div>
        <label htmlFor="password">Şifre</label>
        <input id="password" name="password" type="password" placeholder="••••••••" required />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
          <input type="checkbox" name="remember" style={{ width: '16px', height: '16px' }} />
          Beni hatırla
        </label>
        <Link to="/forgot-password" className="link">
          Şifremi unuttum
        </Link>
      </div>
      <button className="button-primary" type="submit" disabled={loading}>
        {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
      </button>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
    </form>
  );
};

export default LoginPage;
