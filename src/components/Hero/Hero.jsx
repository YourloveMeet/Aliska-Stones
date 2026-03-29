import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, User, Diamond, Gem, Layers } from 'lucide-react'; // Added icons
import './Hero.css';

import heroImage from '../../assets/images/HeroPageAsset1.png';
import heroImageMobile from '../../assets/images/HeroPageAsset1Mobile.png';

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Top pills for mobile
    const pillCategories = [
        { title: 'New In', icon: <Sparkles size={14} />, link: '#' },
        { title: 'Earrings', icon: <User size={14} />, link: '#' },
        { title: 'Rings', icon: <Diamond size={14} />, link: '#' },
    ];

    // Large cards for mobile
    const featureCards = [
        {
            title: 'Earings',
            icon: <Gem size={20} />,
            desc: 'Delicate chains and statement pendants for a refined style',
            link: '#'
        },
        {
            title: 'Collections',
            icon: <Diamond size={20} />,
            desc: 'Curated designs inspired by nature and modern aesthetics',
            link: '#'
        }
    ];

    return (
        <section className="hero">
            <div className="hero-background">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="hero-image-wrapper"
                >
                    <picture>
                        <source media="(max-width: 768px)" srcSet={heroImageMobile} />
                        <source media="(min-width: 769px)" srcSet={heroImage} />
                        <img src={heroImage} alt="Aliska Stones Jewelry Collection" className="hero-image" />
                    </picture>
                </motion.div>
                <div className="hero-overlay-gradient"></div>
            </div>

            <div className="hero-content">
                {/* Desktop Title */}
                <motion.h1 
                    className="hero-brand-title desktop-only"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Aliska Stones
                </motion.h1>

                {/* Mobile Title Layout */}
                <motion.div 
                    className="hero-mobile-layout mobile-only"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                        }
                    }}
                >
                    <motion.div className="mobile-title" variants={fadeInUp}>
                        <span>Aliska</span>
                        <span>Stones</span>
                    </motion.div>
 
                    <motion.div className="mobile-pills" variants={fadeInUp}>
                        {pillCategories.map((cat, index) => (
                            <div key={index} className="mobile-pill">
                                {cat.icon}
                                <span>{cat.title}</span>
                            </div>
                        ))}
                    </motion.div>
 
                    <motion.div className="mobile-feature-cards" variants={fadeInUp}>
                        {featureCards.map((card, index) => (
                            <div key={index} className="mobile-feature-card">
                                <div className="card-header">
                                    {card.icon}
                                    <h3>{card.title}</h3>
                                </div>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </motion.div>
 
                    <motion.button 
                        className="mobile-shop-btn" 
                        variants={fadeInUp}
                        onClick={() => {
                            const productSection = document.querySelector('.product-section');
                            if (productSection) {
                                productSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Shop Now
                    </motion.button>
                </motion.div>

                {/* Legacy Desktop Categories */}
                <motion.div
                    className="hero-categories desktop-only"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {/* Only showing a subset for desktop to keep it clean if needed, or use original list */}
                    {[...pillCategories, ...featureCards].map((cat, index) => (
                        <motion.div key={index} className="hero-category-item" variants={fadeInUp}>
                            <div className="hero-card-icon">
                                {cat.icon}
                            </div>
                            <div className="hero-card-content">
                                <h3>{cat.title}</h3>
                                <p>{cat.desc || 'Explore our exclusive collection'}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
