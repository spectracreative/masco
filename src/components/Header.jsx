import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toggleCart, cartCount } = useCart();
  const { language, toggleLanguage, t, translateCategory } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="/images/logo.png" 
              alt="Ezwah Arabic Logo" 
              className="header-logo-ar"
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
              style={{ 
                height: scrolled ? '40px' : '50px', 
                filter: 'none',
                transition: 'var(--transition)'
              }} 
            />
          </Link>
        </div>
        
        {/* Mobile Backdrop */}
        <div className={`mobile-backdrop ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          
          <li className="mobile-menu-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/images/logo.png" alt="Ezwah Logo" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
              <img src="/images/logo2.png" alt="Ezwah Logo" style={{ height: '25px' }} />
            </div>
            <button className="icon-btn" onClick={() => setMobileMenuOpen(false)} style={{ color: '#2A1A12' }}>
              <X size={28} />
            </button>
          </li>

          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>{t('nav_home')}</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>{t('nav_about')}</Link></li>
          <li className="dropdown-parent">
            <Link to="/products" className="dropdown-toggle" onClick={() => setMobileMenuOpen(false)}>{t('nav_products')}</Link>
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
                        <img src={bgImg} alt={cat} onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500', marginTop: '4px' }}>{translateCategory(cat)}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>{t('nav_contact')}</Link></li>
        </ul>
        
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          {/* Header Language Switcher Button (Single button next to search icon) */}
          <button 
            onClick={toggleLanguage} 
            className="lang-switch-btn"
            title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
            aria-label="Switch Language"
          >
            <Globe size={18} />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {searchOpen ? (
            <form onSubmit={handleSearch} className="search-form" style={{ display: 'flex', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder={t('nav_search_placeholder')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #ccc', outline: 'none', width: '150px' }}
              />
              <button type="button" onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', marginLeft: '5px', cursor: 'pointer', fontSize: '18px', color: 'white' }}>×</button>
            </form>
          ) : (
            <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={22} />
            </button>
          )}
          
          <button className="icon-btn d-md-none" aria-label="Menu" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
