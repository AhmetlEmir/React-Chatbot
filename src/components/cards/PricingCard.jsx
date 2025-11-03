import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PricingCard = ({ name, price, description, features }) => (
  <div
    className="glass-panel"
    style={{
      padding: '2.5rem',
      display: 'grid',
      gap: '1.2rem',
      border: name === 'Pro' ? '1px solid rgba(34, 211, 238, 0.4)' : '1px solid rgba(99, 102, 241, 0.25)',
    }}
  >
    <div>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0.5rem 0' }}>{price}</p>
      <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>{description}</p>
    </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
      {features.map((feature) => (
        <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: '#22d3ee' }}>✔</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/register" className="button-primary" style={{ textAlign: 'center' }}>
      Planı Seç
    </Link>
  </div>
);

PricingCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCard;
