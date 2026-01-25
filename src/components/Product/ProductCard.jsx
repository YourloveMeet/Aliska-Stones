import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
        >
            <Link to={`/product/${product.id}`} className="product-image-container">
                <div className="product-image-placeholder">
                    {product.image ? (
                        <img src={product.image} alt={product.name} />
                    ) : (
                        <span>Image</span>
                    )}
                </div>
                <div className="product-hover-overlay">
                    <span>View Details</span>
                </div>
            </Link>
            <button
                className="add-to-cart-btn"
                aria-label="Add to cart"
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
            >
                <Plus size={20} />
            </button>
            <div className="product-info">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                </Link>
                <p className="product-category">{product.collection || product.category}</p>
                <p className="product-price">{product.price}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
