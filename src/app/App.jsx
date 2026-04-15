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
import { waitForImages, preloadImages } from '../utils/imageLoader';

// Critical assets for preloading
import heroImage from '../assets/images/HeroPageAsset1.png';
import heroImageMobile from '../assets/images/HeroPageAsset1Mobile.png';
import classicImage from '../assets/images/Products/Classic Collection.png';
import { productImages } from '../data/products';


const AppContent = () => {
  const [isPageLoading, setIsPageLoading] = React.useState(true);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const location = useLocation();
  const isFirstMount = React.useRef(true);

  // Initial load
  React.useEffect(() => {
    const handleInitialLoad = async () => {
      setLoadingProgress(10); // Start at 10%

      // 1. Preload critical images first
      const criticalImages = [
        heroImage, 
        heroImageMobile, 
        classicImage,
        ...productImages.slice(0, 3) // First 3 product images
      ];
      
      await preloadImages(criticalImages, (progress) => {
        // Map 0-100 to 10-85 range for preloading phase
        setLoadingProgress(10 + (progress * 0.75));
      });

      // 2. Wait for the window to report fully loaded (scripts, fonts, etc)
      if (document.readyState !== 'complete') {
        await new Promise(resolve => window.addEventListener('load', resolve, { once: true }));
      }
      setLoadingProgress(80);
      
      // 3. Additional check for all images currently in DOM (from lazy pages)
      await waitForImages();
      setLoadingProgress(95);
      
      // 4. Final step
      setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsPageLoading(false);
          isFirstMount.current = false;
        }, 400);
      }, 400);
    };

    handleInitialLoad();
  }, []);

  // Subsequent route changes
  React.useEffect(() => {
    if (isFirstMount.current) return;

    const handleRouteChange = async () => {
      setIsPageLoading(true);
      setLoadingProgress(20);
      
      // Wait for React to mount the new component and start loading its assets
      await new Promise(resolve => setTimeout(resolve, 150));
      
      // Get all new images and wait for them, showing some artificial progress
      const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
      if (images.length > 0) {
        await preloadImages(images, (progress) => {
          setLoadingProgress(20 + (progress * 0.75));
        });
      } else {
        setLoadingProgress(90);
      }
      
      // Short delay for a polished feel
      setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsPageLoading(false);
        }, 300);
      }, 500);
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <>
      <PageLoader isVisible={isPageLoading} progress={loadingProgress} />
      <ScrollToTop />
      <CartDrawer />
      <React.Suspense fallback={<PageLoader isVisible={true} progress={70} />}>
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
