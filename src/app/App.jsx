import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { WishlistProvider } from '../context/WishlistContext';

// Lazy load pages to improve error visibility
const Home = React.lazy(() => import('../pages/Home'));
const Shop = React.lazy(() => import('../pages/Shop'));
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));
const Wishlist = React.lazy(() => import('../pages/Wishlist'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Checkout = React.lazy(() => import('../pages/Checkout'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

// Components
import CartDrawer from '../components/Cart/CartDrawer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import PageLoader from '../components/Common/PageLoader/PageLoader';
import { waitForImages } from '../utils/imageLoader';


const AppContent = () => {
  const [isPageLoading, setIsPageLoading] = React.useState(true);
  const location = useLocation();
  const isFirstMount = React.useRef(true);

  // Initial load
  React.useEffect(() => {
    const handleInitialLoad = async () => {
      // In JS-heavy apps, wait for the window to report fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => window.addEventListener('load', resolve, { once: true }));
      }
      
      // Additional check for all images to ensure the UI is visually ready
      await waitForImages();
      
      // Small buffer to let animations settle
      setTimeout(() => {
        setIsPageLoading(false);
        isFirstMount.current = false;
      }, 500);
    };

    handleInitialLoad();
  }, []);

  // Subsequent route changes
  React.useEffect(() => {
    if (isFirstMount.current) return;

    const handleRouteChange = async () => {
      setIsPageLoading(true);
      
      // Wait for React to mount the new component and start loading its assets
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Now wait specifically for newly added images in the DOM
      await waitForImages();
      
      // Short delay for a polished feel
      setTimeout(() => {
        setIsPageLoading(false);
      }, 800);
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <>
      <PageLoader isVisible={isPageLoading} />
      <ScrollToTop />
      <CartDrawer />
      <React.Suspense fallback={<PageLoader isVisible={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <AppContent />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
