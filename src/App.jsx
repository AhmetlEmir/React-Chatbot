import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppLayout from './components/layout/AppLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';
import LoadingScreen from './components/feedback/LoadingScreen.jsx';
import { useAuthStore } from './store/authStore.js';

const HomePage = lazy(() => import('./pages/marketing/HomePage.jsx'));
const PricingPage = lazy(() => import('./pages/marketing/PricingPage.jsx'));
const FaqPage = lazy(() => import('./pages/marketing/FaqPage.jsx'));
const ContactPage = lazy(() => import('./pages/marketing/ContactPage.jsx'));
const PrivacyPage = lazy(() => import('./pages/marketing/PrivacyPage.jsx'));
const TermsPage = lazy(() => import('./pages/marketing/TermsPage.jsx'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage.jsx'));
const ForgotPasswordPage = lazy(() => import('./pages/auth/ForgotPasswordPage.jsx'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage.jsx'));
const ConversationPage = lazy(() => import('./pages/dashboard/ConversationPage.jsx'));
const SettingsPage = lazy(() => import('./pages/dashboard/SettingsPage.jsx'));

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/app" replace />;
  }

  return children;
};

const App = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      <Route
        element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
        path="/"
      />
      <Route
        element={
          <AppLayout>
            <PricingPage />
          </AppLayout>
        }
        path="/pricing"
      />
      <Route
        element={
          <AppLayout>
            <FaqPage />
          </AppLayout>
        }
        path="/faq"
      />
      <Route
        element={
          <AppLayout>
            <ContactPage />
          </AppLayout>
        }
        path="/contact"
      />
      <Route
        element={
          <AppLayout>
            <PrivacyPage />
          </AppLayout>
        }
        path="/privacy"
      />
      <Route
        element={
          <AppLayout>
            <TermsPage />
          </AppLayout>
        }
        path="/terms"
      />
      <Route
        element={
          <PublicRoute>
            <AuthLayout />
          </PublicRoute>
        }
      >
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
        path="/app"
      >
        <Route index element={<Navigate to="conversations" replace />} />
        <Route path="conversations" element={<ConversationPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Suspense>
);

export default App;
