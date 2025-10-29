import PropTypes from 'prop-types';

const StatCard = ({ label, value, description }) => (
  <div
    className="glass-panel"
    style={{
      padding: '1.5rem',
      minWidth: '180px',
      background: 'rgba(15, 23, 42, 0.55)',
      border: '1px solid rgba(99, 102, 241, 0.15)',
    }}
  >
    <p style={{ color: 'rgba(148, 163, 184, 0.75)', fontSize: '0.9rem', marginBottom: '0.35rem' }}>{label}</p>
    <h3 style={{ fontSize: '1.7rem', margin: 0 }}>{value}</h3>
    <p style={{ color: 'rgba(148, 163, 184, 0.75)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{description}</p>
  </div>
);

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StatCard;
