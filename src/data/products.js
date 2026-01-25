// Product data - shared across pages
import img1 from '../assets/images/Products/The Gilded Echo Hoops.png';
import img2 from '../assets/images/Products/The Whispering Tide Earrings.png';
import img3 from '../assets/images/Products/The Fragmented Dawn Earrings.png';
import img4 from '../assets/images/Products/The Lunar Caress Earrings.png';
import img5 from '../assets/images/Products/The Lunar Caress Earringss.png';
import img6 from '../assets/images/Products/The Ethereal Hoops.png';

export const productImages = [img1, img2, img3, img4, img5, img6];

export const PRODUCTS = [
    {
        id: 1,
        name: 'The Gilded Echo Hoops',
        category: 'Earrings',
        collection: 'Classic Collection',
        price: '£225.00',
        priceValue: 225,
        image: img1,
        description: 'Handcrafted with precision, these sculptural hoops capture the essence of timeless elegance. Made from recycled 24ct gold plated bronze.',
        details: ['24ct Gold Plated Bronze', 'Handcrafted in London', 'Hypoallergenic Posts', 'Weight: 12g per pair'],
        inStock: true
    },
    {
        id: 2,
        name: 'The Whispering Tide Earrings',
        category: 'Earrings',
        collection: '24ct Gold Plated',
        price: '£195.00',
        priceValue: 195,
        image: img2,
        description: 'Inspired by the gentle movement of ocean waves, these earrings bring a sense of calm and sophistication to any look.',
        details: ['24ct Gold Plated Bronze', 'Organic Wave Design', 'Butterfly Back Closure', 'Weight: 8g per pair'],
        inStock: true
    },
    {
        id: 3,
        name: 'The Fragmented Dawn Earrings',
        category: 'Earrings',
        collection: '24ct Gold Plated',
        price: '£195.00',
        priceValue: 195,
        image: img3,
        description: 'Bold geometric patterns meet organic forms in this statement piece that celebrates the beauty of imperfection.',
        details: ['24ct Gold Plated Bronze', 'Abstract Geometric Design', 'Push Back Closure', 'Weight: 10g per pair'],
        inStock: true
    },
    {
        id: 4,
        name: 'The Lunar Caress Earrings',
        category: 'Earrings',
        collection: '24ct Gold Plated',
        price: '£195.00',
        priceValue: 195,
        image: img4,
        description: 'Crescent-shaped elegance inspired by moonlit nights. A perfect blend of celestial beauty and modern design.',
        details: ['24ct Gold Plated Bronze', 'Crescent Moon Design', 'Lever Back Closure', 'Weight: 9g per pair'],
        inStock: true
    },
    {
        id: 5,
        name: 'The Celestial Arc Studs',
        category: 'Studs',
        collection: 'Classic Collection',
        price: '£180.00',
        priceValue: 180,
        image: img5,
        description: 'Minimalist studs with maximum impact. These curved pieces sit perfectly on the ear for everyday luxury.',
        details: ['24ct Gold Plated Bronze', 'Arc Design', 'Push Back Closure', 'Weight: 5g per pair'],
        inStock: true
    },
    {
        id: 6,
        name: 'The Ethereal Hoops',
        category: 'Earrings',
        collection: '14ct Gold Plated',
        price: '£185.00',
        priceValue: 185,
        image: img6,
        description: 'Light as air yet bold in presence. These hoops float around your ears with effortless grace.',
        details: ['14ct Gold Plated Silver', 'Lightweight Design', 'Hinge Closure', 'Weight: 7g per pair'],
        inStock: true
    },
    {
        id: 7,
        name: 'The Golden Solstice Hoops',
        category: 'Earrings',
        collection: '14ct Gold Plated',
        price: '£175.00',
        priceValue: 175,
        image: img1,
        description: 'Celebrate the longest day with these sun-inspired hoops. Perfect for those who love statement pieces.',
        details: ['14ct Gold Plated Silver', 'Sun-inspired Design', 'Click-Top Closure', 'Weight: 11g per pair'],
        inStock: true
    },
    {
        id: 8,
        name: "The Hera's Memory Earrings",
        category: 'Earrings',
        collection: '14ct Gold Plated',
        price: '£225.00',
        priceValue: 225,
        image: img2,
        description: 'Named after the Greek goddess, these regal earrings embody power and feminine grace.',
        details: ['14ct Gold Plated Silver', 'Goddess-inspired Design', 'French Hook Closure', 'Weight: 13g per pair'],
        inStock: true
    },
];

export const CATEGORIES = ['All', 'Earrings', 'Studs', 'Hoops', 'Rings', 'Necklaces', 'Bracelets'];

export const COLLECTIONS = ['All', 'Classic Collection', '24ct Gold Plated', '14ct Gold Plated', 'Sterling Silver'];
