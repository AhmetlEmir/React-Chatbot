import { useState } from 'react';
import { useAuthStore } from '../../store/authStore.js';

const SettingsPage = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const updateUser = useAuthStore((state) => state.updateUser);
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updates = {
      username: formData.get('username'),
      country: formData.get('country'),
      age: Number(formData.get('age')),
    };
    updateUser(updates);
    setStatus('Ayarlarınız güncellendi.');
  };

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', maxWidth: '640px', display: 'grid', gap: '1.5rem' }}>
      <div>
        <h3>Hesap Ayarları</h3>
        <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>
          Profil bilgilerinizi güncelleyebilir, kişisel verilerinizi dışa aktarabilir veya sohbet geçmişinizi
          temizleyebilirsiniz.
        </p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
        <div>
          <label htmlFor="username">Kullanıcı Adı</label>
          <input id="username" name="username" defaultValue={currentUser?.username} required />
        </div>
        <div>
          <label htmlFor="country">Ülke</label>
          <input id="country" name="country" defaultValue={currentUser?.country} required />
        </div>
        <div>
          <label htmlFor="age">Yaş</label>
          <input id="age" name="age" type="number" defaultValue={currentUser?.age} min="18" max="99" required />
        </div>
        <button className="button-primary" type="submit">
          Ayarları Kaydet
        </button>
      </form>
      {status && <p style={{ color: '#34d399', fontWeight: 600 }}>{status}</p>}
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <button
          type="button"
          onClick={() => {
            const data = JSON.stringify(currentUser, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'cortex-export.json';
            link.click();
            URL.revokeObjectURL(url);
          }}
          style={{
            background: 'transparent',
            border: '1px solid rgba(148, 163, 184, 0.25)',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
            color: 'rgba(226, 232, 240, 0.9)',
            cursor: 'pointer',
          }}
        >
          Verileri Dışa Aktar
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
