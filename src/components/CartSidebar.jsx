import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity } = useCart();
  const { t, translateProduct, language } = useLanguage();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'black',
              zIndex: 1000
            }}
          />
          <motion.div 
            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: language === 'ar' ? 0 : 'auto',
              right: language === 'ar' ? 'auto' : 0,
              width: '100%', maxWidth: '400px', height: '100%',
              background: 'white',
              zIndex: 1001,
              boxShadow: language === 'ar' ? '5px 0 30px rgba(0,0,0,0.1)' : '-5px 0 30px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
              <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShoppingBag /> {t('cart_title')}
              </h2>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '50px', color: '#777' }}>
                  <ShoppingBag size={50} style={{ margin: '0 auto 20px', opacity: 0.2 }} />
                  <p>{t('cart_empty')}</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {cartItems.map(item => {
                    const p = translateProduct(item);
                    return (
                      <div key={p.id} style={{ display: 'flex', gap: '15px', padding: '15px', background: '#fafafa', borderRadius: '12px' }}>
                        <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '8px', padding: '5px' }}>
                          <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '1rem', marginBottom: '5px' }}>{p.name}</h4>
                          <p style={{ fontSize: '0.8rem', color: '#777', marginBottom: '10px' }}>{p.weight}</p>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', background: 'white', borderRadius: '20px', border: '1px solid #ddd' }}>
                              <button onClick={() => updateQuantity(p.id, p.quantity - 1)} style={{ background: 'none', border: 'none', padding: '5px 10px', cursor: 'pointer' }}><Minus size={14} /></button>
                              <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{p.quantity}</span>
                              <button onClick={() => updateQuantity(p.id, p.quantity + 1)} style={{ background: 'none', border: 'none', padding: '5px 10px', cursor: 'pointer' }}><Plus size={14} /></button>
                            </div>
                            
                            <button onClick={() => removeFromCart(p.id)} style={{ background: 'none', border: 'none', color: 'red', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}>
                              {t('remove')}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
                <button className="btn" style={{ width: '100%', padding: '15px' }}>{t('checkout_btn')}</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
