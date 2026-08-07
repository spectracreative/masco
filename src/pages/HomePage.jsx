import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const categoriesData = [
  { id: "Almond", classKey: "bento-card-almond", imgPath: "/images/categories/almond/almond.png" },
  { id: "Cashew", classKey: "bento-card-cashew", imgPath: "/images/categories/cashew/cashew.png" },
  { id: "Pistachio", classKey: "bento-card-pistachio", imgPath: "/images/categories/pistachio/pistachio.png" },
  { id: "Mixed", classKey: "bento-card-mixed", imgPath: "/images/categories/mixed/mixed.png" },
  { id: "Peanut", classKey: "bento-card-peanut", imgPath: "/images/categories/peanut/peanut.png" },
  { id: "Sunflower Seed", classKey: "bento-card-sunflower", imgPath: "/images/categories/sunflower-seed/sunflower.png" },
  { id: "Pumpkin Seed", classKey: "bento-card-pumpkin", imgPath: "/images/categories/pumpkin-seed/pumpkin.png" }
];

const poppingNutsList = [
  { id: 'almond1', name: 'Almond', img: '/images/nut/almond.png', style: { top: '5%', left: '7%', width: '72px', height: '72px' }, initRot: -20, floatY: [-6, 6, -6] },
  { id: 'cashew1', name: 'Cashew', img: '/images/nut/cashew.png', style: { top: '8%', right: '8%', width: '78px', height: '78px' }, initRot: 24, floatY: [6, -6, 6] },
  { id: 'hazelnut1', name: 'Hazelnut', img: '/images/nut/hazelnut.png', style: { bottom: '8%', left: '9%', width: '70px', height: '70px' }, initRot: -28, floatY: [-7, 7, -7] },
  { id: 'pistachio1', name: 'Pistachio', img: '/images/nut/pistachio.png', style: { bottom: '6%', right: '9%', width: '74px', height: '74px' }, initRot: 22, floatY: [5, -5, 5] },
  { id: 'almond2', name: 'Almond', img: '/images/nut/almond.png', style: { top: '42%', left: '3%', width: '62px', height: '62px' }, initRot: 14, floatY: [5, -5, 5] },
  { id: 'cashew2', name: 'Cashew', img: '/images/nut/cashew.png', style: { top: '40%', right: '3%', width: '66px', height: '66px' }, initRot: -16, floatY: [-6, 6, -6] },
];

const CtaCardWithPoppingNuts = ({ t }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      to="/products" 
      className="category-card-wrapper bento-card-cta"
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="category-cta-card"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Subtle Decorative Circles Overlay */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.12)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-60px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.15)'
          }} />
        </div>

        {/* Popping Nuts Floating Particles from /images/nut */}
        {poppingNutsList.map((nut, idx) => (
          <motion.div
            key={nut.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? {
              scale: 1,
              opacity: 1,
              y: nut.floatY,
              rotate: [nut.initRot, nut.initRot + 15, nut.initRot]
            } : {
              scale: 0,
              opacity: 0
            }}
            transition={isHovered ? {
              scale: { duration: 0.4, delay: idx * 0.05, ease: "backOut" },
              opacity: { duration: 0.25, delay: idx * 0.05 },
              y: { repeat: Infinity, duration: 2.2 + idx * 0.3, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 3.2 + idx * 0.4, ease: "easeInOut" }
            } : {
              duration: 0.2
            }}
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              zIndex: 4,
              filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.45))',
              ...nut.style
            }}
          >
            <img 
              src={nut.img} 
              alt={nut.name} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </motion.div>
        ))}

        <div style={{ position: 'relative', zIndex: 5, pointerEvents: 'none' }}>
          <h3 className="cta-title">{t('discover_true_quality')}</h3>
          <span className="cta-link">
            {t('view_all_products_cta')}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

const HomePage = () => {
  const { t, translateCategory, language } = useLanguage();

  return (
    <main>
      <Hero />
      <Features />
      
      {/* Product Categories Section */}
      <section className="categories-section" style={{ background: '#ccb58f', padding: 'clamp(80px, 12vw, 120px) 0 clamp(60px, 8vw, 100px) 0', position: 'relative' }}>
        
        {/* Asymmetrical Curve Divider from White to #ccb58f */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '8vw' }}>
            <path fill="#ffffff" d="M0,64 C480,256 960,0 1440,128 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 clamp(16px, 3.5vw, 48px)' }}>
          <div className="title-section" style={{ marginBottom: 'clamp(30px, 4vw, 50px)' }}>
            <span className="subtitle" style={{ color: '#4a3e2e', fontWeight: 800 }}>{t('categories_range')}</span>
            <h2 style={{ color: '#1a0808' }}>{t('categories_title')}</h2>
            <p style={{ color: '#3d3122' }}>{t('categories_subtitle')}</p>
          </div>

          {/* Bento Masonry Grid matching requested design */}
          <div className="bento-category-grid">
            {categoriesData.map((item, index) => (
              <Link 
                to={`/products/${encodeURIComponent(item.id)}`} 
                key={item.id} 
                className={`category-card-wrapper ${item.classKey}`}
                style={{ textDecoration: 'none' }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="category-card"
                >
                  <div 
                    className="category-card-bg" 
                    style={{ backgroundImage: `url(${item.imgPath})` }}
                  ></div>
                  <div className="category-card-overlay"></div>
                  <div className="category-card-content">
                    <h3 className="category-card-title">
                      {translateCategory(item.id).toUpperCase()}
                    </h3>
                    <span className="category-card-btn">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ transform: language === 'ar' ? 'rotate(90deg)' : 'none' }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Discover True Quality CTA Card with Popping Nuts Animation */}
            <CtaCardWithPoppingNuts t={t} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
