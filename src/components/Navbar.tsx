import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topNavLinks = [
    { name: 'Property Advertising', href: '/advertising' },
    { name: 'Directory', href: '/directory' },
    { name: 'Articles', href: '/articles' },
    { name: 'Wanted', href: '/wanted' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar header */}
      <div className={cn(
        "bg-brand-dark overflow-hidden transition-all duration-300 border-b border-white/10",
        scrolled ? "h-0" : "h-10"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-end items-center space-x-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center space-x-4">
            <Link to="/register" className="hover:text-brand-orange transition-colors flex items-center">
              <User size={12} className="mr-1" /> Register
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/login" className="hover:text-brand-green transition-colors flex items-center text-white">
              <LogIn size={12} className="mr-1" /> Log In
            </Link>
          </div>
        </div>
      </div>

      <div className={cn(
        'transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white py-5'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area matching original logo's vibe */}
            <Link to="/" className="flex items-center group transition-transform hover:scale-[1.02]">
              <div className="flex flex-col">
                <div className="flex items-center space-x-1 mb-1">
                   <span className="text-[10px] font-black italic text-brand-red uppercase">Fast,</span>
                   <span className="text-[10px] font-black italic text-brand-blue uppercase">Accurate</span>
                   <span className="text-[10px] font-black italic text-brand-green uppercase">&</span>
                   <span className="text-[10px] font-black italic text-brand-orange uppercase">Best</span>
                   <span className="text-[10px] font-black italic text-slate-900 uppercase">Price !</span>
                </div>
                <div className="flex items-baseline space-x-0">
                  <span className="font-sans font-black text-3xl tracking-tighter text-brand-green">Lanka</span>
                  <span className="font-sans font-black text-3xl tracking-tighter text-brand-red">l</span>
                  <span className="font-sans font-black text-3xl tracking-tighter text-brand-orange">and</span>
                  <span className="font-sans font-black text-3xl tracking-tighter text-brand-blue">.lk</span>
                </div>
                <span className="text-[9px] font-bold text-brand-dark uppercase tracking-[0.2em] mt-1 opacity-80">
                   Sri Lanka's Best Real Estate Service
                </span>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="hidden xl:flex items-center space-x-6">
              <div className="flex items-center space-x-5 mr-4 border-r border-slate-200 pr-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'text-xs font-bold uppercase tracking-tight transition-colors hover:text-brand-green py-2',
                      location.pathname === link.href ? 'text-brand-green' : 'text-slate-600'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center space-x-5">
                {topNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-[10px] font-black uppercase text-slate-500 hover:text-brand-dark transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-600 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 xl:hidden bg-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
                <span className="font-black text-2xl text-brand-green">Lanka<span className="text-brand-red">l</span>and</span>
                <button onClick={() => setIsOpen(false)} className="p-2"><X /></button>
              </div>
              <div className="flex-grow overflow-y-auto py-6 px-6 space-y-6">
                 <div className="space-y-4">
                   <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Main Menu</p>
                   {NAV_LINKS.map((link) => (
                     <Link
                       key={link.name}
                       to={link.href}
                       onClick={() => setIsOpen(false)}
                       className="block text-xl font-bold text-slate-800"
                     >
                       {link.name}
                     </Link>
                   ))}
                 </div>
                 <div className="space-y-4 pt-6 border-t border-slate-100">
                   <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Additional Links</p>
                   {topNavLinks.map((link) => (
                     <Link
                       key={link.name}
                       to={link.href}
                       onClick={() => setIsOpen(false)}
                       className="block text-sm font-bold text-slate-500"
                     >
                       {link.name}
                     </Link>
                   ))}
                 </div>
              </div>
              <div className="p-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                <Link to="/register" className="bg-slate-100 text-slate-900 py-4 text-center font-bold rounded-xl">Register</Link>
                <Link to="/login" className="bg-brand-green text-white py-4 text-center font-bold rounded-xl">Login</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
