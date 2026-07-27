import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

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
  const { t, language } = useLanguage();
  
  const aboutImages = [
    "/images/about/about_ezwah.png",
    "/images/about/about_ezwah_2.png",
    "/images/about/about_ezwah_3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  const inlineLogoSrc = language === 'ar' ? '/images/logo.png' : '/images/logo2.png';

  return (
    <main className="page-wrapper">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
            {t('about_hero_title')} <img src={inlineLogoSrc} alt="Ezwah" className="ezwah-inline-logo white" style={{ filter: language === 'ar' ? 'brightness(0) invert(1)' : 'none' }} />
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>{t('about_hero_sub')}</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ textTransform: 'uppercase', color: '#9E8E36', fontWeight: 'bold', letterSpacing: '0.2em' }}>{t('about_story_subtitle')}</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '20px', marginTop: '10px' }}>{t('about_story_title')}</h2>
            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
              {t('about_story_p1')}
            </p>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              {t('about_story_p2')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
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
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              position: 'relative',
              background: '#2A1A12'
            }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={aboutImages[currentImageIndex]} 
                  alt="About Ezwah" 
                  initial={{ opacity: 0, filter: 'brightness(2)', scale: 1.1 }}
                  animate={{ opacity: 1, filter: 'brightness(1)', scale: 1.08 }}
                  exit={{ opacity: 0, filter: 'brightness(2)' }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center',
                    padding: 0, 
                    display: 'block', 
                    position: 'absolute', 
                    top: 0, 
                    left: 0 
                  }} 
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="title-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2>{t('about_values_title')}</h2>
          </div>
          <div className="grid-3" style={{ gap: '30px' }}>
            <div style={{ background: 'white', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>{t('val1_title')}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{t('val1_desc')}</p>
            </div>
            <div style={{ background: 'white', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>{t('val2_title')}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{t('val2_desc')}</p>
            </div>
            <div style={{ background: 'white', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>{t('val3_title')}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{t('val3_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
