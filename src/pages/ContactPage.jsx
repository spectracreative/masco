import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <main className="page-wrapper" id="main-content">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: 'clamp(100px, 12vw, 140px) 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '15px' }}>{t('nav_contact')}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>{t('contact_hero_sub')}</p>
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
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#E3000F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                  <path d="M6 5h5"/>
                  <path d="M6 8h3"/>
                  <path d="M14 13h5"/>
                  <path d="M14 16h3"/>
                </svg>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0, color: '#2A1A12' }}>{t('contact_info_heading')}</h2>
              </div>
              <p style={{ color: '#555', marginBottom: '30px', lineHeight: '1.6', fontSize: '1.1rem' }}>{t('contact_hero_sub')}</p>
              
              <div style={{ background: 'white', borderRadius: '24px', padding: 'clamp(20px, 4vw, 40px)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '5px' }}>{t('email_label')}</h3>
                  <p style={{ color: '#555' }}>
                    <a href="mailto:mascounitedksa@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>mascounitedksa@gmail.com</a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '5px' }}>{t('phone_label')}</h3>
                  <p style={{ color: '#555', direction: 'ltr', textAlign: language === 'ar' ? 'right' : 'left' }}>
                    <a href="tel:+966506855411" style={{ color: 'inherit', textDecoration: 'underline' }}>+966 506 85 5411</a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>{t('address_label')}</h3>
                  <p style={{ color: '#555', margin: '0 0 5px 0' }}>Building No. 4045, Street No. 40</p>
                  <p style={{ color: '#555', margin: '0 0 5px 0' }}>Al Misfat Dist. (Secondary No. 8211)</p>
                  <p style={{ color: '#555', margin: '0 0 5px 0' }}>{t('address_val')}</p>
                  <p style={{ color: '#888', margin: '5px 0 0 0', fontSize: '0.9rem' }}>Short Address: RMFA4045</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: 'white', borderRadius: '24px', padding: 'clamp(20px, 4vw, 50px)', boxShadow: 'var(--shadow-sm)' }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t('form_name')} *</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('form_name')} 
                    style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} 
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t('form_email')} *</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('form_email')} 
                    style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} 
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t('form_message')} *</label>
                  <textarea 
                    id="contact-message"
                    rows="5" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('form_message')} 
                    style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>

                {submitSuccess && (
                  <div role="status" style={{ padding: '12px', background: '#e6f4ea', color: '#137333', borderRadius: '8px', fontSize: '0.95rem' }}>
                    {t('form_success')}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary" 
                  style={{ alignSelf: 'flex-start', padding: '14px 40px', fontSize: '1.05rem', minHeight: '44px' }}
                >
                  {isSubmitting ? t('form_sending') : t('form_submit')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
