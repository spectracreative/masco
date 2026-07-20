import React from 'react';
import { motion } from 'framer-motion';

const Tagline = () => {
  return (
    <section className="tagline-section">
      <div className="container">
        <motion.h2 
          className="tagline-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Taste <span className="font-light">that</span> speak quality
        </motion.h2>
      </div>
    </section>
  );
};

export default Tagline;
