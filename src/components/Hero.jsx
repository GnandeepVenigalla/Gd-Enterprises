import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      // Scroll down by one viewport height minus navbar height
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-48 pb-32 overflow-hidden aurora-container">
      {/* Background Elements */}
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="accent-line mb-8"></div>
            <h1 className="text-7xl md:text-[8rem] mb-12 tracking-tighter font-black leading-[0.9]">
              Building the <br />
              <span className="text-gradient">Future</span> of <br />
              Enterprise.
            </h1>
          </motion.div>
 
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted mb-16 max-w-2xl font-medium leading-relaxed"
          >
            GD Enterprises architecting scalable solutions for the world's most 
            ambitious brands. We turn complexity into conversion.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6"
          >
            <Link 
              to="/solutions"
              className="btn btn-accent px-12 py-5 text-lg inline-flex items-center"
            >
              Explore Our Solutions <ArrowRight className="ml-3" />
            </Link>
            <Link 
              to="/company"
              className="btn btn-outline-primary px-12 py-5 text-lg inline-flex items-center"
            >
              Our Vision Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-12 flex flex-col items-start gap-2 z-40 cursor-pointer group p-4"
        onClick={scrollToNext}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted/60 group-hover:text-accent transition-colors mb-2">Scroll to explore</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-accent/50 group-hover:text-accent transition-all" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
