import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allProducts, categories } from '../data/products';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  
  // If a category is specified in the URL, filter by it. Otherwise, show all.
  const displayCategory = category ? decodeURIComponent(category) : "All";
  
  const filteredProducts = displayCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === displayCategory);

  return (
    <main className="page-wrapper">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>{displayCategory} Products</h1>
          <p>Discover our premium selection of {displayCategory.toLowerCase()}</p>
        </div>
      </div>

      <section className="section products-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <h3>No products found for this category.</h3>
              <Link to="/products" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>View All Products</Link>
            </div>
          ) : (
            <motion.div layout className="grid-3">
              <AnimatePresence>
                {filteredProducts.map((prod) => (
                  <motion.div 
                    layout
                    key={prod.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="product-card"
                  >
                    
                    <Link to={`/product/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="product-img-box">
                        <img src={prod.img} alt={prod.name} className="product-img-no-frame" />
                        <button className="product-add-overlay" aria-label="Add to cart" onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(prod);
                        }}>
                          <ShoppingBag size={20} />
                        </button>
                      </div>
                      
                      <div className="product-info">
                        <h3 className="product-title-medium">{prod.name}</h3>
                        <div className="product-weight-thin">{prod.weight}</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
