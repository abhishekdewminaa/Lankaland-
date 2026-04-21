import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, History, Gem, Map } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
             src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
             alt="About LankaLand"
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold">Reshaping Real Estate</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto italic mt-4">
              "Sri Lanka's Best Real Estate Service - From the Heart of the Island."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm">Our Story</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Expertise, Transparency, Integrity.</h3>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded on the principles of trust and local expertise, LankaLand.lk started with a simple vision: to make real estate transactions in Sri Lanka as seamless and secure as possible.
              </p>
              <p>
                As a homegrown brand, we understand the unique nuances of the Sri Lankan property market. Whether it's navigating complex title deeds or finding prime tea estate lands in the highlands, our team brings decades of collective experience to your service.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { label: "Founded", val: "2010" },
                  { label: "Successful Deals", val: "5000+" },
                  { label: "Partner Agents", val: "150+" },
                  { label: "Verified Lands", val: "12,000+" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-brand-orange pl-4">
                    <div className="text-3xl font-bold text-slate-900">{stat.val}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                alt="Our CEO"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-green/10 blur-3xl rounded-full z-0" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-orange/10 blur-3xl rounded-full z-0" />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm">How We Work</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">Our Core Principles</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <CheckCircle2 className="text-brand-green" size={40} />, title: "Precision", desc: "We use advanced surveying technology and thorough title searches to ensure every listing is accurate." },
              { icon: <Users className="text-brand-blue" size={40} />, title: "Community", desc: "We aren't just selling land; we're helping families settle and businesses thrive across the island." },
              { icon: <Gem className="text-brand-orange" size={40} />, title: "Excellence", desc: "Our award-winning customer service ensures a smooth experience from first inquiry to key handover." }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Reach */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm">Where We Operate</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">Covering All of Sri Lanka</h3>
        </div>
        <div className="relative group">
           <Map size={120} className="mx-auto text-slate-200 group-hover:text-brand-green/20 transition-all duration-700" />
           <p className="text-slate-500 max-w-xl mx-auto mt-8 h-20">
              From the coastal plains of Hambantota to the central hills of Nuwara Eliya, our network spans all 25 districts of the paradise island.
           </p>
        </div>
      </section>
    </div>
  );
}
