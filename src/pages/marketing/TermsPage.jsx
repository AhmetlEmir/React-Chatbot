import { termsSections } from '../../data/legalContent.js';

const TermsPage = () => (
  <div className="container" style={{ padding: '5rem 0', display: 'grid', gap: '2.5rem' }}>
    <div>
      <span className="badge">Kullanım Koşulları</span>
      <h1 className="section-title">Hizmet Şartları</h1>
      <p className="section-subtitle">
        Cortex Technologies platformuna erişen tüm kullanıcılar aşağıdaki kullanım koşullarını kabul etmiş sayılır.
        Güncel koşullar düzenli olarak paylaşılır.
      </p>
    </div>
    <div className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gap: '1.5rem' }}>
      {termsSections.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          <p style={{ color: 'rgba(148, 163, 184, 0.85)' }}>{section.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TermsPage;
