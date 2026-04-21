import { Property } from './types';

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    refNo: 'LK95440',
    title: 'Prime Beachfront Land for Sale – Pitipana, Negombo',
    price: 80000000,
    pricePerUnit: 'Rs: 1,000,000 Per Perch',
    currency: 'LKR',
    location: 'Pitipana, Negombo',
    city: 'Negombo',
    district: 'Gampaha',
    type: 'Land',
    size: '80',
    unit: 'Perch',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064',
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070'
    ],
    description: 'An exceptional opportunity to own a well-shaped 80-perch bare land directly adjoining the sea in the highly sought-after Pitipana area of Negombo. This unique property offers dual road frontage, ensuring excellent accessibility and strong development potential — ideal for a boutique hotel, luxury villa project, guesthouse, beach resort, cabanas, or tourism-related venture.',
    descriptionSinhala: 'මීගමුව, පිටිපන ප්‍රදේශයේ මුහුදට ඉතා බැඳී පවතින අක්කර 80 ක නිශ් ඉඩමක් විකිණීමට ඇත. මෙම ඉඩම පාරවල් දෙකකට මුහුණලා ඇති අතර සංචාරක ව්‍යාපාරයකට ඉතා සුදුසුයි.',
    features: ['Ocean Front', 'Dual Road Frontage', 'Tourism Approved', 'Clear Titles'],
    locationHighlights: [
      'Only 100 meters to Pamunugama Main Road',
      'Just 5 km to Negombo Town (Approx. 15 minutes)',
      '20 minutes to the famous Browns Beach, Negombo',
      'Only 7 minutes to Negombo Fishery Harbour',
      'Easy access to supermarkets, banks, financial institutions',
      'Close to leading government & private schools',
      'Short drive to Bandaranaike International Airport'
    ],
    propertyHighlights: [
      'Absolute beachfront',
      '2 road frontages',
      'Well-proportioned, usable shape',
      'High tourism growth area',
      'Peaceful coastal environment'
    ],
    views: 88,
    status: 'Available',
    seller: {
      name: 'Ranatunga',
      type: 'Personal',
      phone: '0773951560'
    },
    coordinates: { lat: 7.1856, lng: 79.8433 }
  },
  {
    id: '2',
    refNo: 'LK88210',
    title: 'Luxury Beachfront Villa',
    price: 150000000,
    currency: 'LKR',
    location: 'Galle, Sri Lanka',
    city: 'Galle',
    district: 'Galle',
    type: 'House',
    size: '4500',
    unit: 'Sqft',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
    description: 'A stunning modern villa located right on the pristine beaches of Galle. Features a private infinity pool and panoramic ocean views.',
    features: ['Ocean View', 'Private Pool', 'Modern Design', 'High Security'],
    bedrooms: 5,
    bathrooms: 4,
    status: 'Available',
    views: 125,
    seller: {
      name: 'LankaLand Estates',
      type: 'Agent',
      phone: '0773951560'
    },
    coordinates: { lat: 6.0367, lng: 80.2170 }
  },
  {
    id: '3',
    refNo: 'LK77120',
    title: 'Modern City Apartment',
    price: 45000000,
    currency: 'LKR',
    location: 'Colombo 03',
    city: 'Colombo',
    district: 'Colombo',
    type: 'Apartment',
    size: '1200',
    unit: 'Sqft',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop',
    description: 'Chic apartment in the heart of Colombo. Close to schools, hospitals, and major shopping malls.',
    features: ['24/7 Security', 'Gym', 'Parking', 'Back-up Generator'],
    bedrooms: 2,
    bathrooms: 2,
    status: 'Available',
    views: 210,
    seller: {
      name: 'Skyline Developers',
      type: 'Developer',
      phone: '0114922492'
    },
    coordinates: { lat: 6.9142, lng: 79.8519 }
  },
  {
    id: '4',
    refNo: 'LK44330',
    title: 'Panoramic View Land',
    price: 1200000,
    currency: 'LKR',
    location: 'Kandy',
    city: 'Kandy',
    district: 'Kandy',
    type: 'Land',
    size: '20',
    unit: 'Perch',
    imageUrl: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop',
    description: 'Breathtaking mountain view land in the hill capital. Ideal for a holiday cottage or eco-resort.',
    features: ['Mountain View', 'Cool Climate', 'Fruit Trees'],
    status: 'Available',
    views: 45,
    seller: {
      name: 'Upland Realty',
      type: 'Agent',
      phone: '0773951560'
    },
    coordinates: { lat: 7.2906, lng: 80.6337 }
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const CONTACT_INFO = {
  phone: '077 395 1560',
  phoneAlt: '011 492 2492',
  whatsapp: '94773951560', // Correct international format for WhatsApp API
  address: '95 Metro Complex, Kirillawala, Kadawatha',
  email: 'info@lankaland.lk',
  tiktok: 'https://www.tiktok.com/@.lankaland.lk?is_from_webapp=1&sender_device=pc'
};
