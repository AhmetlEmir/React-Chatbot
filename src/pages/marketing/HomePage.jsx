import { Link } from 'react-router-dom';
import { featureHighlights, dashboardSections, complianceItems, mediaLibraryCategories } from '../../data/platformSections.js';
import HeroVideoPreview from '../../components/media/HeroVideoPreview.jsx';
import StatCard from '../../components/cards/StatCard.jsx';
import FeatureCard from '../../components/cards/FeatureCard.jsx';
import DashboardSectionCard from '../../components/cards/DashboardSectionCard.jsx';
import ComplianceList from '../../components/cards/ComplianceList.jsx';
import MediaLibraryCard from '../../components/cards/MediaLibraryCard.jsx';

const stats = [
  { label: 'Aktif Kullanıcı', value: '45K+', description: 'Küresel ekipler Cortex ile sohbetlerini yönetiyor.' },
  { label: 'Ortalama Yanıt Süresi', value: '180 ms', description: 'API mimarisi ile gecikme neredeyse sıfır.' },
  { label: 'Belgeler', value: '250K+', description: 'Şifrelenmiş şekilde depolanan kurumsal içerik.' },
];

const HomePage = () => (
  <div>
    <section className="container" style={{ padding: '5rem 0 6rem', display: 'grid', gap: '2.5rem' }}>
      <div className="badge">🧠 Cortex Technologies Chatbot Platformu</div>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', marginBottom: '1rem' }}>
            Güvenli, çok rollü ve komut odaklı chatbot deneyimi
          </h1>
          <p className="section-subtitle">
            Cortex Technologies; metin, komut ve dosya destekli yapay zekâ sohbetleri için uçtan uca platform sağlar.
            Token tabanlı güvenlik, kişisel ayarlar ve belge analizi tek panelde.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/register" className="button-primary">
              Hemen Başlayın
            </Link>
            <Link
              to="/pricing"
              style={{
                padding: '0.85rem 1.4rem',
                borderRadius: '999px',
                border: '1px solid rgba(148, 163, 184, 0.25)',
                color: 'rgba(226, 232, 240, 0.85)',
              }}
            >
              Planları İnceleyin
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <HeroVideoPreview />
      </div>
    </section>

    <section className="container" style={{ padding: '5rem 0' }}>
      <h2 className="section-title">Platform Yetenekleri</h2>
      <p className="section-subtitle">
        Komut sistemi, rol tabanlı cevaplar, belge analizi ve güvenlik katmanlarıyla uçtan uca kontrol sizde. Her
        kategori ayrı modüller hâlinde yönetilir.
      </p>
      <div className="grid grid-3" style={{ marginTop: '2rem' }}>
        {featureHighlights.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>

    <section className="container" style={{ padding: '5rem 0' }}>
      <div className="glass-panel" style={{ padding: '3rem', display: 'grid', gap: '2rem' }}>
        <div>
          <h2 className="section-title">Kontrol Paneli Modülleri</h2>
          <p className="section-subtitle">
            Sohbet geçmişi yönetimi, komut paleti, rol merkezleri ve dosya kitaplığı tek bakışta. Her modül ekibinizin
            iş akışını hızlandırır.
          </p>
        </div>
        <div className="grid grid-3">
          {dashboardSections.map((section) => (
            <DashboardSectionCard key={section.title} {...section} />
          ))}
        </div>
      </div>
    </section>

    <section className="container" style={{ padding: '5rem 0' }}>
      <div className="grid grid-2">
        <ComplianceList items={complianceItems} />
        <MediaLibraryCard categories={mediaLibraryCategories} />
      </div>
    </section>
  </div>
);

export default HomePage;
