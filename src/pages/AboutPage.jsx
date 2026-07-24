import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WavyBorder = () => {
  const points = [];
  const numPoints = 200;
  const numWaves = 32;
  const radius = 164; // Distance from center
  const amplitude = 4; // Wave height
  const center = 175; // Center of the 350x350 viewBox

  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const r = radius + amplitude * Math.sin(numWaves * angle);
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg viewBox="0 0 350 350" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <polygon points={points.join(' ')} fill="none" stroke="#E6E0D4" strokeWidth="2.5" />
    </svg>
  );
};

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const aboutImages = [
    "/images/about%20ezwah/about_ezwah.png",
    "/images/about%20ezwah/about_ezwah_2.png",
    "/images/about%20ezwah/about_ezwah_3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  return (
    <main className="page-wrapper">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>About <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo white" /></h1>
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
              Founded with a passion for quality and authenticity, <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" /> has grown from a humble beginning into a premier provider of the finest nuts, seeds, and roasted delicacies. We traverse the globe to source raw ingredients from the most pristine environments.
            </p>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              Our unique roasting process honors traditional methods while employing modern quality control, ensuring that every bite delivers an unforgettable crunch and rich flavor. <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" /> is more than a brand; it's a commitment to excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              width: '100%',
              maxWidth: '350px',
              height: '350px',
              margin: '0 auto',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <WavyBorder />
            
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              position: 'relative'
            }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={aboutImages[currentImageIndex]} 
                  alt="About Ezwah" 
                  initial={{ opacity: 0, filter: 'brightness(3)', scale: 1.05 }}
                  animate={{ opacity: 1, filter: 'brightness(1)', scale: 1 }}
                  exit={{ opacity: 0, filter: 'brightness(3)' }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }} 
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
