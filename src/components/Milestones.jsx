import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2019", title: "The Spark", desc: "GD Enterprises founded with a mission of technical sovereignty." },
  { year: "2021", title: "GD Player Launch", desc: "Our proprietary global infrastructure went live." },
  { year: "2024", title: "Paywise Beta", desc: "Internal release of our next-gen FinTech ecosystem." }
];

const Milestones = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-black uppercase tracking-[0.3em] block mb-4 text-xs">Proven Legacy</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Enterprise Milestones</h2>
          <p className="text-muted font-medium max-w-xl mx-auto">Building the future, one breakthrough at a time since 2019.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-0 relative">
          {/* Horizontal Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
          
          {milestones.map((ms, i) => (
            <motion.div
              key={ms.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 relative group"
            >
              <div className="flex flex-col items-center text-center px-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-surface shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-accent font-black">{ms.year}</span>
                </div>
                <h4 className="text-xl font-black mb-2">{ms.title}</h4>
                <p className="text-sm text-muted font-medium">{ms.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
