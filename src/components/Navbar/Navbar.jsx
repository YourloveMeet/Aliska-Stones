import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-left">
                        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} style={{ display: 'block', color: 'inherit' }}>
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="navbar-center">
                        {/* Logo hidden to avoid duplication with hero image */}
                    </div>

                    <div className="navbar-right">
                        <div className="nav-icons">
                            <button><Search size={20} /></button>
                            <button><User size={20} /></button>
                            <button className="cart-btn">
                                <ShoppingBag size={20} />
                                <span className="cart-count">0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            className="mobile-menu"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mobile-menu-header">
                                <button onClick={() => setIsMobileMenuOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="mobile-links">
                                <a href="#">New In</a>
                                <a href="#">Earrings</a>
                                <a href="#">Rings</a>
                                <a href="#">Necklace</a>
                                <a href="#">Bracelet</a>
                                <a href="#">Gifts</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
