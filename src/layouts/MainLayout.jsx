import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
