import React from 'react';
import { MapPin, Maximize, BedDouble, Bath, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-dark/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-brand-dark px-4 py-2 rounded-lg text-lg font-bold shadow-sm">
            {formattedPrice}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-slate-500 text-sm mb-2">
          <MapPin size={14} className="mr-1 text-brand-red" />
          {property.location}
        </div>
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-brand-green transition-colors">
          {property.title}
        </h3>

        {/* Stats */}
        <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-6">
          <div className="flex items-center space-x-2">
            <Maximize size={18} className="text-slate-400" />
            <span className="text-sm font-medium text-slate-700">
              {property.size} {property.unit}
            </span>
          </div>
          {property.bedrooms && (
            <div className="flex items-center space-x-2">
              <BedDouble size={18} className="text-slate-400" />
              <span className="text-sm font-medium text-slate-700">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center space-x-2">
              <Bath size={18} className="text-slate-400" />
              <span className="text-sm font-medium text-slate-700">{property.bathrooms} Baths</span>
            </div>
          )}
        </div>

        <button className="w-full flex items-center justify-center space-x-2 bg-brand-green text-white py-3 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest shadow-lg shadow-brand-green/20 hover:bg-brand-dark hover:shadow-brand-dark/20 group/btn">
          <span>More Details</span>
          <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
