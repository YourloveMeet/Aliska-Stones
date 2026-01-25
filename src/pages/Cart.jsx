import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <MainLayout>
                <div className="cart-page">
                    <div className="empty-cart">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ShoppingBag size={64} strokeWidth={1} />
                            <h2>Your bag is empty</h2>
                            <p>Discover our collection of handcrafted jewelry</p>
                            <Link to="/shop" className="shop-now-btn">
                                Explore Collection
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="cart-page">
                <motion.div
                    className="cart-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1>Your Bag</h1>
                    <p>{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
                </motion.div>

                <div className="cart-layout">
                    <div className="cart-items-section">
                        <div className="cart-table-header">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        {cartItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="cart-row"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                layout
                            >
                                <div className="cart-product">
                                    <Link to={`/product/${item.id}`} className="cart-product-image">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} />
                                        ) : (
                                            <div className="placeholder" />
                                        )}
                                    </Link>
                                    <div className="cart-product-info">
                                        <Link to={`/product/${item.id}`}>
                                            <h3>{item.name}</h3>
                                        </Link>
                                        <p className="cart-product-collection">{item.collection}</p>
                                        <p className="cart-product-price">{item.price}</p>
                                        <button
                                            className="remove-item-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={14} />
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-quantity">
                                    <div className="qty-control">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus size={14} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-total">
                                    <span>£{(parseFloat(item.price.replace('£', '')) * item.quantity).toFixed(2)}</span>
                                </div>
                            </motion.div>
                        ))}

                        <div className="cart-actions">
                            <Link to="/shop" className="continue-link">
                                <ArrowLeft size={16} />
                                Continue Shopping
                            </Link>
                            <button className="clear-cart-btn" onClick={clearCart}>
                                Clear Bag
                            </button>
                        </div>
                    </div>

                    <motion.div
                        className="cart-summary glass-panel"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>£{cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{cartTotal >= 100 ? 'Free' : '£5.00'}</span>
                        </div>

                        <div className="summary-row total">
                            <span>Total</span>
                            <span>£{(cartTotal + (cartTotal >= 100 ? 0 : 5)).toFixed(2)}</span>
                        </div>

                        <div className="free-shipping-note">
                            {cartTotal < 100 && (
                                <p>Add £{(100 - cartTotal).toFixed(2)} more for free shipping!</p>
                            )}
                        </div>

                        <Link to="/checkout" className="checkout-btn">
                            Proceed to Checkout
                        </Link>

                        <div className="payment-methods">
                            <p>Secure checkout with</p>
                            <div className="payment-icons">
                                <span>Visa</span>
                                <span>Mastercard</span>
                                <span>Amex</span>
                                <span>PayPal</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Cart;
