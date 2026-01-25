import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

import classicImage from '../../assets/images/Products/Classic Collection.png';

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
                        Rooted in timeless design, the Classic Collection reflects a quiet confidence and enduring beauty. Each piece is shaped by refined craftsmanship, where smooth contours and balanced forms create an effortless sense of harmony. Designed to transcend trends, this collection brings understated luxury to everyday moments, making elegance feel natural, not forced.                    </motion.p>
                </div>
                <div className="classic-image-container">
                    <img src={classicImage} alt="Classic Collection" className="section-image" />
                </div>
            </div>
        </section>
    );
};

export default ClassicCollection;
