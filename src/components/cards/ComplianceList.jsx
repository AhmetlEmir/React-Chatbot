import PropTypes from 'prop-types';

const ComplianceList = ({ items }) => (
  <div className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gap: '1rem' }}>
    <div>
      <h3 style={{ marginBottom: '0.75rem' }}>Güvenlik ve Uyum Katmanları</h3>
      <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>
        Verilerinizi token tabanlı kimlik doğrulama, şifreleme ve denetim loglarıyla koruyoruz. KVKK ve GDPR uyumlu
        süreçlerimizle verileriniz güvende.
      </p>
    </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(34, 211, 238, 0.08)',
            borderRadius: '16px',
            padding: '0.75rem 1rem',
            border: '1px solid rgba(34, 211, 238, 0.15)',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>✔</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

ComplianceList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ComplianceList;
