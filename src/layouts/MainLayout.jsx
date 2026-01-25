import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './MainLayout.css';

import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="main-layout">
            <Navbar />
            <main className={`main-content ${isHome ? 'no-padding' : ''}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
