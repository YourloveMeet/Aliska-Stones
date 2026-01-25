import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset after a few seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <MainLayout>
            <div className="contact-page">
                {/* Hero */}
                <motion.section
                    className="contact-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you</p>
                </motion.section>

                <div className="contact-layout">
                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Send Us a Message</h2>

                        {isSubmitted ? (
                            <motion.div
                                className="success-message glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <Send size={32} />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="order">Order Inquiry</option>
                                        <option value="product">Product Question</option>
                                        <option value="custom">Custom Order</option>
                                        <option value="wholesale">Wholesale</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Your Message</label>
                                    <textarea
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="contact-info-section"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="info-card glass-panel">
                            <h2>Contact Information</h2>

                            <div className="info-item">
                                <Mail size={20} />
                                <div>
                                    <strong>Email</strong>
                                    <a href="mailto:hello@aliskastones.com">hello@aliskastones.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone size={20} />
                                <div>
                                    <strong>Phone</strong>
                                    <a href="tel:+442071234567">+44 20 7123 4567</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <MapPin size={20} />
                                <div>
                                    <strong>Address</strong>
                                    <p>123 Bond Street<br />London, W1S 4EX</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock size={20} />
                                <div>
                                    <strong>Hours</strong>
                                    <p>Mon - Sat: 10am - 6pm<br />Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="#" aria-label="Instagram"><Instagram size={22} /></a>
                                <a href="#" aria-label="Facebook"><Facebook size={22} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={22} /></a>
                            </div>
                        </div>

                        <div className="faq-link glass-card">
                            <h3>Looking for answers?</h3>
                            <p>Check our FAQ section for quick answers to common questions.</p>
                            <a href="#">View FAQ →</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
