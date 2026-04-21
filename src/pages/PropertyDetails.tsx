import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Maximize, 
  BedDouble, 
  Bath, 
  Eye, 
  Clock, 
  Share2, 
  Heart, 
  Phone, 
  MessageCircle, 
  Info,
  Calendar,
  ChevronRight,
  Facebook,
  Twitter,
  Mail,
  Globe,
  Calculator
} from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURED_PROPERTIES, CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';
import PropertyCard from '../components/PropertyCard';
import ViewingModal from '../components/ViewingModal';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const property = FEATURED_PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Property Not Found</h2>
          <p className="text-slate-500">The property you are looking for does not exist or has been removed.</p>
          <Link to="/properties" className="inline-block bg-brand-green text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hi LankaLand, I'm interested in the "${property.title}" (Ref: ${property.refNo}). Can I get more details?`)}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 pt-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/properties" className="hover:text-brand-green transition-colors">Properties</Link>
          <ChevronRight size={10} />
          <Link to={`/properties?type=${property.type}`} className="hover:text-brand-green transition-colors">{property.type}</Link>
          <ChevronRight size={10} />
          <span className="text-brand-dark italic truncate max-w-[200px]">{property.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Header / Title Section */}
            <div className="bg-brand-orange text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-full bg-black/5 -skew-x-12 translate-x-32" />
               <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl font-serif font-black leading-tight">
                      {property.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-white/80">
                      <span className="flex items-center"><MapPin size={14} className="mr-1" /> {property.location}</span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-right shrink-0">
                    <span className="block text-[10px] font-black uppercase tracking-tighter opacity-70 leading-none">Ref No</span>
                    <span className="text-xl font-black tabular-nums">{property.refNo}</span>
                  </div>
               </div>
            </div>

            {/* Price Banner */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="space-y-1 text-center md:text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Asking Price</span>
                  <div className="text-4xl font-serif font-black text-brand-dark">{formattedPrice}</div>
                  {property.pricePerUnit && <div className="text-sm font-bold text-brand-red italic">{property.pricePerUnit}</div>}
               </div>
               <div className="flex items-center gap-4">
                  <button onClick={() => setIsModalOpen(true)} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-brand-dark/20 flex items-center gap-2">
                    <Calendar size={14} />
                    Schedule Viewing
                  </button>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20">
                    <MessageCircle size={24} />
                  </a>
               </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-slate-200 pb-4">
                <h2 className="text-xl font-serif font-black text-slate-900 uppercase tracking-tighter">Property Description</h2>
                <div className="flex-grow h-0.5 bg-slate-100" />
              </div>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-8">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed text-lg italic">
                    {property.description}
                  </p>
                </div>
                {property.descriptionSinhala && (
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-orange">
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {property.descriptionSinhala}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Property Overview Grid */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-slate-200 pb-4">
                <h2 className="text-xl font-serif font-black text-slate-900 uppercase tracking-tighter">Property Overview</h2>
                <div className="flex-grow h-0.5 bg-slate-100" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                {[
                  { label: 'City', value: property.city },
                  { label: 'District', value: property.district },
                  { label: 'Land Area', value: `${property.size} ${property.unit}` },
                  { label: 'Price', value: formattedPrice },
                  { label: 'Views', value: property.views, icon: <Eye size={14} /> },
                  { label: 'Property Status', value: property.status, highlight: true },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                    <div className="flex items-center space-x-2">
                       {item.icon}
                       <span className={cn(
                         "font-bold text-slate-900",
                         item.highlight && "text-brand-green"
                       )}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            {(property.locationHighlights || property.propertyHighlights) && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 border-b border-slate-200 pb-4">
                  <h2 className="text-xl font-serif font-black text-slate-900 uppercase tracking-tighter">Additional Information</h2>
                  <div className="flex-grow h-0.5 bg-slate-100" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {property.locationHighlights && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-brand-green uppercase text-xs tracking-widest flex items-center">
                        <MapPin size={14} className="mr-2" /> Location Highlights
                      </h3>
                      <ul className="space-y-3">
                        {property.locationHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600 font-medium italic">
                            <span className="mr-2 text-brand-orange">~</span> {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {property.propertyHighlights && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-brand-blue uppercase text-xs tracking-widest flex items-center">
                        <Info size={14} className="mr-2" /> Property Highlights
                      </h3>
                      <ul className="space-y-3">
                        {property.propertyHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600 font-medium italic">
                            <span className="mr-2 text-brand-green">~</span> {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact Seller Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-slate-200 pb-4">
                <h2 className="text-xl font-serif font-black text-slate-900 uppercase tracking-tighter">Contact Details</h2>
                <div className="flex-grow h-0.5 bg-slate-100" />
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center font-bold text-2xl uppercase">
                        {property.seller?.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Seller Name</h4>
                        <p className="text-xl font-bold text-brand-dark">{property.seller?.name || 'LankaLand Agent'}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Seller Type</h4>
                          <p className="font-bold">{property.seller?.type || 'Professional Agent'}</p>
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile</h4>
                          <p className="font-bold text-brand-red">{property.seller?.phone || CONTACT_INFO.phone}</p>
                       </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                       <button onClick={() => navigate('/contact', { state: { property } })} className="flex-grow bg-brand-blue text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2">
                          <Mail size={14} /> Inquire Now
                       </button>
                    </div>
                    <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-4">
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Share:</span>
                       <button className="p-2 text-brand-dark hover:text-brand-blue transition-colors"><Facebook size={18} /></button>
                       <button className="p-2 text-brand-dark hover:text-brand-blue transition-colors"><Twitter size={18} /></button>
                       <button className="p-2 text-brand-dark hover:text-brand-blue transition-colors"><Mail size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-slate-200 pb-4">
                <h2 className="text-xl font-serif font-black text-slate-900 uppercase tracking-tighter">Image Gallery</h2>
                <div className="flex-grow h-0.5 bg-slate-100" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(property.gallery || [property.imageUrl]).map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="aspect-video rounded-xl overflow-hidden cursor-pointer shadow-sm"
                  >
                    <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (Right Column) */}
          <aside className="space-y-8">
            
            {/* Currency Converter */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
               <div className="bg-brand-blue p-4 text-white">
                  <h3 className="font-black uppercase text-xs tracking-widest text-center">Currency Converter</h3>
               </div>
               <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Amount</label>
                    <input type="number" defaultValue="1" className="w-full bg-slate-50 border border-slate-100 p-3 rounded-xl font-bold text-center outline-none focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">From</label>
                    <select className="w-full bg-slate-50 border border-slate-100 p-3 rounded-xl font-bold text-sm outline-none">
                      <option>American Dollar</option>
                      <option>Euro</option>
                      <option>British Pound</option>
                    </select>
                  </div>
                  <div className="space-y-2 text-center py-4 bg-brand-blue/5 rounded-2xl">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Result</span>
                    <div className="text-2xl font-black text-brand-blue">321.40 LKR</div>
                  </div>
                  <button className="w-full bg-brand-dark text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    <Globe size={14} /> Update Rates
                  </button>
               </div>
            </div>

            {/* Mortgage Calculator Shortcut */}
            <Link to="/calculator" className="block bg-brand-dark rounded-3xl p-8 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
               <Calculator className="text-brand-green mb-6" size={40} />
               <h3 className="text-2xl font-serif font-black leading-tight mb-2">Plan Your <br/><span className="text-brand-green italic">Budget</span></h3>
               <p className="text-sm text-slate-400 font-bold mb-6 italic">Estimate your monthly installments with our professional tool.</p>
               <span className="inline-flex items-center text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                 Go to Calculator <ChevronRight size={14} className="ml-2" />
               </span>
            </Link>

            {/* Professional Directory Links */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
               <div className="bg-brand-red p-4 text-white">
                  <h3 className="font-black uppercase text-xs tracking-widest text-center">Professional Directory</h3>
               </div>
               <div className="divide-y divide-slate-100">
                  {[
                    "Architectural Firms", "Building Contractors", "Civil Engineers", "Electrical Appliances", "Financing Partners"
                  ].map((item, i) => (
                    <Link key={i} to="/services" className="flex items-center justify-between p-4 px-6 group hover:bg-slate-50 transition-colors">
                      <span className="text-[11px] font-black uppercase text-slate-600 group-hover:text-brand-red transition-colors tracking-tight">{item}</span>
                      <ChevronRight size={12} className="text-slate-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
               </div>
               <div className="p-4 bg-slate-50 text-center">
                  <Link to="/services" className="bg-brand-green text-white px-6 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-brand-green/90 transition-all inline-block">
                    View Full Directory
                  </Link>
               </div>
            </div>

            {/* Support / Quick Inquiry */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                <div className="space-y-1">
                   <h3 className="text-brand-dark font-black uppercase text-xs tracking-widest border-b border-slate-100 pb-3">Quick Support</h3>
                   <p className="text-sm text-slate-500 italic font-bold">Have questions? Reach out to us directly.</p>
                </div>
                <div className="space-y-4">
                   <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 group hover:bg-brand-green hover:text-white transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green group-hover:rotate-12 transition-all">
                        <Phone size={20} />
                      </div>
                      <span className="font-bold tabular-nums tracking-tighter">{CONTACT_INFO.phone}</span>
                   </a>
                   <a href={whatsappUrl} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 group hover:bg-[#25D366] hover:text-white transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#25D366] group-hover:rotate-12 transition-all">
                        <MessageCircle size={20} />
                      </div>
                      <span className="font-bold italic">Official WhatsApp</span>
                   </a>
                </div>
            </div>

          </aside>
        </div>

        {/* Similar Properties Section */}
        <section className="mt-24 space-y-12">
           <div className="flex items-center space-x-4 border-b border-slate-200 pb-6">
              <h2 className="text-3xl font-serif font-black text-slate-900 uppercase tracking-tighter">Similar <span className="text-brand-blue italic">Properties</span></h2>
              <div className="flex-grow h-1 bg-slate-100 rounded-full" />
              <Link to="/properties" className="text-xs font-black uppercase tracking-widest text-brand-green hover:underline">View All</Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {FEATURED_PROPERTIES.filter(p => p.id !== id).slice(0, 4).map((prop, i) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <PropertyCard property={prop} />
                </motion.div>
             ))}
           </div>
        </section>

      </div>

      <ViewingModal 
        property={property} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
