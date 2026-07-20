import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toggleCart, cartCount } = useCart();

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
            <img src="/images/logo.png" alt="Baja Logo" />
            <img src="/images/logo2.png" alt="Ezwah Logo" style={{ filter: 'none' }} />
          </Link>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li className="dropdown-parent">
            <Link to="/products" className="dropdown-toggle" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <ul className="dropdown-menu">
              {categories.map(cat => (
                <li key={cat}>
                  <Link to={`/products/${encodeURIComponent(cat)}`} onClick={() => setMobileMenuOpen(false)}>{cat}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
        
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {searchOpen ? (
            <form onSubmit={handleSearch} className="search-form" style={{ display: 'flex', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="Search..." 
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
          
          <button className="cart-btn" aria-label="Cart" onClick={toggleCart}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          
          <button className="icon-btn d-md-none" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
