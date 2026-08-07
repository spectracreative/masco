import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const ProductsPage = () => {
  const { category } = useParams();
  const { t, translateCategory, translateProduct, language } = useLanguage();
  
  // If a category is specified in the URL, filter by it. Otherwise, show all.
  const displayCategory = category ? decodeURIComponent(category) : "All";
  
  const filteredProducts = displayCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === displayCategory);

  const headerTitle = displayCategory === "All" 
    ? t('all_products_title') 
    : (language === 'ar' ? `منتجات ${translateCategory(displayCategory)}` : `${displayCategory} Products`);

  const headerSub = displayCategory === "All"
    ? t('all_products_subtitle')
    : `${t('category_products_subtitle')} ${translateCategory(displayCategory)}`;

  return (
    <main className="page-wrapper" id="main-content">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>{headerTitle}</h1>
          <p>{headerSub}</p>
        </div>
      </div>

      <section className="section products-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <h3>{t('no_products')}</h3>
              <Link to="/products" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>{t('view_all_products')}</Link>
            </div>
          ) : (
            <motion.div layout className="products-grid-always-3">
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
                      <Link to={`/product/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="product-img-box">
                          <img src={p.img} alt={p.name} className="product-img-no-frame" />
                        </div>
                        
                        <div className="product-info">
                          <h3 className="product-title-medium">{p.name}</h3>
                          <div className="product-weight-thin">{p.weight}</div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
