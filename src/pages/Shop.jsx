import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Plus } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { PRODUCTS, CATEGORIES, COLLECTIONS } from '../data/products';
import { useCart } from '../context/CartContext';
import './Shop.css';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeCollection, setActiveCollection] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { addToCart } = useCart();

    const filteredProducts = useMemo(() => {
        let result = [...PRODUCTS];

        // Filter by category
        if (activeCategory !== 'All') {
            result = result.filter(p => p.category === activeCategory);
        }

        // Filter by collection
        if (activeCollection !== 'All') {
            result = result.filter(p => p.collection === activeCollection);
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.priceValue - b.priceValue);
                break;
            case 'price-high':
                result.sort((a, b) => b.priceValue - a.priceValue);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return result;
    }, [activeCategory, activeCollection, sortBy]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <MainLayout>
            <div className="shop-page">
                {/* Hero Banner */}
                <motion.section
                    className="shop-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="shop-hero-content">
                        <h1>The Collection</h1>
                        <p>Discover handcrafted pieces that celebrate the beauty of imperfection</p>
                    </div>
                </motion.section>

                {/* Filter Bar */}
                <div className="shop-controls">
                    <div className="filter-toggle" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        <SlidersHorizontal size={18} />
                        <span>Filters</span>
                    </div>

                    <div className="category-pills">
                        {CATEGORIES.slice(0, 5).map(cat => (
                            <button
                                key={cat}
                                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="sort-dropdown">
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Alphabetical</option>
                        </select>
                        <ChevronDown size={16} />
                    </div>
                </div>

                {/* Filter Panel */}
                <motion.div
                    className={`filter-panel ${isFilterOpen ? 'open' : ''}`}
                    initial={false}
                    animate={{ height: isFilterOpen ? 'auto' : 0, opacity: isFilterOpen ? 1 : 0 }}
                >
                    <div className="filter-section">
                        <h4>Collections</h4>
                        <div className="filter-options">
                            {COLLECTIONS.map(col => (
                                <button
                                    key={col}
                                    className={`filter-option ${activeCollection === col ? 'active' : ''}`}
                                    onClick={() => setActiveCollection(col)}
                                >
                                    {col}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <div className="results-count">
                    <span>{filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}</span>
                </div>

                {/* Product Grid */}
                <motion.div
                    key={`${activeCategory}-${activeCollection}-${sortBy}`}
                    className="shop-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="shop-product-card"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link to={`/product/${product.id}`} className="product-link">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} />
                                    <div className="product-overlay">
                                        <span>View Details</span>
                                    </div>
                                </div>
                            </Link>
                            <button
                                className="quick-add-btn"
                                onClick={() => addToCart(product)}
                                aria-label="Add to cart"
                            >
                                <Plus size={20} />
                            </button>
                            <div className="product-info">
                                <Link to={`/product/${product.id}`}>
                                    <h3>{product.name}</h3>
                                </Link>
                                <p className="product-collection">{product.collection}</p>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default Shop;
