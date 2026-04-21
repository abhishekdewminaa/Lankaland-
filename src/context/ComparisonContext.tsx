import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Property } from '../types';

interface ComparisonContextType {
  selectedProperties: Property[];
  addToComparison: (property: Property) => void;
  removeFromComparison: (propertyId: string) => void;
  clearComparison: () => void;
  isComparing: (propertyId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);

  const addToComparison = (property: Property) => {
    if (selectedProperties.length >= 4) {
      alert("You can only compare up to 4 properties at a time.");
      return;
    }
    if (!selectedProperties.find(p => p.id === property.id)) {
      setSelectedProperties(prev => [...prev, property]);
    }
  };

  const removeFromComparison = (propertyId: string) => {
    setSelectedProperties(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearComparison = () => {
    setSelectedProperties([]);
  };

  const isComparing = (propertyId: string) => {
    return selectedProperties.some(p => p.id === propertyId);
  };

  return (
    <ComparisonContext.Provider value={{ 
      selectedProperties, 
      addToComparison, 
      removeFromComparison, 
      clearComparison,
      isComparing
    }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
}
