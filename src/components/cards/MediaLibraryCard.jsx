import PropTypes from 'prop-types';

const MediaLibraryCard = ({ categories }) => (
  <div className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gap: '1.2rem' }}>
    <div>
      <h3 style={{ marginBottom: '0.75rem' }}>Medya Kütüphanesi</h3>
      <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>
        Sohbetlerinizde kullanabileceğiniz görsel, dosya ve dokümanları kategorilere göre düzenledik. Her varlık
        şifrelenerek saklanır.
      </p>
    </div>
    <div style={{ display: 'grid', gap: '1rem' }}>
      {categories.map((category) => (
        <div
          key={category.name}
          style={{
            borderRadius: '18px',
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            padding: '1.25rem',
          }}
        >
          <h4 style={{ margin: '0 0 0.75rem 0' }}>{category.name}</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.assets.map((asset) => (
              <span key={asset} className="tag">
                {asset}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

MediaLibraryCard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      assets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default MediaLibraryCard;
