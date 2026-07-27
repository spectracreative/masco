import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { allProducts, categories as dataCategories } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...dataCategories];

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="section products-section">
      <div className="container">
        <div className="title-section">
          <span className="subtitle">Signature Collection</span>
          <h2>Our Products</h2>
          <p>Explore our most loved products, crafted with passion and dedication to quality. Find your favorite premium nuts and seeds.</p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <motion.div layout className="grid-3">
          <AnimatePresence>
            {filteredProducts.map((prod, index) => (
              <motion.div 
                layout
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="product-card"
              >
                
                <div className="product-img-box">
                  <img src={prod.img} alt={prod.name} />

                </div>
                
                <div className="product-info">
                  <h3>{prod.name}</h3>
                  <div className="price">{prod.weight}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="#" className="btn btn-outline">
            View All Products <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
