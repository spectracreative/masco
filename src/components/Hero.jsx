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
      image: `/images/products/${name}.png`,
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
    <section className="hero-slider-section" style={{ background: '#fafafa', position: 'relative', overflow: 'hidden' }}>
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
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            opacity: 0.2 // Make the background subtle so it doesn't clash with text
          }}
        >
          <div className="hero-slide-overlay" style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)' }}></div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-slider-content" style={{ zIndex: 10 }}>
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
              style={{ color: 'var(--primary-dark)' }}
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
              style={{ color: '#555' }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }
              }}
            >
              {slides[currentIndex].desc}
            </motion.p>
            <motion.button 
              className="hero-slider-btn"
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
    </section>
  );
};

export default Hero;
