import { privacySections } from '../../data/legalContent.js';

const PrivacyPage = () => (
  <div className="container" style={{ padding: '5rem 0', display: 'grid', gap: '2.5rem' }}>
    <div>
      <span className="badge">Gizlilik</span>
      <h1 className="section-title">Gizlilik Politikası</h1>
      <p className="section-subtitle">
        Kullanıcı verilerini korumak en büyük önceliğimiz. Şeffaf veri süreçleri ve güçlü şifreleme yöntemleri ile
        bilgileriniz güvende.
      </p>
    </div>
    <div className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gap: '1.5rem' }}>
      {privacySections.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          <p style={{ color: 'rgba(148, 163, 184, 0.85)' }}>{section.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PrivacyPage;
