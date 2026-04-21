export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  type: 'Land' | 'House' | 'Apartment' | 'Commercial';
  size: string;
  unit: 'Perch' | 'Acres' | 'Sqft';
  imageUrl: string;
  description: string;
  features: string[];
  bedrooms?: number;
  bathrooms?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
