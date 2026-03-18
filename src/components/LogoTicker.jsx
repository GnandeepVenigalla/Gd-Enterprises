import React from 'react';
import { motion } from 'framer-motion';
import SubLogo from './SubLogo';

const logos = [
  { name: "Paywise", src: "https://www.paywiseapp.com/logo.png" },
  { name: "GD Player", src: "https://gdplayer.gnandeep.com/logo.png" },
  { name: "GD Websites", src: null },
  { name: "GD Creations", src: null },
  { name: "GD Publishers", src: null },
  { name: "GD Photoshop", src: null },
];

const LogoTicker = () => {
  // Triple logos for a seamless infinite scroll
  const scrollingLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mb-16">
         <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-gray-400 opacity-60">
           Powering the world's most ambitious projects
         </p>
      </div>
      
      <div className="flex relative items-center">
        <motion.div 
          className="flex gap-40 items-center whitespace-nowrap px-10"
          animate={{ 
            x: ["0%", "-33.33%"] 
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {scrollingLogos.map((logo, i) => (
            <div key={i} className="flex items-center gap-6 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50/50 rounded-2xl p-3">
                <SubLogo 
                  name={logo.name} 
                  imgSrc={logo.src} 
                  hideBrand={true} 
                  size={32} 
                  className="opacity-100" 
                />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">
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
