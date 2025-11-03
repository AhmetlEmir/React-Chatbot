import { faqItems } from '../../data/platformSections.js';

const FaqPage = () => (
  <div className="container" style={{ padding: '5rem 0', display: 'grid', gap: '2rem' }}>
    <div style={{ textAlign: 'center' }}>
      <span className="badge">SSS</span>
      <h1 className="section-title">Sık Sorulan Sorular</h1>
      <p className="section-subtitle" style={{ margin: '0 auto' }}>
        Cortex Technologies platformu hakkında merak edilen tüm detaylar. Daha fazla sorunuz için ekibimize
        ulaşabilirsiniz.
      </p>
    </div>
    <div style={{ display: 'grid', gap: '1.2rem' }}>
      {faqItems.map((item) => (
        <details key={item.question} className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
          <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{item.question}</summary>
          <p style={{ marginTop: '0.75rem', color: 'rgba(148, 163, 184, 0.8)' }}>{item.answer}</p>
        </details>
      ))}
    </div>
  </div>
);

export default FaqPage;
