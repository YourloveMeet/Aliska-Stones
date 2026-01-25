import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        cartItems,
        cartTotal,
        cartCount,
        isCartOpen,
        closeCart,
        removeFromCart,
        updateQuantity
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                    />
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <div className="cart-drawer-header">
                            <h2>Your Bag ({cartCount})</h2>
                            <button className="close-btn" onClick={closeCart}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cart-drawer-content">
                            {cartItems.length === 0 ? (
                                <div className="cart-empty">
                                    <ShoppingBag size={48} strokeWidth={1} />
                                    <p>Your bag is empty</p>
                                    <Link to="/shop" className="continue-shopping-btn" onClick={closeCart}>
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div className="cart-items">
                                    {cartItems.map(item => (
                                        <motion.div
                                            key={item.id}
                                            className="cart-item"
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                        >
                                            <div className="cart-item-image">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name} />
                                                ) : (
                                                    <div className="placeholder-image" />
                                                )}
                                            </div>
                                            <div className="cart-item-details">
                                                <h4>{item.name}</h4>
                                                <p className="cart-item-category">{item.category}</p>
                                                <p className="cart-item-price">{item.price}</p>
                                                <div className="cart-item-actions">
                                                    <div className="quantity-controls">
                                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                            <Minus size={14} />
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="remove-btn"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-drawer-footer">
                                <div className="cart-subtotal">
                                    <span>Subtotal</span>
                                    <span>£{cartTotal.toFixed(2)}</span>
                                </div>
                                <p className="shipping-note">Shipping calculated at checkout</p>
                                <Link
                                    to="/checkout"
                                    className="checkout-btn"
                                    onClick={closeCart}
                                >
                                    Proceed to Checkout
                                </Link>
                                <Link
                                    to="/cart"
                                    className="view-cart-btn"
                                    onClick={closeCart}
                                >
                                    View Full Cart
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
