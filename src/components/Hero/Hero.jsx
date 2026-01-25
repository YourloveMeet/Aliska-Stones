import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, User, Diamond, Gem, Layers } from 'lucide-react'; // Added icons
import './Hero.css';

import heroImage from '../../assets/images/HeroPageAsset1.png';
import heroImageMobile from '../../assets/images/HeroPageAsset1Mobile.png';

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Mobile specific categories for the pill row
    const mobilePills = [
        { title: 'New In', icon: <RefreshCw size={14} /> },
        { title: 'Earrings', icon: <User size={14} /> },
        { title: 'Rings', icon: <Diamond size={14} /> },
    ];

    // Mobile featured cards
    const mobileCards = [
        {
            title: 'Necklaces',
            icon: <div className="card-icon-circle"><div className="icon-necklace" /></div>,
            desc: 'Delicate chains and statement pendants for a refined style'
        },
        {
            title: 'Collections',
            icon: <Gem size={18} />,
            desc: 'Curated designs inspired by nature and modern aesthetics'
        }
    ];

    return (
        <section className="hero">
            <div className="hero-background">
                <picture>
                    <source media="(max-width: 768px)" srcSet={heroImageMobile} />
                    <source media="(min-width: 769px)" srcSet={heroImage} />
                    <img src={heroImage} alt="Aliska Stones Jewelry Collection" className="hero-image" />
                </picture>
            </div>

            <div className="hero-content">
                <motion.h1
                    className="hero-brand-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Aliska Stones
                </motion.h1>

                {/* Mobile Design Structure */}
                <div className="mobile-hero-layout">
                    {/* 1. Pills Row */}
                    <div className="hero-pills-row">
                        {mobilePills.map((item, index) => (
                            <button key={index} className="hero-pill">
                                {item.icon}
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* 2. Featured Cards Grid */}
                    <div className="hero-cards-grid">
                        {mobileCards.map((card, index) => (
                            <div key={index} className="hero-featured-card">
                                <div className="card-header">
                                    {index === 0 ? (
                                        // Custom necklace icon roughly simulated since Lucide doesn't have a perfect one
                                        <Layers size={20} />
                                    ) : (
                                        card.icon
                                    )}
                                    <h3>{card.title}</h3>
                                </div>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 3. Shop Now Button */}
                    <button className="hero-shop-btn">
                        Shop Now
                    </button>
                </div>

                {/* Desktop Categories (Hidden on mobile) */}
                <motion.div
                    className="hero-categories desktop-only-flex"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {[
                        { title: 'New In', desc: 'Fresh trends and exclusive designs', link: '#' },
                        { title: 'Earrings', desc: 'Elegant accents to add sparkle', link: '#' },
                        { title: 'Rings', desc: 'Unique pieces for special moments', link: '#' },
                        { title: 'Necklaces', desc: 'Delicate chains and pendants', link: '#' },
                        { title: 'Bracelets', desc: 'Light and stylish details', link: '#' },
                        { title: 'Collections', desc: 'Curated designs inspired by nature', link: '#' },
                    ].map((cat, index) => (
                        <motion.div key={index} className="hero-category-item" variants={fadeInUp}>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
