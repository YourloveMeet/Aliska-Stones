import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero/Hero';
import ProductCard from '../components/Product/ProductCard';
import ClassicCollection from '../components/Sections/ClassicCollection';
import NaturalGems from '../components/Sections/NaturalGems';
import { motion } from 'framer-motion';

const PRODUCTS = [
    { id: 1, name: 'The Gilded Echo Hoops', category: 'Classic Collection', price: '£225.00', image: null },
    { id: 2, name: 'The Whispering Tide Earrings', category: '24ct Gold Plated', price: '£195.00', image: null },
    { id: 3, name: 'The Fragmented Dawn Earrings', category: '24ct Gold Plated', price: '£195.00', image: null },
    { id: 4, name: 'The Lunar Caress Earrings', category: '24ct Gold Plated', price: '£195.00', image: null },
    { id: 5, name: 'The Lunar Caress Earrings', category: 'Classic Collection', price: '£180.00', image: null },
    { id: 6, name: 'The Ethereal Hoops', category: '14ct Gold Plated', price: '£185.00', image: null },
    { id: 7, name: 'The Golden Solstice Hoops', category: '14ct Gold Plated', price: '£175.00', image: null },
    { id: 8, name: 'The Hera\'s Memory Earrings', category: '14ct Gold Plated', price: '£225.00', image: null },
];

const FILTERS = ['All', 'Earrings', 'Studs', 'Bangles', 'Ear Cuffs', 'Sets'];

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <MainLayout>
            <Hero />

            <section className="product-section" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div className="filter-bar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <div className="filters" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto' }}>
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    background: activeFilter === filter ? '#1a1a1a' : 'transparent',
                                    color: activeFilter === filter ? '#fff' : '#666',
                                    border: activeFilter === filter ? '1px solid #1a1a1a' : '1px solid #eee',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="sort-by">
                        <select style={{ padding: '0.5rem', border: 'none', background: 'transparent', fontFamily: 'inherit' }}>
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '2rem' }}>Match</h3>

                <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {PRODUCTS.slice(0, 4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                    {PRODUCTS.slice(4, 6).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {/* Start of visual break or promo within grid if needed */}
                </div>
            </section>

            <ClassicCollection />

            <section className="product-section" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {PRODUCTS.slice(6, 8).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {PRODUCTS.slice(0, 2).map((product, i) => (
                        <ProductCard key={`${product.id}-dup-${i}`} product={{ ...product, id: `dup-${i}` }} />
                    ))}
                </div>
            </section>

            <NaturalGems />

            <section className="product-section" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {PRODUCTS.map(product => (
                        <ProductCard key={`final-${product.id}`} product={product} />
                    ))}
                </div>
            </section>

            <section className="seo-text" style={{ maxWidth: '1000px', margin: '6rem auto 2rem', padding: '0 2rem', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>Earrings – Handcrafted Elegance in Recycled Gold & Silver</h2>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                    Discover our collection of artisan crafted earrings, designed to celebrate the beauty of imperfection. Each piece is meticulously handcrafted using recycled 24ct gold plated bronze, solid gold, and sterling silver, embodying a modern yet contemporary aesthetic. Inspired by organic shapes and nature, our earrings are unique, featuring sculptural forms that mimic pearls and natural gemstones.
                </p>
            </section>

        </MainLayout>
    );
};

export default Home;
