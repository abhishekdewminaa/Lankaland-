import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Select Type',
    message: ''
  });

  useEffect(() => {
    // If we arrived with a property in state, pre-fill the message
    if (location.state?.property) {
      const { title, location: propLoc } = location.state.property;
      setFormData(prev => ({
        ...prev,
        message: `Hi, I'm interested in viewing the property: "${title}" located in ${propLoc}. Please let me know when it would be possible to visit.`
      }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi LankaLand, I have an inquiry about properties.')}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="font-proxima text-5xl md:text-7xl text-white font-black uppercase tracking-tighter">Get In Touch</h1>
            <p className="text-xl text-brand-orange font-medium mt-4">Sri Lanka's Best Real Estate Service is just a message away.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            <ContactDetailCard
              icon={<Phone className="text-brand-green" />}
              title="Call Us Anytime"
              detail={CONTACT_INFO.phone}
              sub={CONTACT_INFO.phoneAlt}
            />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block outline-none focus:ring-2 focus:ring-[#25D366] rounded-3xl group/wa">
              <ContactDetailCard
                icon={
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MessageCircle className="text-[#25D366]" />
                  </motion.div>
                }
                title="WhatsApp Chat"
                detail="Quick Response"
                sub="Available 8am - 10pm"
                highlightColor="border-[#25D366] hover:bg-[#25D366]/5"
              />
            </a>
            <a href={CONTACT_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="block outline-none focus:ring-2 focus:ring-black rounded-3xl group/tt">
              <ContactDetailCard
                icon={
                  <div className="text-black group-hover/tt:rotate-12 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </div>
                }
                title="TikTok Account"
                detail="@.lankaland.lk"
                sub="Watch Property Tours"
                highlightColor="border-black hover:bg-black/5"
              />
            </a>
            <ContactDetailCard
              icon={<Mail className="text-brand-orange" />}
              title="Email Us"
              detail={CONTACT_INFO.email}
              sub="Online 24/7"
            />
            <ContactDetailCard
              icon={<MapPin className="text-brand-red" />}
              title="Visit Headquarters"
              detail="Kadawatha Office"
              sub={CONTACT_INFO.address}
            />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-proxima font-black text-slate-900 mb-2 uppercase tracking-tighter">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm">Thank you for your inquiry. One of our property experts will reach out to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-proxima font-black text-slate-900 uppercase tracking-tighter">Send an Inquiry</h2>
              <p className="text-slate-500">Our property experts will get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+94 7X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Property Type</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none text-slate-500"
                  >
                    <option>Select Type</option>
                    <option>Land</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about the property you are looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                />
              </div>

              <button 
                type="submit"
                className="flex items-center justify-center space-x-3 bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all w-full shadow-lg shadow-slate-900/10 group"
              >
                <span>Submit Inquiry</span>
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactDetailCard({ icon, title, detail, sub, highlightColor }: { icon: React.ReactNode, title: string, detail: string, sub: string, highlightColor?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6 h-full transition-colors",
        highlightColor
      )}
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-xl font-proxima font-black text-slate-800 tabular-nums">{detail}</p>
        <p className="text-sm text-slate-400">{sub}</p>
      </div>
    </motion.div>
  );
}
