import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Property } from '../types';
import { cn } from '../lib/utils';

interface ViewingModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewingModal({ property, isOpen, onClose }: ViewingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Viewing Scheduled:', { propertyTitle: property.title, ...formData });
    setIsSubmitted(true);
    
    // Reset after some time and close
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden"
          >
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-brand-dark"
              >
                <X size={24} />
              </button>
            </div>

            {!isSubmitted ? (
              <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                <div className="mb-8 space-y-2">
                  <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Schedule a Visit</span>
                  <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
                    Viewing for <span className="text-brand-blue">{property.title}</span>
                  </h2>
                  <p className="text-slate-500 text-sm">Select your preferred date and time. Our agent will confirm shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Full Name</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center focus-within:ring-2 focus-within:ring-brand-green/20 transition-all">
                        <User size={16} className="text-slate-400 mr-2" />
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name" 
                          className="bg-transparent outline-none text-sm w-full font-bold"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Phone Number</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center focus-within:ring-2 focus-within:ring-brand-green/20 transition-all">
                        <Phone size={16} className="text-slate-400 mr-2" />
                        <input 
                          required
                          type="tel" 
                          placeholder="+94 7X XXX XXXX" 
                          className="bg-transparent outline-none text-sm w-full font-bold"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email Address</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center focus-within:ring-2 focus-within:ring-brand-green/20 transition-all">
                      <Mail size={16} className="text-slate-400 mr-2" />
                      <input 
                        required
                        type="email" 
                        placeholder="you@example.com" 
                        className="bg-transparent outline-none text-sm w-full font-bold"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Preferred Date</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center focus-within:ring-2 focus-within:ring-brand-green/20 transition-all">
                        <Calendar size={16} className="text-slate-400 mr-2" />
                        <input 
                          required
                          type="date" 
                          className="bg-transparent outline-none text-sm w-full font-bold"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Preferred Time</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center focus-within:ring-2 focus-within:ring-brand-green/20 transition-all">
                        <Clock size={16} className="text-slate-400 mr-2" />
                        <input 
                          required
                          type="time" 
                          className="bg-transparent outline-none text-sm w-full font-bold"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-dark text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-brand-dark/20 hover:bg-brand-green hover:shadow-brand-green/20 transition-all flex items-center justify-center space-x-2 group"
                  >
                    <span>Request Viewing</span>
                    <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 md:p-16 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-serif font-bold text-slate-900">Request Received!</h2>
                  <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-brand-dark">{formData.name}</span>. 
                    We've received your viewing request for <span className="text-brand-blue font-bold">{property.title}</span>. 
                    An agent will contact you at <span className="font-bold">{formData.phone}</span> to confirm.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-slate-100 text-slate-600 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
