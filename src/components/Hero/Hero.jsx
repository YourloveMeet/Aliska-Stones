import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, User, Diamond, Gem, Layers } from 'lucide-react'; // Added icons
import './Hero.css';
import BlurText from '../Common/BlurText/BlurText';

import heroImage from '../../assets/images/HeroPageAsset1.png';
import heroImageMobile from '../../assets/images/HeroPageAsset1Mobile.png';

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Parallax effect for desktop
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        if (window.innerWidth > 1024) {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 50;
            const moveY = (clientY - window.innerHeight / 2) / 50;
            setMousePos({ x: moveX, y: moveY });
        }
    };

    // Top pills for mobile
    const pillCategories = [
        { title: 'New In', icon: <Sparkles size={14} />, link: '#' },
        { title: 'Earrings', icon: <User size={14} />, link: '#' },
        { title: 'Rings', icon: <Diamond size={14} />, link: '#' },
    ];

    // Large cards for desktop/mobile
    const featureCards = [
        {
            title: 'Necklaces',
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
        <section className="hero" onMouseMove={handleMouseMove}>
            <div className="hero-background">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: mousePos.x,
                        y: mousePos.y
                    }}
                    transition={{ 
                        duration: 1.5, 
                        ease: "easeOut",
                        x: { type: "spring", stiffness: 50, damping: 20 },
                        y: { type: "spring", stiffness: 50, damping: 20 }
                    }}
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
                <div className="hero-brand-container desktop-only">
                    <BlurText
                        text="Aliska Stones"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="hero-brand-title"
                    />
                    <motion.p 
                        className="hero-brand-subtitle"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Handcrafted elegance inspired by nature — sculpted in recycled gold, silver &amp; natural gemstones.
                    </motion.p>

                    <motion.div 
                        className="hero-cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.1 }}
                    >
                        <a href="/shop" className="hero-cta-btn">
                            Shop Collection <ArrowRight size={18} />
                        </a>
                        <a href="/about" className="hero-cta-link">Our Story</a>
                    </motion.div>
                </div>

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

                {/* Desktop Categories — Bottom Right */}
                <motion.div
                    className="hero-categories desktop-only"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, staggerChildren: 0.08 }}
                >
                    {[...pillCategories, ...featureCards].map((cat, index) => (
                        <div key={index} className="hero-category-item">
                            <div className="hero-card-icon">
                                {cat.icon}
                            </div>
                            <div className="hero-card-content">
                                <h3>{cat.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Desktop Trust Badges — Bottom Left */}
                <motion.div 
                    className="hero-trust-badges desktop-only"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <div className="trust-badge">
                        <Sparkles size={14} />
                        <span>Handcrafted</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-badge">
                        <Gem size={14} />
                        <span>Natural Gemstones</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-badge">
                        <Layers size={14} />
                        <span>Recycled Gold</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
