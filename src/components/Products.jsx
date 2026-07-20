import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allProducts = [
    { id: 1, category: "Cashew", name: "Cashew Dry Roast (Zero Oil)", weight: "18.0 gm", img: "/prod_nuts.png", tag: "Best Seller" },
    { id: 2, category: "Almond", name: "Almond Roasted & Lemon, Salted", weight: "18.0 gm", img: "/prod_nuts.png" },
    { id: 3, category: "Almond", name: "Almond Roasted & Lemon, Salted", weight: "80.0 gm", img: "/prod_nuts.png", tag: "Popular" },
    { id: 4, category: "Almond", name: "Almond Roasted & Lemon, Salted", weight: "120.0 gm", img: "/prod_nuts.png" },
    { id: 5, category: "Almond", name: "Almond Plain Roasted", weight: "18.0 gm", img: "/prod_nuts.png" },
    { id: 6, category: "Almond", name: "Almond Plain Roasted", weight: "80.0 gm", img: "/prod_nuts.png" },
    { id: 7, category: "Almond", name: "Almond Plain Roasted", weight: "120.0 gm", img: "/prod_nuts.png" },
    { id: 8, category: "Pistachio", name: "Pistachio Roasted & Salt", weight: "18.0 gm", img: "/prod_nuts.png" },
    { id: 9, category: "Pistachio", name: "Pistachio Roasted & Salt", weight: "55.0 gm", img: "/prod_nuts.png" },
    { id: 10, category: "Pistachio", name: "Pistachio Roasted & Salt", weight: "120.0 gm", img: "/prod_nuts.png" },
    { id: 11, category: "Pistachio", name: "Pistachio Plain Roasted", weight: "18.0 gm", img: "/prod_nuts.png" },
    { id: 12, category: "Pistachio", name: "Pistachio Plain Roasted", weight: "55.0 gm", img: "/prod_nuts.png" },
    { id: 13, category: "Pistachio", name: "Pistachio Plain Roasted", weight: "120.0 gm", img: "/prod_nuts.png" },
    { id: 14, category: "Peanut", name: "Roasted Salted Peanut (Zero Oil)", weight: "12.0 gm", img: "/prod_nuts.png" },
    { id: 15, category: "Sunflower Seed", name: "Roasted Sunflower Seed (Salted)", weight: "20.0 gm", img: "/prod_nuts.png" },
    { id: 16, category: "Sunflower Seed", name: "Roasted Sunflower Seed (Salted)", weight: "65.0 gm", img: "/prod_nuts.png" },
    { id: 17, category: "Sunflower Seed", name: "Roasted Sunflower Seed (Salted)", weight: "120.0 gm", img: "/prod_nuts.png" },
    { id: 18, category: "Pumpkin Seed", name: "Pumpkin Seed Roasted Salted", weight: "18.0 gm", img: "/prod_nuts.png" },
    { id: 19, category: "Pumpkin Seed", name: "Pumpkin Seed Roasted Salted", weight: "65.0 gm", img: "/prod_nuts.png" },
    { id: 20, category: "Pumpkin Seed", name: "Pumpkin Seed Roasted Salted", weight: "120.0 gm", img: "/prod_nuts.png" },
    { id: 21, category: "Mixed", name: "Mixed Nuts", weight: "18.0 gm", img: "/prod_nuts.png" },
    { id: 22, category: "Mixed", name: "Mixed Nuts", weight: "120.0 gm", img: "/prod_nuts.png", tag: "Value Pack" },
  ];

  const categories = ["All", "Cashew", "Almond", "Pistachio", "Peanut", "Sunflower Seed", "Pumpkin Seed", "Mixed"];

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
                  <button className="product-add-overlay" aria-label="Add to cart">
                    <ShoppingBag size={20} />
                  </button>
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
