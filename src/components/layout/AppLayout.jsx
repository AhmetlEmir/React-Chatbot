import PropTypes from 'prop-types';
import TopNavigation from '../navigation/TopNavigation.jsx';
import Footer from '../navigation/Footer.jsx';

const AppLayout = ({ children }) => (
  <div className="app-layout">
    <TopNavigation />
    <main>{children}</main>
    <Footer />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
