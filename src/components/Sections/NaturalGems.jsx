import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

import naturalImage from '../../assets/images/Products/Natural Gems.png';

const NaturalGems = () => {
    return (
        <section className="natural-gems">
            <div className="section-container reverse">
                <div className="natural-image-container">
                    <img src={naturalImage} alt="Natural Gems" className="section-image" />
                </div>
                <div className="natural-content">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Natural Gems
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Natural Gems is a collection of precious gemstones that fit beautifully in any setting. The color and cuts will mesmerize you and bring out your natural glow.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default NaturalGems;
