export interface Property {
  id: string;
  refNo?: string;
  title: string;
  price: number;
  pricePerUnit?: string;
  currency: string;
  location: string;
  city: string;
  district: string;
  type: 'Land' | 'House' | 'Apartment' | 'Commercial';
  size: string;
  unit: 'Perch' | 'Acres' | 'Sqft';
  imageUrl: string;
  gallery?: string[];
  description: string;
  descriptionSinhala?: string;
  features: string[];
  locationHighlights?: string[];
  propertyHighlights?: string[];
  bedrooms?: number;
  bathrooms?: number;
  views?: number;
  status: 'Available' | 'Sold' | 'Reserved';
  seller?: {
    name: string;
    type: 'Personal' | 'Agent' | 'Developer';
    phone: string;
  };
  coordinates?: { lat: number; lng: number };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
