import React, { useState, useEffect } from 'react';
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
  Gavel,
  DollarSign,
  Percent,
  Calendar,
  Wallet
} from 'lucide-react';

export default function Services() {
  const [loanAmount, setLoanAmount] = useState<number>(10000000);
  const [interestRate, setInterestRate] = useState<number>(12);
  const [loanTerm, setLoanTerm] = useState<number>(15);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    const p = loanAmount;
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    
    if (r === 0) {
      setMonthlyPayment(p / n);
    } else {
      const payment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const formattedPayment = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    maximumFractionDigits: 0,
  }).format(monthlyPayment);

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

      {/* Mortgage Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Input Form */}
            <div className="p-12 md:p-16 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
                  <Calculator className="text-brand-green" />
                  Mortgage Calculator
                </h2>
                <p className="text-slate-500">
                  Estimate your monthly installments quickly. Enter your details below to see how much your property could cost per month.
                </p>
              </div>

              <div className="space-y-6">
                {/* Loan Amount */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <Wallet size={14} className="text-brand-green" />
                    Loan Amount (LKR)
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all font-bold text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Interest Rate */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                      <Percent size={14} className="text-brand-orange" />
                      Interest Rate (%)
                    </label>
                    <input 
                      type="number" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all font-bold text-lg"
                    />
                  </div>

                  {/* Loan Term */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                      <Calendar size={14} className="text-brand-blue" />
                      Term (Years)
                    </label>
                    <input 
                      type="number" 
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all font-bold text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Result Display */}
            <div className="bg-slate-900 p-12 md:p-16 flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -ml-32 -mb-32" />
              
              <div className="space-y-2 relative z-10">
                <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Estimated Monthly Payment</span>
                <div className="text-5xl md:text-6xl font-serif font-black text-white">
                  {formattedPayment}
                </div>
              </div>

              <div className="w-full max-w-sm space-y-4 relative z-10 pt-8 border-t border-white/10">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Principal Amount</span>
                  <span className="text-white font-medium">LKR {loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Annual Interest Rate</span>
                  <span className="text-white font-medium">{interestRate}%</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Total Duration</span>
                  <span className="text-white font-medium">{loanTerm} Years</span>
                </div>
              </div>

              <p className="text-slate-500 text-xs italic max-w-sm relative z-10">
                * This is a simplified estimate. Actual rates and terms may vary based on financial institutions and individual credit profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

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
