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
          <div className="contact-grid">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#E3000F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                  <path d="M6 5h5"/>
                  <path d="M6 8h3"/>
                  <path d="M14 13h5"/>
                  <path d="M14 16h3"/>
                </svg>
                <h2 style={{ fontSize: '2rem', margin: 0, color: '#2A1A12' }}>Get in Touch</h2>
              </div>
              <p style={{ color: '#555', marginBottom: '30px', lineHeight: '1.6', fontSize: '1.1rem' }}>Have questions about our products or want to discuss a partnership? We're here to help.</p>
              
              <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '5px' }}>Email Us</h4>
                  <p style={{ color: '#555' }}>mascounitedksa@gmail.com</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '5px' }}>Call Us</h4>
                  <p style={{ color: '#555' }}>+966 506 85 5411</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '10px' }}>Visit Us (Headquarters)</h4>
                  <p style={{ color: '#555', margin: '0 0 5px 0' }}>Building No. 4045, Street No. 40</p>
                  <p style={{ color: '#555', margin: '0 0 5px 0' }}>Al Misfat Dist. (Secondary No. 8211)</p>
                  <p style={{ color: '#555', margin: '0 0 5px 0' }}>Riyadh 14528, Kingdom of Saudi Arabia</p>
                  <p style={{ color: '#888', margin: '5px 0 0 0', fontSize: '0.9rem' }}>Short Address: RMFA4045</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: 'white', borderRadius: '24px', padding: '50px', boxShadow: 'var(--shadow-sm)' }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="contact-form-grid">
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>First Name</label>
                    <input type="text" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Last Name</label>
                    <input type="text" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                
                <button type="button" className="btn" style={{ alignSelf: 'flex-start', padding: '15px 40px', fontSize: '1.1rem' }}>Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
