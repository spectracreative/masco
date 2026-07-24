import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Features = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scene 0: Intro Title (0 to 0.15)
  const introY1 = useTransform(scrollYProgress, [0, 0.03, 0.09], [0, 0, -100], { clamp: true });
  const introOpacity1 = useTransform(scrollYProgress, [0, 0.03, 0.09], [1, 1, 0], { clamp: true });

  const introY2 = useTransform(scrollYProgress, [0, 0.06, 0.12], [0, 0, -100], { clamp: true });
  const introOpacity2 = useTransform(scrollYProgress, [0, 0.06, 0.12], [1, 1, 0], { clamp: true });

  const introY3 = useTransform(scrollYProgress, [0, 0.09, 0.15], [0, 0, -100], { clamp: true });
  const introOpacity3 = useTransform(scrollYProgress, [0, 0.09, 0.15], [1, 1, 0], { clamp: true });

  const introDisplay = useTransform(scrollYProgress, [0, 0.15, 0.16], ["flex", "flex", "none"]);

  // Scene 1: Premium Selection (0.15 to 0.4)
  const scene1Opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0], { clamp: true });
  const scene1Scale = useTransform(scrollYProgress, [0.15, 0.4], [0.95, 1.05], { clamp: true });
  const scene1Display = useTransform(scrollYProgress, [0.14, 0.15, 0.4, 0.41], ["none", "flex", "flex", "none"]);
  const scene1ImgX = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [150, 0, 0, 150], { clamp: true });
  const scene1TxtX = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [-150, 0, 0, -150], { clamp: true });

  // Scene 2: 100% Natural (0.35 to 0.6)
  const scene2Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0], { clamp: true });
  const scene2Scale = useTransform(scrollYProgress, [0.35, 0.6], [0.95, 1.05], { clamp: true });
  const scene2Display = useTransform(scrollYProgress, [0.34, 0.35, 0.6, 0.61], ["none", "flex", "flex", "none"]);
  const scene2ImgX = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [-150, 0, 0, -150], { clamp: true });
  const scene2TxtX = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [150, 0, 0, 150], { clamp: true });

  // Scene 3: Freshly Roasted (0.55 to 0.8)
  const scene3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0], { clamp: true });
  const scene3Scale = useTransform(scrollYProgress, [0.55, 0.8], [0.95, 1.05], { clamp: true });
  const scene3Display = useTransform(scrollYProgress, [0.54, 0.55, 0.8, 0.81], ["none", "flex", "flex", "none"]);
  const scene3ImgX = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [150, 0, 0, 150], { clamp: true });
  const scene3TxtX = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [-150, 0, 0, -150], { clamp: true });

  // Scene 4: Quality Assured (0.75 to 1)
  const scene4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 1], { clamp: true });
  const scene4Scale = useTransform(scrollYProgress, [0.75, 1], [0.95, 1.05], { clamp: true });
  const scene4Display = useTransform(scrollYProgress, [0.74, 0.75, 1], ["none", "flex", "flex"]);
  const scene4ImgX = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [-150, 0, 0, 0], { clamp: true });
  const scene4TxtX = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [150, 0, 0, 0], { clamp: true });

  // Background Nuts Animation
  const nutY1 = useTransform(scrollYProgress, [0, 1], [50, -300]);
  const nutR1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const nutY2 = useTransform(scrollYProgress, [0, 1], [-20, -250]);
  const nutR2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const nutY3 = useTransform(scrollYProgress, [0, 1], [80, -400]);
  const nutR3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const nutY4 = useTransform(scrollYProgress, [0, 1], [10, -350]);
  const nutR4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const nutY5 = useTransform(scrollYProgress, [0, 1], [150, -500]);
  const nutR5 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const nutY6 = useTransform(scrollYProgress, [0, 1], [120, -450]);
  const nutR6 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  
  const nutOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0], { clamp: true });
  const nutDisplay = useTransform(scrollYProgress, [0, 0.14, 0.15], ["block", "block", "none"]);

  return (
    <section ref={containerRef} className="cinematic-container" style={{ height: '500vh' }}>
      <div className="cinematic-sticky">
        
        {/* Decorative Background Nuts */}
        <motion.div className="decorative-nut" style={{ position: 'absolute', top: '10%', left: '8%', zIndex: 1, y: nutY1, rotate: nutR1, opacity: nutOpacity, display: nutDisplay, pointerEvents: 'none' }}>
          <img src="/images/nut/hazelnut.png" alt="" style={{ width: '80px', opacity: 0.8, mixBlendMode: 'multiply' }} />
        </motion.div>
        <motion.div className="decorative-nut" style={{ position: 'absolute', top: '15%', right: '10%', zIndex: 1, y: nutY2, rotate: nutR2, opacity: nutOpacity, display: nutDisplay, pointerEvents: 'none' }}>
          <img src="/images/nut/cashew.png" alt="" style={{ width: '90px', opacity: 0.8, mixBlendMode: 'multiply' }} />
        </motion.div>
        <motion.div className="decorative-nut" style={{ position: 'absolute', top: '40%', left: '15%', zIndex: 1, y: nutY3, rotate: nutR3, opacity: nutOpacity, display: nutDisplay, pointerEvents: 'none' }}>
          <img src="/images/nut/almond.png" alt="" style={{ width: '100px', opacity: 0.8, mixBlendMode: 'multiply' }} />
        </motion.div>
        <motion.div className="decorative-nut" style={{ position: 'absolute', top: '35%', right: '12%', zIndex: 1, y: nutY4, rotate: nutR4, opacity: nutOpacity, display: nutDisplay, pointerEvents: 'none' }}>
          <img src="/images/nut/pistachio.png" alt="" style={{ width: '85px', opacity: 0.8, mixBlendMode: 'multiply' }} />
        </motion.div>
        <motion.div className="decorative-nut" style={{ position: 'absolute', top: '70%', left: '10%', zIndex: 1, y: nutY5, rotate: nutR5, opacity: nutOpacity, display: nutDisplay, pointerEvents: 'none' }}>
          <img src="/images/nut/cashew.png" alt="" style={{ width: '95px', opacity: 0.7, mixBlendMode: 'multiply', transform: 'scaleX(-1)' }} />
        </motion.div>
        <motion.div className="decorative-nut" style={{ position: 'absolute', top: '65%', right: '8%', zIndex: 1, y: nutY6, rotate: nutR6, opacity: nutOpacity, display: nutDisplay, pointerEvents: 'none' }}>
          <img src="/images/nut/almond.png" alt="" style={{ width: '90px', opacity: 0.7, mixBlendMode: 'multiply', transform: 'scaleY(-1)' }} />
        </motion.div>

        {/* Scene 0: Title Intro */}
        <motion.div 
          className="cinematic-scene intro"
          style={{ display: introDisplay }}
        >
          <div className="cinematic-scene-inner" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '15vh' }}>
            <div className="cinematic-content" style={{ zIndex: 10, textAlign: 'center', alignItems: 'center', maxWidth: '900px' }}>
              
              <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}>
                <motion.span className="subtitle" style={{ opacity: introOpacity1, y: introY1, letterSpacing: '0.2em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  The <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" style={{ height: '1.8em', transform: 'translateY(-2px)' }} /> Promise
                </motion.span>
              </motion.div>

              <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}>
                <motion.h2 style={{ opacity: introOpacity2, y: introY2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#2A1A12', marginBottom: '25px', fontFamily: 'var(--font-main)', lineHeight: 1.2 }}>
                  Why Choose <img src="/images/logo2.png" alt="Ezwah" className="ezwah-inline-logo red" style={{ height: '1.6em', transform: 'none', margin: 0 }} />
                </motion.h2>
              </motion.div>

              <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                <motion.p style={{ opacity: introOpacity3, y: introY3, maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#6B5B50', lineHeight: 1.8 }}>We believe in delivering nothing but excellence. Every product that bears the Ezwah name represents our commitment to quality, freshness, and authentic taste.</motion.p>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Scene 1 */}
        <motion.div className="cinematic-scene" style={{ opacity: scene1Opacity, display: scene1Display, pointerEvents: 'none' }}>
          <div className="cinematic-scene-inner">
            <motion.div className="cinematic-image-wrapper" style={{ scale: scene1Scale, x: scene1ImgX }}>
              <img src="/images/feature_premium.png" alt="Premium Selection" />
            </motion.div>
            <motion.div className="cinematic-content" style={{ x: scene1TxtX }}>
              <span className="cinematic-label">PREMIUM SELECTION</span>
              <h2 className="cinematic-heading" style={{ fontFamily: 'var(--font-main)' }}>Handpicked from<br/>the world's finest farms.</h2>
              <p className="cinematic-desc">Every nut is carefully selected for exceptional quality, freshness, and taste.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scene 2 */}
        <motion.div className="cinematic-scene reverse" style={{ opacity: scene2Opacity, display: scene2Display, pointerEvents: 'none' }}>
          <div className="cinematic-scene-inner">
            <motion.div className="cinematic-image-wrapper" style={{ scale: scene2Scale, x: scene2ImgX }}>
              <img src="/images/feature_natural.png" alt="100% Natural" />
            </motion.div>
            <motion.div className="cinematic-content" style={{ x: scene2TxtX }}>
              <span className="cinematic-label">100% NATURAL</span>
              <h2 className="cinematic-heading" style={{ fontFamily: 'var(--font-main)' }}>Nothing Added.<br/>Nothing Artificial.</h2>
              <p className="cinematic-desc">Pure, authentic goodness crafted to deliver an unmatched natural taste experience.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scene 3 */}
        <motion.div className="cinematic-scene" style={{ opacity: scene3Opacity, display: scene3Display, pointerEvents: 'none' }}>
          <div className="cinematic-scene-inner">
            <motion.div className="cinematic-image-wrapper" style={{ scale: scene3Scale, x: scene3ImgX }}>
              <img src="/images/feature_roasted.png" alt="Freshly Roasted" />
            </motion.div>
            <motion.div className="cinematic-content" style={{ x: scene3TxtX }}>
              <span className="cinematic-label">FRESHLY ROASTED</span>
              <h2 className="cinematic-heading" style={{ fontFamily: 'var(--font-main)' }}>Crafted for<br/>Maximum Flavor.</h2>
              <p className="cinematic-desc">Roasted in small batches only after your order to preserve freshness and crunch.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scene 4 */}
        <motion.div className="cinematic-scene reverse" style={{ opacity: scene4Opacity, display: scene4Display, pointerEvents: 'none' }}>
          <div className="cinematic-scene-inner">
            <motion.div className="cinematic-image-wrapper" style={{ scale: scene4Scale, x: scene4ImgX }}>
              <img src="/images/feature_quality.png" alt="Quality Assured" />
            </motion.div>
            <motion.div className="cinematic-content" style={{ x: scene4TxtX }}>
              <span className="cinematic-label">QUALITY ASSURED</span>
              <h2 className="cinematic-heading" style={{ fontFamily: 'var(--font-main)' }}>Excellence in<br/>Every Pack.</h2>
              <p className="cinematic-desc">Every batch passes rigorous quality inspections before reaching your table.</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
