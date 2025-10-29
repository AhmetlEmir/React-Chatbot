import ContactForm from '../../components/forms/ContactForm.jsx';

const ContactPage = () => (
  <div className="container" style={{ padding: '5rem 0', display: 'grid', gap: '3rem' }}>
    <div style={{ display: 'grid', gap: '1rem' }}>
      <span className="badge">İletişim</span>
      <h1 className="section-title">Ekibimizle bağlantı kurun</h1>
      <p className="section-subtitle">
        Teknik destek, satış veya demo talepleriniz için formu doldurun. 24 saat içinde size dönüş yapıyoruz.
      </p>
    </div>
    <div className="grid grid-2" style={{ alignItems: 'start' }}>
      <ContactForm />
      <div className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gap: '1rem' }}>
        <div>
          <h3>Merkez Ofis</h3>
          <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>
            Teknoloji Üssü, 34906, İstanbul
            <br />
            +90 850 555 00 00
          </p>
        </div>
        <div>
          <h3>Destek Saatleri</h3>
          <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>Hafta içi 09:00 - 22:00, hafta sonu 10:00 - 18:00</p>
        </div>
        <div>
          <h3>Basın & Medya</h3>
          <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>press@cortextech.ai</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
