import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore.js';
import countryOptions from '../../data/countries.js';

const RegisterPage = () => {
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const payload = {
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
      country: formData.get('country'),
      age: Number(formData.get('age')),
    };

    try {
      await register(payload);
      navigate('/app', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 style={{ marginBottom: '0.75rem' }}>Hesap Oluşturun</h2>
        <p style={{ color: 'rgba(148, 163, 184, 0.75)', marginBottom: '1.5rem' }}>
          Cortex Technologies hesabınızla sohbet geçmişinizi, medya kütüphanenizi ve ayarlarınızı bulutta güvenle
          saklayabilirsiniz.
        </p>
      </div>
      <div>
        <label htmlFor="email">Kurumsal E-posta</label>
        <input id="email" name="email" type="email" placeholder="ornek@cortex.ai" required />
      </div>
      <div>
        <label htmlFor="username">Kullanıcı Adı</label>
        <input id="username" name="username" placeholder="cortex_uzmani" required />
      </div>
      <div>
        <label htmlFor="password">Şifre</label>
        <input id="password" name="password" type="password" placeholder="Güçlü şifre" required minLength={8} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        <div>
          <label htmlFor="country">Ülke</label>
          <select id="country" name="country" required defaultValue="TR">
            {countryOptions.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="age">Yaş</label>
          <input id="age" name="age" type="number" min="18" max="99" placeholder="25" required />
        </div>
      </div>
      <button className="button-primary" type="submit" disabled={loading}>
        {loading ? 'Kaydediliyor...' : 'Kayıt Ol'}
      </button>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
    </form>
  );
};

export default RegisterPage;
