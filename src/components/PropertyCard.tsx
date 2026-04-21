import React, { useState } from 'react';
import { MapPin, Maximize, BedDouble, Bath, ArrowRight, TableProperties, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useComparison } from '../context/ComparisonContext';
import { CONTACT_INFO } from '../constants';
import ViewingModal from './ViewingModal';

interface PropertyCardProps {
  property: Property;
  className?: string;
  distance?: number;
}

export default function PropertyCard({ property, className, distance }: PropertyCardProps) {
  const { isComparing, addToComparison, removeFromComparison } = useComparison();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const comparing = isComparing(property.id);

  const formattedPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  const toggleComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (comparing) {
      removeFromComparison(property.id);
    } else {
      addToComparison(property);
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hi LankaLand, I'm interested in the "${property.title}" in ${property.location}. Can I get more details?`)}`;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full",
        className
      )}
    >
      {/* ... previous image code ... */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-brand-dark/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit">
            {property.type}
          </span>
        </div>

        {/* Compare Toggle */}
        <button 
          onClick={toggleComparison}
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all shadow-lg",
            comparing 
              ? "bg-brand-green text-white" 
              : "bg-white/80 text-brand-dark hover:bg-white"
          )}
          title={comparing ? "Remove from comparison" : "Add to comparison"}
        >
          <TableProperties size={18} />
        </button>

        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-brand-dark px-4 py-2 rounded-lg text-lg font-bold shadow-sm">
            {formattedPrice}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-slate-500 text-sm mb-2">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1 text-brand-red" />
            {property.location}
          </div>
          {distance !== undefined && distance !== Infinity && (
            <span className="text-[10px] font-black uppercase text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
              {distance < 1 ? '< 1 km' : `${distance.toFixed(1)} km`}
            </span>
          )}
        </div>
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-brand-green transition-colors">
          {property.title}
        </h3>

        <div className="mt-auto">
          {/* Stats - Visually Enhanced */}
          <div className="grid grid-cols-3 gap-0 border-y border-slate-100 mb-6 -mx-6 bg-slate-50/50">
            <div className="flex flex-col items-center justify-center p-3 border-r border-slate-100">
              <Maximize size={16} className="text-brand-green mb-1" />
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Size</span>
              <span className="text-xs font-bold text-slate-900 leading-none">
                {property.size} {property.unit}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 border-r border-slate-100">
              <BedDouble size={16} className="text-brand-red mb-1" />
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Beds</span>
              <span className="text-xs font-bold text-slate-900 leading-none">{property.bedrooms || '-'}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <Bath size={16} className="text-brand-blue mb-1" />
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Baths</span>
              <span className="text-xs font-bold text-slate-900 leading-none">{property.bathrooms || '-'}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 flex items-center justify-center space-x-2 bg-slate-900 text-white py-3 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 group/view"
            >
              <Calendar size={14} />
              <span>Schedule Viewing</span>
            </button>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white p-3 rounded-xl transition-all shadow-lg shadow-[#25D366]/20 hover:bg-[#20ba5a] hover:shadow-[#20ba5a]/20 group/wa"
              title="Chat on WhatsApp"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
                className="group-hover/wa:scale-110 transition-transform"
              >
                <MessageCircle size={18} />
              </motion.div>
            </a>
          </div>
          <Link 
            to={`/properties/${property.id}`}
            className="w-full flex items-center justify-center space-x-2 bg-brand-green text-white py-3 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest shadow-lg shadow-brand-green/20 hover:bg-brand-dark hover:shadow-brand-dark/20 mt-2 group/btn"
          >
            <span>More Details</span>
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
      <ViewingModal 
        property={property} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  );
}
