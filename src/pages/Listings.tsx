import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURED_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

export default function Listings() {
  const [filter, setFilter] = useState('All');
  
  const filteredProperties = filter === 'All' 
    ? FEATURED_PROPERTIES 
    : FEATURED_PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-6 text-center">Available Properties</h1>
          <p className="text-slate-300 text-center max-w-2xl mx-auto text-lg mb-12">
            Discover a wide range of hand-picked properties across Sri Lanka. From prime lands to luxury apartments, find your perfect match.
          </p>

          {/* Large Search Area */}
          <div className="bg-white p-4 rounded-3xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-grow flex items-center bg-slate-50 rounded-2xl px-4 py-3 w-full">
              <Search className="text-slate-400 mr-3" size={20} />
              <input type="text" placeholder="Search by city, type or keyword..." className="bg-transparent outline-none w-full text-slate-800" />
            </div>
            <button className="bg-brand-green text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-green/90 transition-all w-full md:w-auto justify-center">
              <Filter size={20} />
              <span>Apply Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-fit">
            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                <SlidersHorizontal size={18} className="mr-2 text-brand-green" />
                Category
              </h3>
              <div className="space-y-3">
                {['All', 'Land', 'House', 'Apartment', 'Commercial'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      filter === cat 
                        ? 'bg-brand-green text-white shadow-md' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6">Price Range</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Min" className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm outline-none ring-1 ring-slate-200 focus:ring-brand-green" />
                <input type="text" placeholder="Max" className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm outline-none ring-1 ring-slate-200 focus:ring-brand-green" />
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6">Location</h3>
              <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm outline-none ring-1 ring-slate-200 focus:ring-brand-green appearance-none">
                <option>All Districts</option>
                <option>Colombo</option>
                <option>Galle</option>
                <option>Kandy</option>
                <option>Negombo</option>
              </select>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-500 font-medium">Showing <span className="text-slate-900 font-bold">{filteredProperties.length}</span> results</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-400">Sort by:</span>
                <select className="bg-transparent border-none text-sm font-bold text-brand-dark focus:ring-0 cursor-pointer outline-none">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center space-x-2">
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 hover:border-brand-green hover:text-brand-green transition-all">{"<"}</button>
              <button className="w-10 h-10 rounded-xl bg-brand-green text-white flex items-center justify-center font-bold shadow-lg shadow-brand-green/20">1</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 hover:border-brand-green hover:text-brand-green transition-all">2</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 hover:border-brand-green hover:text-brand-green transition-all">{">"}</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
