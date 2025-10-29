import PropTypes from 'prop-types';

const sizes = {
  sm: '1.1rem',
  md: '1.4rem',
  lg: '1.8rem',
};

const Logo = ({ size = 'md' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
    <div
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
        display: 'grid',
        placeItems: 'center',
        color: '#fff',
        fontWeight: 700,
      }}
    >
      CT
    </div>
    <div>
      <span className="gradient-text" style={{ fontSize: sizes[size], fontWeight: 700 }}>
        Cortex Technologies
      </span>
    </div>
  </div>
);

Logo.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Logo;
