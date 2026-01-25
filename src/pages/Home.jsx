import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero/Hero';
import ProductCard from '../components/Product/ProductCard';
import ClassicCollection from '../components/Sections/ClassicCollection';
import NaturalGems from '../components/Sections/NaturalGems';
import { PRODUCTS } from '../data/products';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const FILTERS = ['All', 'Earrings', 'Studs', 'Bangles', 'Ear Cuffs', 'Sets'];

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <MainLayout>
            <Hero />

            {/* Featured Products Section */}
            <section className="product-section">
                <div className="section-header">
                    <h2>New Arrivals</h2>
                    <Link to="/shop" className="view-all-link">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="filter-bar">
                    <div className="filters">
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="product-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {PRODUCTS.slice(0, 4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </section>

            <ClassicCollection />

            {/* Second Product Row */}
            <section className="product-section">
                <div className="section-header">
                    <h2>Best Sellers</h2>
                    <Link to="/shop" className="view-all-link">
                        Shop Now <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="product-grid">
                    {PRODUCTS.slice(4, 8).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <NaturalGems />

            {/* All Products */}
            <section className="product-section">
                <div className="section-header centered">
                    <h2>Explore the Collection</h2>
                    <p>Each piece tells a story of artisan craftsmanship</p>
                </div>
                <div className="product-grid">
                    {PRODUCTS.map(product => (
                        <ProductCard key={`all-${product.id}`} product={product} />
                    ))}
                </div>
                <div className="section-cta">
                    <Link to="/shop" className="cta-btn">
                        View Full Collection
                    </Link>
                </div>
            </section>

            {/* SEO Text */}
            <section className="seo-section">
                <div className="seo-content">
                    <h2>Earrings – Handcrafted Elegance in Recycled Gold & Silver</h2>
                    <p>
                        Discover our collection of artisan crafted earrings, designed to celebrate the beauty of imperfection.
                        Each piece is meticulously handcrafted using recycled 24ct gold plated bronze, solid gold, and sterling silver,
                        embodying a modern yet contemporary aesthetic. Inspired by organic shapes and nature, our earrings are unique,
                        featuring sculptural forms that mimic pearls and natural gemstones.
                    </p>
                </div>
            </section>
        </MainLayout>
    );
};

export default Home;
