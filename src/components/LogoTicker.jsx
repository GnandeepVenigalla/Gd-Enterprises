import React from 'react';
import { motion } from 'framer-motion';
import SubLogo from './SubLogo';

const logos = [
  { name: "GD Player", src: "https://gdplayer.gnandeep.com/logo.png" },
  { name: "GD Creations", src: "/old-logos/creatives.png" },
  { name: "GD Publishers", src: "https://lh3.googleusercontent.com/sitesv/APaQ0SRkbCj4_5O8TVhw9LPnL52a6q0ssKfFAb1UX4qsdJgR8MG0e7EnkRm-uqWMUM9NP5TuZpGMVVdwle4-jdTYDPXVSKCJsQJ8DZglKTipoVYzVwvq0XNo21_4NF-rOHUbjwVEHkVeXme-95gKy3JCGWWNT6JtKFm6J33zODkIZuD4yLpYohkJ-REgJtON2JALOs2De1NAxwbAfA_xS1-QspXtJz_GbbuxQUZp=w1280" },
  { name: "GD Photoshop", src: "/old-logos/publishers.png" },
  { name: "Paywise", src: "https://www.paywiseapp.com/logo.png" },
  { name: "GD Websites", src: "/michael-dale.svg" },
];

const LogoTicker = () => {
  // Triple logos for a seamless infinite scroll
  const scrollingLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-32 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mb-20">
         <p className="text-center text-xs font-black uppercase tracking-[0.5em] text-gray-400 opacity-60">
           Powering the Next Generation of Brands
         </p>
      </div>
      
      <div className="flex relative items-center">
        <motion.div 
          className="flex gap-24 items-center whitespace-nowrap px-10"
          animate={{ 
            x: ["0%", "-33.33%"] 
          }}
          transition={{ 
            duration: 80, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {scrollingLogos.map((logo, i) => (
            <div key={i} className="flex items-center gap-10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default flex-shrink-0">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-50/50 rounded-2xl p-4">
                <SubLogo name={logo.name} size={32} className="opacity-80" />
              </div>
              <span className="text-2xl md:text-4xl font-black tracking-tighter text-primary">
                {logo.name.toUpperCase()}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Faders */}
        <div className="absolute top-0 left-0 w-12 md:w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 md:w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LogoTicker;
