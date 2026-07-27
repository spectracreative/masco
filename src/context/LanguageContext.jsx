import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, categoryTranslations, productTranslations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('ezwah_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('ezwah_lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key) => {
    const langDict = translations[language] || translations['en'];
    return langDict[key] || translations['en'][key] || key;
  };

  const translateCategory = (catName) => {
    if (language === 'ar' && categoryTranslations[catName]) {
      return categoryTranslations[catName];
    }
    return catName;
  };

  const translateProduct = (product) => {
    if (!product) return product;
    if (language === 'ar' && productTranslations[product.id]) {
      const arData = productTranslations[product.id];
      return {
        ...product,
        name: arData.name || product.name,
        category: categoryTranslations[product.category] || product.category,
        description: arData.description || product.description,
        weight: product.weight.replace('gm', 'جرام'),
        tag: product.tag ? t(product.tag.toLowerCase().replace(' ', '_')) : product.tag
      };
    }
    return product;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      isRTL: language === 'ar',
      setLanguage,
      toggleLanguage,
      t,
      translateCategory,
      translateProduct
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
