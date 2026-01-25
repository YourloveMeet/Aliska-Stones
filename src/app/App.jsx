import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';

// Lazy load pages to improve error visibility
const Home = React.lazy(() => import('../pages/Home'));
const Shop = React.lazy(() => import('../pages/Shop'));
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Checkout = React.lazy(() => import('../pages/Checkout'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

// Components
import CartDrawer from '../components/Cart/CartDrawer';

// Loading component
const Loading = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.5rem'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <CartDrawer />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;
