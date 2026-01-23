import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

const ClassicCollection = () => {
    return (
        <section className="classic-collection">
            <div className="section-container">
                <div className="classic-content">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Classic Collection
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Classic Collection is a harmonious fusion of ancient artistry and subtle elegance. Shapes that flow with simplicity and possess a sense of effortless dispersion.
                    </motion.p>
                </div>
                <div className="classic-image-container">
                    {/* Placeholder for classic collection image */}
                    <div className="classic-placeholder"></div>
                </div>
            </div>
        </section>
    );
};

export default ClassicCollection;
