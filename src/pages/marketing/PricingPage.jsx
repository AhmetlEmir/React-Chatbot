import { pricingPlans } from '../../data/platformSections.js';
import PricingCard from '../../components/cards/PricingCard.jsx';

const PricingPage = () => (
  <div className="container" style={{ padding: '5rem 0', display: 'grid', gap: '3rem' }}>
    <div style={{ textAlign: 'center' }}>
      <span className="badge">Fiyatlandırma</span>
      <h1 className="section-title">Her ekip için esnek planlar</h1>
      <p className="section-subtitle" style={{ margin: '0 auto' }}>
        Başlangıç seviyesinden kurumsala kadar tüm ekiplerin ihtiyaçlarına cevap veren planlar. Planlar arasında
        dilediğiniz zaman geçiş yapabilirsiniz.
      </p>
    </div>
    <div className="grid grid-3">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.name} {...plan} />
      ))}
    </div>
  </div>
);

export default PricingPage;
