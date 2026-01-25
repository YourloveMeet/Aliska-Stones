import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    // Filter products
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const searchTerm = query.toLowerCase();
        const filtered = PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.collection.toLowerCase().includes(searchTerm)
        );
        setResults(filtered);
    }, [query]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="search-overlay"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <div className="search-header">
                    <button className="close-search-btn" onClick={onClose}>
                        <X size={32} />
                    </button>
                </div>

                <div className="search-container">
                    <div className="search-input-wrapper">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search collections, products..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Search className="search-icon" size={24} />
                    </div>

                    <div className="search-results">
                        {query && results.length === 0 ? (
                            <div className="no-results">
                                <p>No products found for "{query}"</p>
                            </div>
                        ) : (
                            <div className="search-results-grid">
                                {results.map(product => (
                                    <Link
                                        key={product.id}
                                        to={`/product/${product.id}`}
                                        className="search-result-item"
                                        onClick={onClose}
                                    >
                                        <div className="result-image">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="result-info">
                                            <h4>{product.name}</h4>
                                            <p>{product.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchOverlay;
