const LoadingScreen = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: 'radial-gradient(circle at top, rgba(99,102,241,0.2), transparent 60%)',
    }}
  >
    <div className="glass-panel" style={{ padding: '2rem 3rem', textAlign: 'center' }}>
      <div
        className="spinner"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '4px solid rgba(148, 163, 184, 0.25)',
          borderTopColor: '#22d3ee',
          margin: '0 auto 1.5rem',
          animation: 'spin 1.2s linear infinite',
        }}
      />
      <h3 style={{ marginBottom: '0.75rem' }}>Yükleniyor</h3>
      <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>
        Cortex motoru başlatılıyor. Lütfen birkaç saniye bekleyin.
      </p>
    </div>
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </div>
);

export default LoadingScreen;
