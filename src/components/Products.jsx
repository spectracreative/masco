import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { allProducts, categories as dataCategories } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t, translateCategory, translateProduct, language } = useLanguage();

  const categories = ["All", ...dataCategories];

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="section products-section">
      <div className="container">
        <div className="title-section">
          <span className="subtitle">{t('categories_range')}</span>
          <h2>{t('nav_products')}</h2>
          <p>{t('categories_subtitle')}</p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {translateCategory(cat)}
            </button>
          ))}
        </div>
        
        <motion.div layout className="grid-3">
          <AnimatePresence>
            {filteredProducts.map((prod) => {
              const p = translateProduct(prod);
              return (
                <motion.div 
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="product-card"
                >
                  <div className="product-img-box">
                    <img src={p.img} alt={p.name} />
                  </div>
                  
                  <div className="product-info">
                    <h3>{p.name}</h3>
                    <div className="price">{p.weight}</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="/products" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {t('view_all_products')} <ArrowRight size={20} style={{ transform: language === 'ar' ? 'rotate(180deg)' : 'none' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
