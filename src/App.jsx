import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Lazy loading route components for optimal performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const PageLoader = () => (
  <div className="page-spinner-container" aria-label="Loading page">
    <div className="page-spinner"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ToastNotification = () => {
  const { toastMessage } = useCart();
  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: 'var(--primary-dark)',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            zIndex: 9999,
            fontWeight: '500'
          }}
        >
          {toastMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="app-container">
            <Header />
            <CartSidebar />
            <ToastNotification />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:category" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
