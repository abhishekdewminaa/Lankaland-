import { Property } from './types';

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    price: 150000000,
    currency: 'LKR',
    location: 'Galle, Sri Lanka',
    type: 'House',
    size: '4500',
    unit: 'Sqft',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
    description: 'A stunning modern villa located right on the pristine beaches of Galle. Features a private infinity pool and panoramic ocean views.',
    features: ['Ocean View', 'Private Pool', 'Modern Design', 'High Security'],
    bedrooms: 5,
    bathrooms: 4
  },
  {
    id: '2',
    title: 'Prime Residential Land',
    price: 2500000,
    currency: 'LKR',
    location: 'Thalawathugoda, Colombo',
    type: 'Land',
    size: '10',
    unit: 'Perch',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop',
    description: 'Exclusive residential block in a highly developing neighborhood. Perfect for building your dream home.',
    features: ['Electricity', 'Water', 'Carpeted Road', 'Gated Community'],
  },
  {
    id: '3',
    title: 'Modern City Apartment',
    price: 45000000,
    currency: 'LKR',
    location: 'Colombo 03',
    type: 'Apartment',
    size: '1200',
    unit: 'Sqft',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop',
    description: 'Chic apartment in the heart of Colombo. Close to schools, hospitals, and major shopping malls.',
    features: ['24/7 Security', 'Gym', 'Parking', 'Back-up Generator'],
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: '4',
    title: 'Panoramic View Land',
    price: 1200000,
    currency: 'LKR',
    location: 'Kandy',
    type: 'Land',
    size: '20',
    unit: 'Perch',
    imageUrl: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop',
    description: 'Breathtaking mountain view land in the hill capital. Ideal for a holiday cottage or eco-resort.',
    features: ['Mountain View', 'Cool Climate', 'Fruit Trees'],
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
