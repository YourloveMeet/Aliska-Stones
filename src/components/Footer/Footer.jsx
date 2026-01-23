import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2 className="brand-logo">amoteir</h2>
                    <div className="social-icons">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Catalog</h4>
                        <a href="#">New In</a>
                        <a href="#">Earrings</a>
                        <a href="#">Rings</a>
                        <a href="#">Necklaces</a>
                        <a href="#">Bracelets</a>
                        <a href="#">Gifts</a>
                    </div>
                    <div className="footer-column">
                        <h4>Information</h4>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Shipping & Returns</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-column">
                        <h4>More Info</h4>
                        <a href="#">Store Locator</a>
                        <a href="#">Size Guide</a>
                        <a href="#">Careers</a>
                    </div>
                </div>

                <div className="newsletter-section">
                    <h3>Join our inner circle</h3>
                    <p>Get 10% off your first order and be the first to know about new arrivals.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your Email" />
                        <button>&rarr;</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Amoteir. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
