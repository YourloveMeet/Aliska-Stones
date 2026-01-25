import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, Share2, Minus, Plus, Check } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const product = PRODUCTS.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <MainLayout>
                <div className="product-not-found">
                    <h2>Product not found</h2>
                    <Link to="/shop">Back to Shop</Link>
                </div>
            </MainLayout>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

    return (
        <MainLayout>
            <div className="product-detail-page">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/shop">Shop</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </nav>

                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ChevronLeft size={20} />
                    <span>Back</span>
                </button>

                <div className="product-detail-container">
                    {/* Product Image */}
                    <motion.div
                        className="product-image-section"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="main-image glass-card">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        className="product-info-section"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="product-collection-tag">{product.collection}</span>
                        <h1>{product.name}</h1>
                        <p className="product-price-large">{product.price}</p>

                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>

                        <div className="product-details">
                            <h4>Details</h4>
                            <ul>
                                {product.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="product-actions">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Minus size={16} />
                                </button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}>
                                    <Plus size={16} />
                                </button>
                            </div>

                            <button
                                className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                                onClick={handleAddToCart}
                            >
                                {isAdded ? (
                                    <>
                                        <Check size={20} />
                                        <span>Added to Bag</span>
                                    </>
                                ) : (
                                    <span>Add to Bag — {product.price}</span>
                                )}
                            </button>
                        </div>

                        <div className="product-secondary-actions">
                            <button className="wishlist-btn">
                                <Heart size={18} />
                                <span>Add to Wishlist</span>
                            </button>
                            <button className="share-btn">
                                <Share2 size={18} />
                                <span>Share</span>
                            </button>
                        </div>

                        <div className="product-guarantee">
                            <p>✦ Free UK Shipping on orders over £100</p>
                            <p>✦ 30-day returns</p>
                            <p>✦ Ethically sourced materials</p>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="related-products">
                        <h2>You May Also Love</h2>
                        <div className="related-grid">
                            {relatedProducts.map(p => (
                                <Link key={p.id} to={`/product/${p.id}`} className="related-card">
                                    <div className="related-image">
                                        <img src={p.image} alt={p.name} />
                                    </div>
                                    <h4>{p.name}</h4>
                                    <p>{p.price}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </MainLayout>
    );
};

export default ProductDetail;
