import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ShieldCheck, Leaf, Coffee, Award } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scrollY1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scrollY2 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const scrollY3 = useTransform(scrollYProgress, [0, 1], [220, -220]);
  const scrollY4 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scrollY5 = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const scrollY6 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotate5 = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const rotate6 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const features = [
    { id: 1, image: "/images/feature_premium.png", title: "Premium Selection", desc: "We hand-select only the highest grade nuts and beans from trusted farms worldwide." },
    { id: 2, image: "/images/feature_natural.png", title: "100% Natural", desc: "No artificial flavors or preservatives. Just pure, natural goodness in every bite." },
    { id: 3, image: "/images/feature_roasted.png", title: "Freshly Roasted", desc: "Our premium nuts and seeds are roasted to order, ensuring maximum flavor and crunch." },
    { id: 4, image: "/images/feature_quality.png", title: "Quality Assured", desc: "Rigorous quality control processes guarantee perfection in every package we deliver." },
  ];

  return (
    <section className="section features-section" ref={sectionRef} style={{ overflow: 'hidden', position: 'relative' }}>
      
      {/* Decorative Background Elements */}
      <motion.div style={{ position: 'absolute', top: '10%', left: '8%', zIndex: 2, y: scrollY1, rotate: rotate1, pointerEvents: 'none' }}>
        <img 
          src="/images/nut/hazelnut.png" alt="" 
          style={{ width: '80px', opacity: 0.9, mixBlendMode: 'multiply' }}
        />
      </motion.div>

      <motion.div style={{ position: 'absolute', top: '5%', right: '10%', zIndex: 2, y: scrollY2, rotate: rotate2, pointerEvents: 'none' }}>
        <img 
          src="/images/nut/cashew.png" alt="" 
          style={{ width: '90px', opacity: 0.9, mixBlendMode: 'multiply' }}
        />
      </motion.div>

      <motion.div style={{ position: 'absolute', top: '25%', left: '15%', zIndex: 2, y: scrollY3, rotate: rotate3, pointerEvents: 'none' }}>
        <img 
          src="/images/nut/almond.png" alt="" 
          style={{ width: '100px', opacity: 0.9, mixBlendMode: 'multiply' }}
        />
      </motion.div>

      <motion.div style={{ position: 'absolute', top: '30%', right: '12%', zIndex: 2, y: scrollY4, rotate: rotate4, pointerEvents: 'none' }}>
        <img 
          src="/images/nut/pistachio.png" alt="" 
          style={{ width: '85px', opacity: 0.9, mixBlendMode: 'multiply' }}
        />
      </motion.div>

      {/* Duplicates */}
      <motion.div style={{ position: 'absolute', top: '45%', left: '5%', zIndex: 2, y: scrollY5, rotate: rotate5, pointerEvents: 'none' }}>
        <img 
          src="/images/nut/cashew.png" alt="" 
          style={{ width: '95px', opacity: 0.8, mixBlendMode: 'multiply', transform: 'scaleX(-1)' }}
        />
      </motion.div>

      <motion.div style={{ position: 'absolute', top: '40%', right: '7%', zIndex: 2, y: scrollY6, rotate: rotate6, pointerEvents: 'none' }}>
        <img 
          src="/images/nut/almond.png" alt="" 
          style={{ width: '90px', opacity: 0.8, mixBlendMode: 'multiply', transform: 'scaleY(-1)' }}
        />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="title-section">
          <span className="subtitle">The <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" /> Promise</span>
          <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>Why Choose <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" style={{ transform: 'none', margin: 0 }} /></h2>
          <p>We believe in delivering nothing but excellence. Every product that bears the <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" /> name represents our commitment to quality, freshness, and authentic taste.</p>
        </div>
        
        <div className="grid-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 50, damping: 15 }}
              className="feature-card"
            >
              <div className="feature-image-wrapper">
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
