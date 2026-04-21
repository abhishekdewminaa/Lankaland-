import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Landmark, Wallet, Percent, Calendar, RefreshCcw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState<number>(25000000);
  const [downPayment, setDownPayment] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(12);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    calculateMortgage();
  }, [propertyPrice, downPayment, interestRate, loanTerm]);

  const calculateMortgage = () => {
    const principal = propertyPrice - downPayment;
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
      return;
    }

    const x = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    setMonthlyPayment(monthly);
  };

  const formatLKR = (val: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h1 className="font-proxima text-5xl text-white font-black uppercase tracking-tighter">Mortgage Calculator</h1>
            <p className="text-xl text-brand-green font-medium">Plan your future home with confidence.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-10 border border-slate-100 space-y-8"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="flex items-center text-sm font-bold text-slate-700 ml-1">
                  <Landmark size={16} className="mr-2 text-brand-blue" />
                  Property Price (LKR)
                </label>
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all text-lg font-bold"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center text-sm font-bold text-slate-700 ml-1">
                  <Wallet size={16} className="mr-2 text-brand-orange" />
                  Down Payment (LKR)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all text-lg font-bold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="flex items-center text-sm font-bold text-slate-700 ml-1">
                    <Percent size={16} className="mr-2 text-brand-red" />
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all text-lg font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="flex items-center text-sm font-bold text-slate-700 ml-1">
                    <Calendar size={16} className="mr-2 text-brand-green" />
                    Loan Term (Years)
                  </label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all text-lg font-bold"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setPropertyPrice(25000000);
                setDownPayment(5000000);
                setInterestRate(12);
                setLoanTerm(20);
              }}
              className="flex items-center justify-center space-x-2 text-slate-400 hover:text-brand-blue transition-colors w-full text-xs font-bold uppercase tracking-widest"
            >
              <RefreshCcw size={14} />
              <span>Reset Calculator</span>
            </button>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-brand-dark rounded-[2.5rem] shadow-2xl p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 space-y-6 text-center lg:text-left">
                <div className="space-y-1">
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Monthly Installment</p>
                  <h2 className="text-4xl sm:text-5xl font-black font-proxima text-brand-green tabular-nums">
                    {formatLKR(monthlyPayment)}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Principal Amount</p>
                    <p className="text-sm font-bold">{formatLKR(propertyPrice - downPayment)}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Total Interest</p>
                    <p className="text-sm font-bold">{formatLKR((monthlyPayment * loanTerm * 12) - (propertyPrice - downPayment))}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Total Repayment</p>
                  <p className="text-xl font-bold text-white">{formatLKR(monthlyPayment * loanTerm * 12)}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 space-y-4 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                  <Calculator size={20} />
                </div>
                <h3 className="font-bold text-slate-900">How we calculate?</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                This estimate is based on the standard mortgage formula. Actual bank rates and terms may vary based on your credit score and legal requirements in Sri Lanka.
              </p>
              <div className="pt-2">
                <button className="text-brand-blue text-xs font-bold uppercase tracking-widest hover:underline">
                  View Detailed Breakdown →
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-orange/10 rounded-3xl p-8 border border-brand-orange/20 flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">Need a property?</h4>
                <p className="text-xs text-slate-500">Explore listings within your budget.</p>
              </div>
              <button className="bg-brand-orange text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors shadow-lg shadow-brand-orange/20">
                Browse
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
