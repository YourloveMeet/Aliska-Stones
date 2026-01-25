import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

import heroImage from '../../assets/images/HeroPageAsset1.png';
import heroImageMobile from '../../assets/images/HeroPageAsset1Mobile.png';

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const categories = [
        { title: 'New In', desc: 'Fresh trends and exclusive designs you\'ll fall in love with', link: '#' },
        { title: 'Earrings', desc: 'Elegant accents to add sparkle to any look', link: '#' },
        { title: 'Rings', desc: 'Unique pieces for special moments and everyday wear', link: '#' },
        { title: 'Necklaces', desc: 'Delicate chains and statement pendants for a refined style', link: '#' },
        { title: 'Bracelets', desc: 'Light and stylish details to complete your outfit', link: '#' },
        { title: 'Collections', desc: 'Curated designs inspired by nature and modern aesthetics', link: '#' },
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

                <motion.div
                    className="hero-categories"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {categories.map((cat, index) => (
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
