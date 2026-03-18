import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import Milestones from '../components/Milestones';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <Milestones />
      
      {/* Overview Section */}
      <section className="section-padding bg-surface">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12">Scale with <span className="text-gradient">Certainty.</span></h2>
            <p className="text-xl text-muted font-medium leading-relaxed mb-12">
              GD Enterprises is a multi-industry ecosystem designed to provide technical independence 
              and creative freedom to the world's most ambitious projects.
            </p>
            <div className="grid md:grid-cols-3 gap-10 mb-20 px-4 md:px-0">

              {/* FinTech Card */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="p-10 rounded-[3rem] bg-white border border-gray-100 text-left hover:shadow-2xl hover:border-[#00C853]/20 hover:-translate-y-2 transition-all group flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#00C853]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-3xl">💳</div>
                <h3 className="text-2xl font-black mb-4">FinTech</h3>
                <p className="text-base text-muted font-medium mb-8 leading-relaxed">Reimagining money management and group settlements for the modern world.</p>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {["Split Bills", "Instant Settlements", "Group Analytics", "AI-Powered"].map(f => (
                    <span key={f} className="text-[11px] font-black uppercase tracking-widest bg-[#00C853]/5 text-[#00C853] border border-[#00C853]/10 px-4 py-1.5 rounded-full">{f}</span>
                  ))}
                </div>
              </motion.div>

              {/* Streaming Card */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="p-10 rounded-[3rem] bg-white border border-gray-100 text-left hover:shadow-2xl hover:border-[#6C1CD3]/20 hover:-translate-y-2 transition-all group flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#6C1CD3]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-3xl">▶️</div>
                <h3 className="text-2xl font-black mb-4">Streaming</h3>
                <p className="text-base text-muted font-medium mb-8 leading-relaxed">Powering the next generation of video content on our proprietary GD Player platform.</p>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {["Global Reach", "HD Streaming", "Creator Tools", "Own Platform"].map(f => (
                    <span key={f} className="text-[11px] font-black uppercase tracking-widest bg-[#6C1CD3]/5 text-[#6C1CD3] border border-[#6C1CD3]/10 px-4 py-1.5 rounded-full">{f}</span>
                  ))}
                </div>
              </motion.div>

              {/* Media Card */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="p-10 rounded-[3rem] bg-white border border-gray-100 text-left hover:shadow-2xl hover:border-accent/20 hover:-translate-y-2 transition-all group flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-3xl">📖</div>
                <h3 className="text-2xl font-black mb-4">Media</h3>
                <p className="text-base text-muted font-medium mb-8 leading-relaxed">Publishing and producing world-class creations through GD Publishers and Creations.</p>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {["Novel Publishing", "Video Production", "Brand Design", "Cinematic"].map(f => (
                    <span key={f} className="text-[11px] font-black uppercase tracking-widest bg-accent/5 text-accent border border-accent/10 px-4 py-1.5 rounded-full">{f}</span>
                  ))}
                </div>
              </motion.div>

            </div>
            <Link to="/solutions" className="btn btn-secondary px-12 py-5 text-xl inline-flex items-center gap-4">
              Explore Our Solutions <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision Teaser */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div>
               <span className="text-accent font-black uppercase tracking-widest block mb-4">Founded 2019</span>
               <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Digital Sovereignty is <br />Our Core Mission.</h2>
               <Link to="/company" className="text-accent font-black uppercase tracking-widest flex items-center gap-3 hover:gap-6 transition-all">
                 Read Our Vision Story →
               </Link>
             </div>
             <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-surface border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                <div className="p-10">
                   <div className="text-8xl font-black text-gray-100">GD</div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
