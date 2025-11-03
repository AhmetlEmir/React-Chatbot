const HeroVideoPreview = () => (
  <div
    className="glass-panel"
    style={{
      position: 'relative',
      padding: '2.5rem',
      minHeight: '360px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <span className="badge" style={{ marginBottom: '1rem' }}>
        Komut Paleti • Rol Merkezi • Dosya Analizi
      </span>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Kontrol Paneli Önizlemesi</h3>
      <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>
        Sohbet geçmişlerinizi listeleyin, belgeleri sürükleyip bırakın ve Cortex motorundan gerçek zamanlı yanıtlar
        alın. Komut paleti ile /özet veya /çevir komutlarına anında erişin.
      </p>
    </div>
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        marginTop: '2rem',
      }}
    >
      {['Rol Modları', 'Komutlar', 'Dosya Merkezi', 'Sohbet Geçmişi'].map((item) => (
        <div
          key={item}
          style={{
            borderRadius: '18px',
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '1rem',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            color: 'rgba(226, 232, 240, 0.85)',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {item}
        </div>
      ))}
    </div>
    <div
      style={{
        position: 'absolute',
        inset: '-20px',
        borderRadius: '28px',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        pointerEvents: 'none',
      }}
    />
  </div>
);

export default HeroVideoPreview;
