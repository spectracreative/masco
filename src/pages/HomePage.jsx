import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { categories } from '../data/products';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      
      {/* Categories Grid replacing Products Grid */}
      <section className="section categories-section">
        <div className="container">
          <div className="title-section">
            <span className="subtitle">Explore Our Range</span>
            <h2>Product Categories</h2>
            <p>Discover our wide selection of premium nuts and seeds, carefully sourced and roasted to perfection.</p>
          </div>
          
          <div className="grid-3">
            {categories.map((cat, index) => {
              let name = cat.toLowerCase();
              if (cat === "Sunflower Seed") name = "sunflower-seed/sunflower";
              else if (cat === "Pumpkin Seed") name = "pumpkin-seed/pumpkin";
              else name = `${name}/${name}`;
              const bgImg = `/images/products/${name}.png`;

              return (
                <Link to={`/products/${encodeURIComponent(cat)}`} key={cat} style={{ textDecoration: 'none' }}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="category-card"
                    style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: '#fff' }}
                  >
                    <div className="category-card-content">
                      <h3 style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{cat}</h3>
                      <span className="view-link">View Products &rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
