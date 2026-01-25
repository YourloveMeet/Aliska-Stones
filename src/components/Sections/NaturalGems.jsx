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
                        The Natural Gems collection draws inspiration from the raw elegance of the earth. Carefully selected gemstones reveal their true character through rich tones, subtle variations, and refined cuts. Each design celebrates individuality and organic beauty, offering pieces that feel both grounding and radiant — jewelry that enhances your presence without overpowering it.                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default NaturalGems;
