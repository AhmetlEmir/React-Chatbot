import PropTypes from 'prop-types';

const FeatureCard = ({ title, description, icon }) => (
  <div
    className="glass-panel"
    style={{ padding: '2rem', display: 'grid', gap: '1rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}
  >
    <div style={{ fontSize: '2rem' }}>{icon}</div>
    <h3 style={{ margin: 0 }}>{title}</h3>
    <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>{description}</p>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FeatureCard;
