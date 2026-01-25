import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount, openCart } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/shop', label: 'Shop' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-left">
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>

                        <div className="nav-links desktop-only">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="navbar-center">
                        <Link to="/" className="logo">
                            <span className="logo-text">Aliska Stones</span>
                        </Link>
                    </div>

                    <div className="navbar-right">
                        <div className="nav-icons">
                            <button aria-label="Search">
                                <Search size={20} />
                            </button>
                            <Link to="/cart" className="icon-link" aria-label="Account">
                                <User size={20} />
                            </Link>
                            <button
                                className="cart-btn"
                                onClick={openCart}
                                aria-label="Shopping bag"
                            >
                                <ShoppingBag size={20} />
                                {cartCount > 0 && (
                                    <motion.span
                                        className="cart-count"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        key={cartCount}
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
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
                            transition={{ type: 'tween', duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mobile-menu-header">
                                <span className="mobile-logo">Aliska Stones</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="mobile-links">
                                <Link to="/">Home</Link>
                                <Link to="/shop">Shop All</Link>
                                <Link to="/about">About Us</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                            <div className="mobile-categories">
                                <h4>Categories</h4>
                                <Link to="/shop">Earrings</Link>
                                <Link to="/shop">Rings</Link>
                                <Link to="/shop">Necklaces</Link>
                                <Link to="/shop">Bracelets</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
