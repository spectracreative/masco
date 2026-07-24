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
      <section className="section categories-section" style={{ background: 'var(--primary)', padding: '120px 0 0 0', position: 'relative' }}>
        
        {/* Asymmetrical Curve Divider from White to Red */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '8vw' }}>
            <path fill="#ffffff" d="M0,64 C480,256 960,0 1440,128 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="container">
          <div className="title-section" style={{ color: 'white', marginBottom: '40px' }}>
            <span className="subtitle" style={{ color: 'var(--bg-color)' }}>Explore Our Range</span>
            <h2 style={{ color: 'white' }}>Product Categories</h2>
            <p style={{ color: '#fdd' }}>Discover our wide selection of premium nuts and seeds, carefully sourced and roasted to perfection.</p>
          </div>
        </div>
          
        {/* Bento Masonry Grid */}
        <div className="bento-category-grid">
          {[
            "Almond",
            "Cashew",
            "Pistachio",
            "Mixed",
            "Peanut",
            "Sunflower Seed",
            "Pumpkin Seed"
          ].map((cat, index) => {
            let name = cat.toLowerCase();
            if (cat === "Sunflower Seed") name = "sunflower-seed/sunflower";
            else if (cat === "Pumpkin Seed") name = "pumpkin-seed/pumpkin";
            else name = `${name}/${name}`;
            const bgImg = `/images/categories/${name}.png`;

            return (
              <Link to={`/products/${encodeURIComponent(cat)}`} key={cat} style={{ textDecoration: 'none' }}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="category-card"
                  style={{ 
                    backgroundColor: '#fff',
                    borderRadius: 0,
                    margin: 0,
                    padding: 0,
                    boxShadow: 'none',
                    height: '350px',
                    width: '100%',
                    border: 'none',
                    position: 'relative'
                  }}
                >
                  <div 
                    className="category-card-bg" 
                    style={{ backgroundImage: `url(${bgImg})` }}
                  ></div>
                  <div className="category-card-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px 30px', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)', width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <h3 style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)', margin: 0, color: 'white' }}>{cat.toUpperCase()}</h3>
                      <span className="view-link-icon" style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '50px', 
                        height: '50px', 
                        border: '2px solid white', 
                        borderRadius: '50%',
                        color: 'white',
                        transition: 'var(--transition)'
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
