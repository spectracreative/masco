import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleCart, cartCount } = useCart();
  const { language, toggleLanguage, t, translateCategory } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        {language === 'ar' ? 'الانتقال إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      <div className="container header-container">
        <div className="logo">
          <Link to="/" aria-label="Ezwah Home" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="/images/logo.png" 
              alt="Ezwah Arabic Logo" 
              className="header-logo-ar"
              loading="eager"
              style={{ 
                height: scrolled ? '50px' : '65px', 
                filter: 'brightness(0) invert(1)',
                transition: 'var(--transition)'
              }} 
            />
            <img 
              src="/images/logo2.png" 
              alt="Ezwah English Logo" 
              className="header-logo-en"
              loading="eager"
              style={{ 
                height: scrolled ? '40px' : '50px', 
                filter: 'none',
                transition: 'var(--transition)'
              }} 
            />
          </Link>
        </div>
        
        {/* Mobile Backdrop */}
        <div 
          className={`mobile-backdrop ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>

        <nav aria-label="Main Navigation" style={{ display: 'flex', alignItems: 'center' }}>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li className="mobile-menu-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/images/logo.png" alt="Ezwah Logo" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
                <img src="/images/logo2.png" alt="Ezwah Logo" style={{ height: '25px' }} />
              </div>
              <button 
                className="icon-btn" 
                onClick={() => setMobileMenuOpen(false)} 
                style={{ color: '#2A1A12' }}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </li>

            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active-nav-link' : ''} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav_home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active-nav-link' : ''} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav_about')}
              </Link>
            </li>
            <li className="dropdown-parent">
              <Link 
                to="/products" 
                className={`dropdown-toggle ${isActive('/products') ? 'active-nav-link' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav_products')}
              </Link>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  {categories.map(cat => {
                    let name = cat.toLowerCase();
                    if (cat === "Sunflower Seed") name = "sunflower-seed/sunflower";
                    else if (cat === "Pumpkin Seed") name = "pumpkin-seed/pumpkin";
                    else name = `${name}/${name}`;
                    const bgImg = `/images/categories/${name}.png`;
                    
                    return (
                      <Link to={`/products/${encodeURIComponent(cat)}`} key={cat} onClick={() => setMobileMenuOpen(false)} className="mega-menu-item">
                        <div className="mega-menu-img-wrapper">
                          <img src={bgImg} alt={cat} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        <span style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>{translateCategory(cat)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active-nav-link' : ''} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav_contact')}
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Header Language Switcher Button */}
          <button 
            onClick={toggleLanguage} 
            className="lang-switch-btn"
            title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
            aria-label="Switch Language"
          >
            <Globe size={18} />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Search Action */}
          {searchOpen ? (
            <form onSubmit={handleSearch} className="search-form" style={{ display: 'flex', alignItems: 'center' }} role="search">
              <input 
                type="text" 
                placeholder={t('nav_search_placeholder')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                aria-label="Search products input"
                style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #ccc', outline: 'none', width: '150px' }}
              />
              <button 
                type="button" 
                onClick={() => setSearchOpen(false)} 
                aria-label="Close search"
                style={{ background: 'none', border: 'none', marginLeft: '5px', cursor: 'pointer', fontSize: '18px', color: 'white' }}
              >
                ×
              </button>
            </form>
          ) : (
            <button className="icon-btn" aria-label="Search products" onClick={() => setSearchOpen(true)}>
              <Search size={22} />
            </button>
          )}

          {/* Cart Icon Button */}
          <button 
            className="icon-btn header-cart-btn" 
            aria-label={`Cart with ${cartCount} items`}
            onClick={toggleCart}
            style={{ position: 'relative' }}
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="icon-btn d-md-none" 
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
