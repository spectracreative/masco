import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Coffee, Award } from 'lucide-react';

const Features = () => {
  const features = [
    { id: 1, image: "/images/feature_premium.png", title: "Premium Selection", desc: "We hand-select only the highest grade nuts and beans from trusted farms worldwide." },
    { id: 2, image: "/images/feature_natural.png", title: "100% Natural", desc: "No artificial flavors or preservatives. Just pure, natural goodness in every bite." },
    { id: 3, image: "/images/feature_roasted.png", title: "Freshly Roasted", desc: "Our coffee beans are roasted to order, ensuring maximum flavor and aroma." },
    { id: 4, image: "/images/feature_quality.png", title: "Quality Assured", desc: "Rigorous quality control processes guarantee perfection in every package we deliver." },
  ];

  return (
    <section className="section features-section">
      <div className="container">
        <div className="title-section">
          <span className="subtitle">The Ezwah Promise</span>
          <h2>Why Choose Ezwah</h2>
          <p>We believe in delivering nothing but excellence. Every product that bears the Ezwah name represents our commitment to quality, freshness, and authentic taste.</p>
        </div>
        
        <div className="grid-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
