import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2019", title: "The Spark", desc: "GD Enterprises founded with a mission of technical sovereignty." },
  { year: "2021", title: "GD Player Launch", desc: "Our proprietary global infrastructure went live." },
  { year: "2024", title: "Paywise Beta", desc: "Internal release of our next-gen FinTech ecosystem." }
];

const Milestones = () => {
  return (
    <section className="section-padding bg-white overflow-hidden w-full">
      <div className="container flex flex-col items-center w-full">
        {/* Centered Headline */}
        <div className="mb-32 max-w-4xl mx-auto text-center w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 block mb-6 text-center mx-auto max-w-max">Proven Legacy</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-primary text-center w-full" style={{ textAlign: 'center' }}>
              Enterprise Milestones
            </h2>
            <p className="text-xl text-muted font-medium max-w-2xl mx-auto leading-relaxed text-center w-full" style={{ textAlign: 'center' }}>
              Building the future, one breakthrough at a time since 2019.
            </p>
          </motion.div>
        </div>

        {/* Centered Timeline Items */}
        <div className="relative w-full flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block"></div>
          
          <div className="w-full max-w-4xl space-y-40 flex flex-col items-center">
            {milestones.map((ms, i) => (
              <motion.div
                key={ms.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center relative z-10 w-full text-center"
                style={{ alignItems: 'center', textAlign: 'center' }}
              >
                {/* Year Circle Badge */}
                <div 
                  className="w-24 h-24 min-w-[96px] min-h-[96px] flex-shrink-0 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center mb-12 hover:scale-110 transition-transform duration-500"
                  style={{ borderRadius: '50%', width: '96px', height: '96px', minWidth: '96px', minHeight: '96px' }}
                >
                  <span className="text-2xl font-black text-primary">{ms.year}</span>
                </div>

                <div className="max-w-2xl mx-auto text-center w-full" style={{ textAlign: 'center' }}>
                  <h4 className="text-4xl font-black tracking-tighter mb-6 text-primary text-center w-full" style={{ textAlign: 'center' }}>
                    {ms.title}
                  </h4>
                  <p className="text-xl text-muted font-medium leading-relaxed text-center w-full" style={{ textAlign: 'center' }}>
                    {ms.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
