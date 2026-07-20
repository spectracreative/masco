import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Product not found</h2>
        <Link to="/" className="btn">Return Home</Link>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3); // show up to 3 related

  return (
    <main className="page-wrapper" style={{ padding: '140px 0 60px 0', background: 'white' }}>
      <div className="container">
        <nav aria-label="breadcrumb" style={{ marginBottom: '30px', fontSize: '0.9rem' }}>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', color: '#777' }}>
            <li><Link to="/" style={{ color: '#777', textDecoration: 'none' }}>Home</Link></li>
            <li>/</li>
            <li><Link to="/products" style={{ color: '#777', textDecoration: 'none' }}>Products</Link></li>
            <li>/</li>
            <li><Link to={`/products/${encodeURIComponent(product.category)}`} style={{ color: '#777', textDecoration: 'none' }}>{product.category}</Link></li>
            <li>/</li>
            <li style={{ color: 'var(--primary-dark)', fontWeight: '500' }}>{product.name}</li>
          </ol>
        </nav>
        
        <div className="product-details-layout">
          <div className="product-details-image" style={{ background: '#fafafa', borderRadius: '24px', padding: '40px', display: 'flex', justifyContent: 'center' }}>
            <img src={product.img} alt={product.name} className="product-img-no-frame" style={{ maxWidth: '100%', height: 'auto', transform: 'scale(1.2)' }} />
          </div>
          
          <div className="product-details-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="product-title-medium" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
            <div className="product-weight-thin" style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>Weight: {product.weight}</div>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', color: '#444' }}>
              {product.description || "Premium quality product carefully selected and roasted for the perfect taste."}
            </p>
            
            <button className="btn" onClick={() => addToCart(product)} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', alignSelf: 'flex-start' }}>
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2 style={{ marginBottom: '30px' }}>You May Also Like</h2>
            <div className="grid-3">
              {relatedProducts.map(prod => (
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
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetailsPage;
