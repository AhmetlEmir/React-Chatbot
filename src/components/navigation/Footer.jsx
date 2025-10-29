import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const Footer = () => (
  <footer style={{ padding: '4rem 0', marginTop: '5rem', background: 'rgba(10, 15, 35, 0.6)' }}>
    <div className="container" style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      <div>
        <Logo />
        <p style={{ color: 'rgba(148, 163, 184, 0.75)', marginTop: '1rem' }}>
          Cortex Technologies, güvenli kimlik doğrulama ve çoklu rol desteğiyle işletmelere profesyonel chatbot
          deneyimi sunar.
        </p>
      </div>
      <div>
        <h4>Platform</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
          <li>
            <Link to="/" className="link">
              Özellikler
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="link">
              Fiyatlandırma
            </Link>
          </li>
          <li>
            <Link to="/faq" className="link">
              SSS
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Politikalar</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
          <li>
            <Link to="/privacy" className="link">
              Gizlilik Politikası
            </Link>
          </li>
          <li>
            <Link to="/terms" className="link">
              Kullanım Koşulları
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <p style={{ color: 'rgba(148, 163, 184, 0.8)' }}>
          support@cortextech.ai
          <br />
          +90 850 555 00 00
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
          <a className="link" href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link" href="https://twitter.com" target="_blank" rel="noreferrer">
            X
          </a>
          <a className="link" href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </div>
    <div style={{ marginTop: '3rem', textAlign: 'center', color: 'rgba(148, 163, 184, 0.6)', fontSize: '0.85rem' }}>
      © {new Date().getFullYear()} Cortex Technologies. Tüm hakları saklıdır.
    </div>
  </footer>
);

export default Footer;
