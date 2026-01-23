import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const categories = [
        { title: 'New In', desc: 'Shop the latest pieces from our collection', link: '#' },
        { title: 'Earrings', desc: 'Lightweight & comfortable for everyday', link: '#' },
        { title: 'Rings', desc: 'Explore our ring sets to stack & style', link: '#' },
        { title: 'Necklaces', desc: 'Layout chains perfectly designed', link: '#' },
        { title: 'Bracelets', desc: 'A perfect finish to your look', link: '#' },
        { title: 'Gifts (New)', desc: 'Curated sets packaged for gifting', link: '#' },
    ];

    return (
        <section className="hero">
            <div className="hero-background">
                {/* Placeholder for Hero Image */}
                <div className="hero-image-placeholder"></div>
            </div>

            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    amoteir
                </motion.h1>

                <motion.div
                    className="hero-categories"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {categories.slice(0, 3).map((cat, index) => (
                        <motion.div key={index} className="hero-category-item" variants={fadeInUp}>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </motion.div>
                    ))}
                    {/* Second row/column logic can be added or adjusted via CSS grid */}
                    {categories.slice(3, 6).map((cat, index) => (
                        <motion.div key={index + 3} className="hero-category-item" variants={fadeInUp}>
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
