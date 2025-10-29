import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.info('İletişim formu gönderildi:', payload);
    setStatus('success');
    event.currentTarget.reset();
  };

  return (
    <form className="glass-panel" style={{ padding: '2.5rem' }} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Ad Soyad</label>
        <input id="fullName" name="fullName" placeholder="Adınızı yazın" required />
      </div>
      <div>
        <label htmlFor="email">E-posta</label>
        <input id="email" name="email" type="email" placeholder="ornek@cortex.ai" required />
      </div>
      <div>
        <label htmlFor="subject">Konu</label>
        <select id="subject" name="subject" defaultValue="destek">
          <option value="destek">Teknik Destek</option>
          <option value="satis">Satış</option>
          <option value="demo">Canlı Demo</option>
          <option value="diger">Diğer</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Mesajınız</label>
        <textarea id="message" name="message" placeholder="Bize nasıl yardımcı olabiliriz?" />
      </div>
      <button className="button-primary" type="submit">
        Gönder
      </button>
      {status === 'success' && (
        <p style={{ color: '#34d399', fontWeight: 600 }}>Teşekkürler! Mesajınızı aldık ve en kısa sürede dönüş yapacağız.</p>
      )}
    </form>
  );
};

export default ContactForm;
