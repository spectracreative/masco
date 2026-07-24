import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'left' }}>
          
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <img src="/images/logo.png" alt="Ezwah Arabic Logo" style={{ height: '60px', filter: 'brightness(0) invert(1)' }} />
              <img src="/images/logo2.png" alt="Ezwah Logo" style={{ height: '50px' }} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}><img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo white" /> is the pioneer in making and packing the highest quality nuts, seeds, and dried fruits. A self-made achievement built on passion.</p>
            <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '500' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/products" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Products</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo white" /> Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
