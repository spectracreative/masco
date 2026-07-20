import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const { addToCart } = useCart();

  const searchResults = allProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="page-wrapper">
      <div className="page-header" style={{ background: 'var(--primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Search Results</h1>
          <p>Results for "{query}"</p>
        </div>
      </div>

      <section className="section products-section">
        <div className="container">
          {searchResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <h3>No products found matching your search.</h3>
              <Link to="/" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>Return Home</Link>
            </div>
          ) : (
            <motion.div layout className="grid-3">
              <AnimatePresence>
                {searchResults.map((prod) => (
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

export default SearchPage;
