import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Check, Lock } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postcode: '',
        country: 'United Kingdom',
        phone: ''
    });

    const shipping = cartTotal >= 100 ? 0 : 5;
    const total = cartTotal + shipping;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            setIsComplete(true);
            clearCart();
        }
    };

    if (cartItems.length === 0 && !isComplete) {
        navigate('/cart');
        return null;
    }

    if (isComplete) {
        return (
            <MainLayout>
                <div className="checkout-page">
                    <motion.div
                        className="order-complete"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="success-icon">
                            <Check size={48} />
                        </div>
                        <h1>Thank You!</h1>
                        <p>Your order has been placed successfully.</p>
                        <p className="order-email">A confirmation email has been sent to <strong>{formData.email}</strong></p>
                        <Link to="/shop" className="continue-btn">
                            Continue Shopping
                        </Link>
                    </motion.div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="checkout-page">
                <div className="checkout-header">
                    <Link to="/cart" className="back-to-cart">
                        <ChevronLeft size={20} />
                        Back to Bag
                    </Link>
                    <h1>Checkout</h1>
                </div>

                {/* Progress Steps */}
                <div className="checkout-progress">
                    {['Information', 'Shipping', 'Payment'].map((label, i) => (
                        <div key={i} className={`progress-step ${step > i ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
                            <div className="step-number">
                                {step > i + 1 ? <Check size={14} /> : i + 1}
                            </div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>

                <div className="checkout-layout">
                    {/* Form Section */}
                    <div className="checkout-form-section">
                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <motion.div
                                    className="form-step"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h2>Contact Information</h2>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <h2>Shipping Address</h2>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Postcode</label>
                                            <input
                                                type="text"
                                                name="postcode"
                                                value={formData.postcode}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    className="form-step"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h2>Shipping Method</h2>
                                    <div className="shipping-options">
                                        <label className="shipping-option selected">
                                            <input type="radio" name="shipping" defaultChecked />
                                            <div className="option-content">
                                                <div>
                                                    <strong>Standard Delivery</strong>
                                                    <p>3-5 business days</p>
                                                </div>
                                                <span>{cartTotal >= 100 ? 'Free' : '£5.00'}</span>
                                            </div>
                                        </label>
                                        <label className="shipping-option">
                                            <input type="radio" name="shipping" />
                                            <div className="option-content">
                                                <div>
                                                    <strong>Express Delivery</strong>
                                                    <p>1-2 business days</p>
                                                </div>
                                                <span>£12.00</span>
                                            </div>
                                        </label>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    className="form-step"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h2>Payment</h2>
                                    <div className="payment-notice glass-card">
                                        <Lock size={20} />
                                        <p>This is a demo. No real payment will be processed.</p>
                                    </div>

                                    <div className="form-group">
                                        <label>Card Number</label>
                                        <input type="text" placeholder="1234 5678 9012 3456" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Expiry</label>
                                            <input type="text" placeholder="MM/YY" />
                                        </div>
                                        <div className="form-group">
                                            <label>CVV</label>
                                            <input type="text" placeholder="123" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Name on Card</label>
                                        <input type="text" />
                                    </div>
                                </motion.div>
                            )}

                            <div className="form-actions">
                                {step > 1 && (
                                    <button type="button" className="back-btn" onClick={() => setStep(step - 1)}>
                                        Back
                                    </button>
                                )}
                                <button type="submit" className="continue-btn">
                                    {step === 3 ? 'Place Order' : 'Continue'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="checkout-summary glass-panel">
                        <h2>Order Summary</h2>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-item-image">
                                        {item.image && <img src={item.image} alt={item.name} />}
                                        <span className="qty-badge">{item.quantity}</span>
                                    </div>
                                    <div className="summary-item-info">
                                        <h4>{item.name}</h4>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>£{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>£{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Checkout;
