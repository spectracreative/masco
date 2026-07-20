import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className="page-wrapper">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>About Ezwah</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>A legacy of quality and passion.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>Our Story</h2>
            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
              Founded with a passion for quality and authenticity, Ezwah has grown from a humble beginning into a premier provider of the finest nuts, seeds, and roasted delicacies. We traverse the globe to source raw ingredients from the most pristine environments.
            </p>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              Our unique roasting process honors traditional methods while employing modern quality control, ensuring that every bite delivers an unforgettable crunch and rich flavor. Ezwah is more than a brand; it's a commitment to excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
          >
            <img src="/images/media__1784523592741.jpg" alt="About Ezwah" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
