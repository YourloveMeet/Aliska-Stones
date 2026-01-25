import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = useCallback((product, quantity = 1) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
        setIsCartOpen(true);
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    }, []);

    const updateQuantity = useCallback((productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }, [removeFromCart]);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartTotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('£', '').replace(',', ''));
        return total + (price * item.quantity);
    }, 0);

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    const openCart = useCallback(() => setIsCartOpen(true), []);
    const closeCart = useCallback(() => setIsCartOpen(false), []);
    const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);

    return (
        <CartContext.Provider value={{
            cartItems,
            cartCount,
            cartTotal,
            isCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            openCart,
            closeCart,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
