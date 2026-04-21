import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
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
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold">Get In Touch</h1>
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
              detail="+94 11 234 5678"
              sub="Mon-Sat: 8am - 6pm"
            />
            <ContactDetailCard
              icon={<Mail className="text-brand-orange" />}
              title="Email Us"
              detail="info@lankaland.lk"
              sub="Online 24/7"
            />
            <ContactDetailCard
              icon={<MapPin className="text-brand-red" />}
              title="Visit Headquarters"
              detail="123 Colombo Road, Kotte"
              sub="Sri Lanka"
            />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Send an Inquiry</h2>
              <p className="text-slate-500">Our property experts will get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+94 7X XXX XXXX"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Property Type</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none text-slate-500">
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
                  rows={5}
                  placeholder="Tell us about the property you are looking for..."
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-slate-300"
                />
              </div>

              <button className="flex items-center justify-center space-x-3 bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all w-full shadow-lg shadow-slate-900/10 group">
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

function ContactDetailCard({ icon, title, detail, sub }: { icon: React.ReactNode, title: string, detail: string, sub: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6"
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-xl font-serif font-bold text-slate-800">{detail}</p>
        <p className="text-sm text-slate-400">{sub}</p>
      </div>
    </motion.div>
  );
}
