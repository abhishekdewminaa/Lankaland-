import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
               <span className="font-serif font-bold text-white text-2xl">Lanka<span className="text-brand-red">Land</span>.lk</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Sri Lanka's most trusted real estate partner. Providing fast, accurate, and transparent services for buying and selling property across the island.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-green transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-green transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-green transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/properties" className="hover:text-white transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> All Properties</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Professional Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> About LankaLand</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Property Valuation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Land Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agent Registration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold mb-2 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-green mt-1 shrink-0" size={18} />
                <span>123 Colombo Road, Kotte, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-green shrink-0" size={18} />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-green shrink-0" size={18} />
                <span>info@lankaland.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500">
          <p>© {currentYear} LankaLand.lk. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
