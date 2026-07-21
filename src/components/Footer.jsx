import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <img src="/images/logo.png" alt="Baja Logo" style={{ height: '60px', filter: 'brightness(0) invert(1)' }} />
              <img src="/images/logo2.png" alt="Ezwah Logo" style={{ height: '50px' }} />
            </Link>
            <p><img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo white" /> is the pioneer in making and packing the highest quality nuts, coffee, tea, and dried fruits. A self-made achievement built on passion.</p>
          </div>
          
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Journey</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Wholesale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Stay Updated</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Subscribe to our newsletter for exclusive offers and fresh news.</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Your email address" />
              <button>Join</button>
            </div>
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
