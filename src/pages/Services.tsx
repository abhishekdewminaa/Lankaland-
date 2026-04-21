import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Map, 
  FileCheck, 
  Search, 
  Scale, 
  UserCheck, 
  LayoutDashboard,
  Calculator,
  Gavel
} from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: <Map className="text-brand-orange" size={32} />,
      title: "Property Selection",
      desc: "Our expert agents help you scout and select prime residential, commercial, or agricultural land across the island."
    },
    {
      icon: <FileCheck className="text-brand-green" size={32} />,
      title: "Legal Documentation",
      desc: "Comprehensive title search and legal verification services to ensure and secure your property ownership."
    },
    {
      icon: <Calculator className="text-brand-blue" size={32} />,
      title: "Valuation Services",
      desc: "Accurate property valuation based on current market trends and infrastructure developments in the region."
    },
    {
      icon: <Building2 className="text-brand-red" size={32} />,
      title: "Project Development",
      desc: "End-to-end support for developing your land into residential schemes or commercial complexes."
    },
    {
      icon: <Gavel className="text-brand-dark" size={32} />,
      title: "Legal Consultancy",
      desc: "Expert advice on Sri Lankan property laws, inheritance, and regulatory compliance for local and foreign buyers."
    },
    {
      icon: <LayoutDashboard className="text-brand-orange" size={32} />,
      title: "Marketing & Strategy",
      desc: "Strategic marketing plans for developers to sell their property projects to the right target audience."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
       {/* Hero Section */}
       <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Real Estate Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold">Our Services</h1>
            <p className="text-xl text-slate-300 font-medium mt-4 max-w-2xl mx-auto italic">
              "Providing Fast, Accurate & Best Price Solutions for All Your Real Estate Needs."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-300 text-center space-y-6"
            >
              <div className="mx-auto w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold max-w-3xl mx-auto">
              Need a Custom Real Estate Solution?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Whether you are a buyer, seller, or developer, our team is equipped to handle your unique requirements with precision and speed.
            </p>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-block bg-white text-brand-green px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-xl shadow-black/10"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
