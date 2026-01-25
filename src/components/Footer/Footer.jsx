import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2 className="brand-logo">Aliska Stones</h2>
                    <p className="brand-tagline">Handcrafted elegance, sustainably made</p>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Shop</h4>
                        <Link to="/shop">All Jewelry</Link>
                        <Link to="/shop">Earrings</Link>
                        <Link to="/shop">Rings</Link>
                        <Link to="/shop">Necklaces</Link>
                        <Link to="/shop">Bracelets</Link>
                    </div>
                    <div className="footer-column">
                        <h4>About</h4>
                        <Link to="/about">Our Story</Link>
                        <Link to="/about">Craftsmanship</Link>
                        <Link to="/about">Sustainability</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Help</h4>
                        <a href="#">Shipping & Returns</a>
                        <a href="#">Size Guide</a>
                        <a href="#">Care Instructions</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>

                <div className="newsletter-section">
                    <h3>Join Our Inner Circle</h3>
                    <p>Get 10% off your first order and be the first to know about new arrivals.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your Email" />
                        <button aria-label="Subscribe">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Aliska Stones. All Rights Reserved.</p>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
