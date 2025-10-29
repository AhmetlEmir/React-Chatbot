import PropTypes from 'prop-types';

const DashboardSectionCard = ({ title, description, items }) => (
  <div className="glass-panel" style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
    <div>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>{description}</p>
    </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

DashboardSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DashboardSectionCard;
