import React, { useState } from 'react';
import { useComparison } from '../context/ComparisonContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, TableProperties, ArrowRight, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PropertyComparison() {
  const { selectedProperties, removeFromComparison, clearComparison } = useComparison();
  const [isOpen, setIsOpen] = useState(false);

  if (selectedProperties.length === 0) return null;

  return (
    <>
      {/* Floating Comparison Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
      >
        <div className="bg-brand-dark/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <div className="bg-brand-green p-2 rounded-xl">
              <TableProperties size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">{selectedProperties.length} Properties Selected</p>
              <p className="text-white/60 text-xs">Compare side-by-side</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
            >
              Compare Now
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={clearComparison}
              className="p-2 hover:bg-white/10 rounded-xl text-white/60 hover:text-white transition-all"
              title="Clear all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Comparison Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-slate-900">Property Comparison</h2>
                  <p className="text-slate-500">Comparing your selected properties side-by-side</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  <X size={24} className="text-slate-900" />
                </button>
              </div>

              <div className="flex-grow overflow-auto p-8">
                <div className="min-w-[800px]">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-4 text-left font-bold text-slate-400 uppercase tracking-widest text-xs border-b border-slate-100 w-1/5">Feature</th>
                        {selectedProperties.map(property => (
                          <th key={property.id} className="p-4 border-b border-slate-100 w-1/5">
                            <div className="space-y-4">
                              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={() => removeFromComparison(property.id)}
                                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg hover:bg-red-600 transition-all"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                              <p className="font-serif font-bold text-slate-900 text-sm line-clamp-2 leading-tight">{property.title}</p>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <ComparisonRow label="Price" properties={selectedProperties} field="price" format="price" />
                      <ComparisonRow label="Type" properties={selectedProperties} field="type" />
                      <ComparisonRow label="Location" properties={selectedProperties} field="location" />
                      <ComparisonRow label="Size" properties={selectedProperties} field="size" format="size" />
                      <ComparisonRow label="Bedrooms" properties={selectedProperties} field="bedrooms" />
                      <ComparisonRow label="Bathrooms" properties={selectedProperties} field="bathrooms" />
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ComparisonRow({ label, properties, field, format }: { label: string, properties: any[], field: string, format?: string }) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="p-4 font-bold text-slate-900 border-b border-slate-100 bg-slate-50/30">{label}</td>
      {properties.map(p => (
        <td key={p.id} className="p-4 border-b border-slate-100 text-slate-600 font-medium">
          {format === 'price' ? (
            <span className="text-brand-green font-bold">
              {new Intl.NumberFormat('en-LK', { style: 'currency', currency: p.currency, maximumFractionDigits: 0 }).format(p.price)}
            </span>
          ) : format === 'size' ? (
            `${p.size} ${p.unit}`
          ) : (
            p[field] || 'N/A'
          )}
        </td>
      ))}
    </tr>
  );
}
