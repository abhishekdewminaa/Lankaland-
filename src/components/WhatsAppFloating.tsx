import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export default function WhatsAppFloating() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi LankaLand, I have an inquiry about properties.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Background Ripple Effect (Sonar) */}
      <span className="absolute inline-flex h-20 w-20 rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#25D366] opacity-40 animate-pulse"></span>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -5, 0], // Gentle float
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: { duration: 0.3 },
          opacity: { duration: 0.3 }
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0], // Subtle wiggle on hover
        }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors border-2 border-white/20"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
        {/* Notification Dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-sm"></span>
        </span>
      </motion.a>
    </div>
  );
}
