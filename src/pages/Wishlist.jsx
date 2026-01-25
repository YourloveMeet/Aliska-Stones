import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/Product/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems } = useWishlist();

    return (
        <MainLayout>
            <div className="wishlist-page">
                <div className="wishlist-header">
                    <h1 className="wishlist-title">Your Wishlist</h1>
                    <p className="wishlist-subtitle">
                        {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                    </p>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="wishlist-empty">
                        <div className="empty-content">
                            <h2>Your wishlist is empty</h2>
                            <p>Save items you love to view them here.</p>
                            <Link to="/shop" className="continue-shopping-btn">
                                Start Shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        className="wishlist-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {wishlistItems.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                )}
            </div>
        </MainLayout>
    );
};

export default Wishlist;
