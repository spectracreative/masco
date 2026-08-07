import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { t, translateCategory, translateProduct } = useLanguage();

  const rawProduct = allProducts.find(p => p.id === parseInt(id));
  const product = translateProduct(rawProduct);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>{t('no_products')}</h2>
        <Link to="/" className="btn">{t('breadcrumb_home')}</Link>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.category === rawProduct.category && p.id !== rawProduct.id)
    .slice(0, 3); // show up to 3 related

  return (
    <main className="page-wrapper" id="main-content" style={{ padding: '140px 0 60px 0', background: 'white' }}>
      <div className="container">
        <nav aria-label="breadcrumb" style={{ marginBottom: '30px', fontSize: '0.9rem' }}>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', color: '#777' }}>
            <li><Link to="/" style={{ color: '#777', textDecoration: 'none' }}>{t('breadcrumb_home')}</Link></li>
            <li>/</li>
            <li><Link to="/products" style={{ color: '#777', textDecoration: 'none' }}>{t('breadcrumb_products')}</Link></li>
            <li>/</li>
            <li><Link to={`/products/${encodeURIComponent(rawProduct.category)}`} style={{ color: '#777', textDecoration: 'none' }}>{product.category}</Link></li>
            <li>/</li>
            <li style={{ color: 'var(--primary-dark)', fontWeight: '500' }}>{product.name}</li>
          </ol>
        </nav>
        
        <div className="product-details-layout">
          <div className="product-details-image" style={{ background: '#fafafa', borderRadius: '24px', padding: '40px', display: 'flex', justifyContent: 'center' }}>
            <img src={product.img} alt={product.name} className="product-img-no-frame" style={{ maxWidth: '100%', height: 'auto', transform: 'scale(1.2)' }} />
          </div>
          
          <div className="product-details-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="product-title-medium" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '10px' }}>{product.name}</h1>
            <div className="product-weight-thin" style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>{t('weight_label')} {product.weight}</div>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', color: '#444' }}>
              {product.description}
            </p>

            <button 
              className="btn btn-primary" 
              onClick={() => addToCart(rawProduct)}
              style={{ alignSelf: 'flex-start', padding: '14px 36px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <ShoppingBag size={20} />
              <span>{t('add_to_cart')}</span>
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products" style={{ marginTop: '60px' }}>
            <h2 style={{ marginBottom: '30px' }}>{t('related_products')}</h2>
            <div className="grid-3">
              {relatedProducts.map(rawProd => {
                const prod = translateProduct(rawProd);
                return (
                  <motion.div key={prod.id} whileHover={{ y: -5 }} className="product-card">
                    <Link to={`/product/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="product-img-box">
                        <img src={prod.img} alt={prod.name} className="product-img-no-frame" />
                      </div>
                      <div className="product-info">
                        <h3 className="product-title-medium">{prod.name}</h3>
                        <div className="product-weight-thin">{prod.weight}</div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetailsPage;
