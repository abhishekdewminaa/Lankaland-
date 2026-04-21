import React from 'react';
import { 
  Search, 
  MapPin, 
  Building, 
  Building2, 
  LandPlot, 
  ShieldCheck, 
  Zap, 
  PhilippinePeso, 
  Clock, 
  Award, 
  Home as HomeIcon, 
  Briefcase,
  Globe,
  Calculator
} from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURED_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-brand-dark pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
            alt="Sri Lanka Real Estate"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-12">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
             >
                Sri Lanka <span className="text-brand-orange">Property</span> <span className="text-brand-green">Search</span>
             </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Ref No</label>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center">
                  <Search size={16} className="text-slate-400 mr-2" />
                  <input type="text" placeholder="ID Number..." className="bg-transparent outline-none text-sm w-full font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Category</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold appearance-none outline-none focus:ring-2 focus:ring-brand-green">
                  <option>Any Category</option>
                  <option>Land</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Location</label>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center">
                  <MapPin size={16} className="text-slate-400 mr-2" />
                  <input type="text" placeholder="City or District..." className="bg-transparent outline-none text-sm w-full font-bold" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-8">
               <div className="flex items-center space-x-6">
                 <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="purpose" className="w-5 h-5 accent-brand-green" defaultChecked />
                    <span className="text-sm font-black text-slate-700 uppercase group-hover:text-brand-green transition-colors">For Sale</span>
                 </label>
                 <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="purpose" className="w-5 h-5 accent-brand-green" />
                    <span className="text-sm font-black text-slate-700 uppercase group-hover:text-brand-green transition-colors">Rent / Lease</span>
                 </label>
               </div>
               
               <div className="flex items-center space-x-4 w-full md:w-auto">
                 <button className="flex-1 md:flex-none border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-brand-dark hover:text-white transition-all">
                    Advance Search
                 </button>
                 <button className="flex-1 md:flex-none bg-brand-green text-white px-12 py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-xl shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all">
                    Search Now
                 </button>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {[
             { name: 'Lands', icon: <LandPlot />, img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064' },
             { name: 'House', icon: <HomeIcon />, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070' },
             { name: 'Apartments', icon: <Building />, img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935' },
             { name: 'Buildings', icon: <Building2 />, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070' },
             { name: 'Hotels', icon: <Building />, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070' },
             { name: 'Business', icon: <Briefcase />, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069' }
           ].map((cat, i) => (
             <motion.div 
               key={cat.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               className="group relative h-64 rounded-2xl overflow-hidden border border-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all"
             >
               <img src={cat.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent" />
               <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-black uppercase text-xs tracking-widest mb-4 border-b border-white/20 pb-2">{cat.name}</h3>
                  <div className="grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <button className="bg-brand-blue text-white text-[9px] font-black uppercase py-2 rounded-lg hover:bg-brand-blue/90">For Sale</button>
                    <button className="bg-brand-green text-white text-[9px] font-black uppercase py-2 rounded-lg hover:bg-brand-green/90">Rent</button>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Featured Advertisements Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-slate-900 font-black uppercase text-3xl md:text-5xl tracking-tighter">
           Featured <span className="text-brand-blue italic">Advertisements</span>
         </h2>
         <div className="w-24 h-2 bg-brand-orange mx-auto mt-6 rounded-full" />
      </section>

      {/* Professional Directory Section */}
      <section className="bg-slate-100 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-brand-dark font-black uppercase text-3xl tracking-tighter">
                Professional <span className="text-brand-red italic">Directory</span>
              </h2>
              <p className="text-slate-500 leading-relaxed font-bold italic">
                Connect with Sri Lanka's top real estate professionals, from certified architects to legal consultants.
              </p>
              <button className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-red transition-all">
                Access Full Directory
              </button>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Air Conditioning Experts", "Aluminum Fabricators", "Architectural Firms", "Bamboo Products",
                "Bathware & Sanitaryware", "Building Contractors", "Building Material Providers", "Carpenters",
                "Civil Engineers", "Construction Consultants", "Electrical Appliances", "Financing Partners"
              ].map((item, i) => (
                <Link 
                  key={item}
                  to="/directory"
                  className="flex items-center group space-x-3 py-3 border-b border-slate-200 hover:border-brand-green transition-all"
                >
                  <div className="w-5 h-5 bg-brand-blue/10 rounded flex items-center justify-center group-hover:bg-brand-green group-hover:rotate-12 transition-all">
                    <Zap size={8} className="text-brand-blue group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-600 group-hover:text-brand-green transition-colors tracking-tight">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-brand-dark font-semibold uppercase tracking-[0.2em] text-sm">Our Portfolio</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">Featured Properties</h3>
          </div>
          <Link to="/properties" className="group flex items-center text-brand-green font-bold text-lg">
            View All Properties
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.slice(0, 3).map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-brand-dark py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 blur-3xl rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-brand-orange font-semibold uppercase tracking-[0.2em] text-sm italic">The LankaLand Advantage</h2>
            <h3 className="font-serif text-4xl md:text-6xl font-bold">Why Choose Sri Lanka's Best Real Estate Service?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Clock size={32} className="text-brand-orange" />, title: "Fast Delivery", desc: "Our streamlined process ensures you get your property deals closed in record time." },
              { icon: <Award size={32} className="text-brand-green" />, title: "Accurate Listings", desc: "Every property is verified by our experts for legal clarity and physical accuracy." },
              { icon: <Zap size={32} className="text-brand-red" />, title: "Best Prices", desc: "We coordinate with local experts to provide you the most competitive market rates." },
              { icon: <ShieldCheck size={32} className="text-brand-blue" />, title: "Legal Safety", desc: "Our in-house legal team ensures all documentation is 100% compliant and secure." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4 group"
              >
                <div className="mx-auto w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-xl">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            img="https://images.unsplash.com/photo-1593508512255-86ab42a8abee?q=80&w=2156&auto=format&fit=crop"
            title="Premium Land Hits"
            label="Investment"
            color="brand-orange"
          />
          <CategoryCard
            img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            title="Luxury Living Houses"
            label="Residential"
            color="brand-green"
          />
          <CategoryCard
            img="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=2071&auto=format&fit=crop"
            title="Modern Urban Apts"
            label="Lifestyle"
            color="brand-blue"
          />
        </div>
      </section>

      {/* Testimonial / Slogan CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-3">
              <div className="bg-brand-dark rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-red opacity-10 blur-[80px]" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-green opacity-10 blur-[80px]" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="relative z-10 max-w-4xl mx-auto"
                >
                  <PhilippinePeso className="text-brand-orange mx-auto mb-6" size={48} />
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
                    "Sri Lanka's No.1 source of updated properties."
                  </h2>
                  <div className="space-y-4">
                    <p className="font-black uppercase text-sm tracking-[0.3em] flex items-center justify-center">
                      <span className="text-brand-green">Lanka</span>
                      <span className="text-brand-red">l</span>
                      <span className="text-brand-orange">and</span>
                      <span className="text-brand-blue">.lk</span>
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                      <Link to="/contact" className="bg-white text-brand-dark px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-100 transition-all w-full md:w-auto">
                        Valuation
                      </Link>
                      <Link to="/properties" className="border border-white/20 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all w-full md:w-auto">
                        Browse
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
           </div>
           
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
                 <h3 className="text-brand-dark font-black uppercase text-xs tracking-widest mb-6 border-b border-slate-100 pb-3">Latest Ads</h3>
                 <div className="space-y-4">
                    {FEATURED_PROPERTIES.slice(0, 3).map((ad, i) => (
                      <Link key={i} to={`/properties/${ad.id}`} className="flex items-center space-x-3 group cursor-pointer">
                         <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                           <img src={ad.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black uppercase text-slate-800 group-hover:text-brand-green transition-colors line-clamp-1">{ad.title}</p>
                            <p className="text-[10px] font-bold text-brand-red">LKR {ad.price.toLocaleString()}</p>
                         </div>
                      </Link>
                    ))}
                 </div>
              </div>

              <div className="bg-brand-blue rounded-[2rem] p-8 text-white relative overflow-hidden group cursor-pointer">
                 <Globe className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-125 transition-transform duration-500" size={100} />
                 <h3 className="font-black uppercase text-xs tracking-widest mb-2">Currency</h3>
                 <p className="text-4xl font-black tabular-nums">321.40</p>
                 <p className="text-[9px] font-bold uppercase opacity-60">LKR / USD • 21 Apr 2026</p>
              </div>

              <Link to="/calculator" className="block bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-brand-green transition-all">
                 <div className="absolute -right-4 -bottom-4 text-slate-100 group-hover:text-brand-green/10 transition-colors duration-500">
                   <Calculator size={100} />
                 </div>
                 <h3 className="text-brand-dark font-black uppercase text-xs tracking-widest mb-3 relative z-10">Mortgage Tool</h3>
                 <p className="text-2xl font-black text-slate-900 leading-tight relative z-10 mb-2">Calculate <span className="text-brand-green">Loans</span></p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Estimate monthly payments instantly →</p>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ img, title, label, color }: { img: string, title: string, label: string, color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className="relative h-96 group rounded-[2.5rem] overflow-hidden cursor-pointer"
    >
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-10 left-10 space-y-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-${color}/80 backdrop-blur-md`}>
          {label}
        </span>
        <h4 className="text-2xl font-bold text-white">{title}</h4>
      </div>
    </motion.div>
  );
}
