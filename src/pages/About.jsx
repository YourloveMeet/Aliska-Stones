import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Recycle, Award } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import classicImage from '../assets/images/Products/Classic Collection.png';
import './About.css';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const values = [
        { icon: <Sparkles size={32} />, title: 'Artisan Craftsmanship', desc: 'Each piece is meticulously handcrafted by skilled artisans in our London atelier.' },
        { icon: <Recycle size={32} />, title: 'Sustainable Materials', desc: 'We use recycled gold and ethically sourced gemstones in all our creations.' },
        { icon: <Heart size={32} />, title: 'Timeless Design', desc: 'Our designs transcend trends, becoming cherished pieces for generations.' },
        { icon: <Award size={32} />, title: 'Exceptional Quality', desc: 'We stand behind every piece with our lifetime quality guarantee.' }
    ];

    return (
        <MainLayout>
            <div className="about-page">
                {/* Hero */}
                <motion.section
                    className="about-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="about-hero-content">
                        <motion.span
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Our Story
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Where Artistry Meets Elegance
                        </motion.h1>
                    </div>
                </motion.section>

                {/* Story Section */}
                <section className="about-story">
                    <div className="story-content">
                        <motion.div
                            className="story-text"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2>The Birth of Aliska Stones</h2>
                            <p>
                                Founded in 2020, Aliska Stones emerged from a passion for creating jewelry that
                                celebrates the beauty of imperfection. Our founder, inspired by the organic
                                shapes found in nature, set out to craft pieces that would become extensions
                                of the wearer's unique story.
                            </p>
                            <p>
                                Every piece in our collection is handcrafted in our London atelier using
                                recycled precious metals and ethically sourced gemstones. We believe that
                                luxury should be conscious, and beauty should be sustainable.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-image glass-panel"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={classicImage} alt="Aliska Stones Craftsmanship" />
                        </motion.div>
                    </div>
                </section>

                {/* Values */}
                <section className="about-values">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Values
                    </motion.h2>
                    <div className="values-grid">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                className="value-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Quote */}
                <section className="about-quote">
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>"True luxury lies in the stories we wear and the memories we create."</p>
                        <cite>— The Aliska Stones Philosophy</cite>
                    </motion.blockquote>
                </section>

                {/* Team/Atelier */}
                <section className="about-atelier">
                    <motion.div
                        className="atelier-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Visit Our Atelier</h2>
                        <p>
                            Experience the magic of jewelry-making firsthand. Our London atelier
                            welcomes visitors by appointment, where you can witness our artisans
                            at work and discover the story behind each piece.
                        </p>
                        <div className="atelier-info">
                            <div>
                                <strong>Address</strong>
                                <p>123 Bond Street<br />London, W1S 4EX</p>
                            </div>
                            <div>
                                <strong>Hours</strong>
                                <p>Mon - Sat: 10am - 6pm<br />Sunday: By Appointment</p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </MainLayout>
    );
};

export default About;
