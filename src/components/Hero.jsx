import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

const Hero = () => {
  const navigate = useNavigate();

  const slides = categories.map((cat) => {
    let name = cat.toLowerCase();
    if (cat === "Sunflower Seed") name = "sunflower-seed/sunflower";
    else if (cat === "Pumpkin Seed") name = "pumpkin-seed/pumpkin";
    else name = `${name}/${name}`;

    return {
      category: cat,
      image: `/images/categories/${name}.png`,
      title: `PREMIUM ${cat.toUpperCase()}`,
      desc: `Taste the absolute best quality ${cat.toLowerCase()} hand-selected for you.`
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="hero-slide-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ 
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0
          }}
        >
          <div className="hero-slide-overlay" style={{ background: 'rgba(0,0,0,0.6)', width: '100%', height: '100%' }}></div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-slider-content" style={{ zIndex: 10, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="hero-text-container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
              exit: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h1 
              className="hero-slider-title"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }
              }}
            >
              {slides[currentIndex].title}
            </motion.h1>
            <motion.p 
              className="hero-slider-desc"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }
              }}
            >
              {slides[currentIndex].desc}
            </motion.p>
            <motion.button 
              className="hero-slider-btn btn"
              onClick={() => navigate(`/products/${encodeURIComponent(slides[currentIndex].category)}`)}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }
              }}
            >
              View {slides[currentIndex].category}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Unique Shape Divider */}
      <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 99 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '7vw', minHeight: '40px' }}>
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,213.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
