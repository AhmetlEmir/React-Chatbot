import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore.js';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const resetPassword = useAuthStore((state) => state.resetPassword);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const identifier = formData.get('identifier');
    const newPassword = formData.get('password');

    try {
      await resetPassword({ identifier, password: newPassword });
      setStatus({ type: 'success', message: 'Şifreniz güncellendi. Kontrol paneline yönlendiriliyorsunuz.' });
      setTimeout(() => navigate('/app', { replace: true }), 1200);
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 style={{ marginBottom: '0.75rem' }}>Şifre Sıfırlama</h2>
        <p style={{ color: 'rgba(148, 163, 184, 0.75)', marginBottom: '1.5rem' }}>
          Kayıtlı e-posta adresinizi ve yeni şifrenizi girerek hesabınıza tekrar erişebilirsiniz. Tüm oturumlarınız
          güvenlik için sonlandırılır.
        </p>
      </div>
      <div>
        <label htmlFor="identifier">Kayıtlı E-posta</label>
        <input id="identifier" name="identifier" type="email" placeholder="ornek@cortex.ai" required />
      </div>
      <div>
        <label htmlFor="password">Yeni Şifre</label>
        <input id="password" name="password" type="password" placeholder="Yeni şifre" required minLength={8} />
      </div>
      <button className="button-primary" type="submit">
        Şifreyi Güncelle
      </button>
      {status.type !== 'idle' && (
        <p style={{ color: status.type === 'success' ? '#34d399' : '#f87171' }}>{status.message}</p>
      )}
    </form>
  );
};

export default ForgotPasswordPage;
