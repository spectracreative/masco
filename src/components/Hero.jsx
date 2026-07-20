import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: '/images/prod_coffee.png',
      title: 'TURKISH COFFEE',
      desc: 'Roasted ground coffee beans'
    },
    {
      image: '/images/prod_nuts.png',
      title: 'PREMIUM NUTS',
      desc: 'Freshly roasted nuts with a touch of salt flavor'
    },
    {
      image: '/images/hero.png',
      title: 'EZWAH QUALITY',
      desc: 'Taste the essence of perfection'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider-section">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="hero-slide-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="hero-slide-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-slider-content">
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
              className="hero-slider-btn"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }
              }}
            >
              View Products
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="slider-nav-btn slider-prev" onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-nav-btn slider-next" onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight size={24} />
      </button>

      <div className="custom-shape-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,0 L650,0 Q600,0 600,120 Q600,0 550,0 L0,0 Z" className="shape-fill" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
