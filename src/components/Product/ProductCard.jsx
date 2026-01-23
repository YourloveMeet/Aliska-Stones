import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="product-image-container">
                <div className="product-image-placeholder">
                    {product.image ? (
                        <img src={product.image} alt={product.name} />
                    ) : (
                        <span>Image</span>
                    )}
                </div>
                <button className="add-to-cart-btn" aria-label="Add to cart">
                    <Plus size={20} />
                </button>
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
