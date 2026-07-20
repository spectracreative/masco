import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <main className="page-wrapper">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>We'd love to hear from you.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--bg-color)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ background: 'white', borderRadius: '24px', padding: '50px', boxShadow: 'var(--shadow-sm)', maxWidth: '800px', margin: '0 auto' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="contact-form-grid">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="button" className="btn" style={{ alignSelf: 'flex-start', padding: '15px 40px', fontSize: '1.1rem' }}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
