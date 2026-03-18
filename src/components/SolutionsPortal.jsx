import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Palette, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';

const paths = [
  {
    id: "fintech",
    title: "FinTech & Apps",
    icon: <Smartphone className="text-[#00C853]" size={32} />,
    desc: "Next-gen consumer tools. Experience AI-driven finance with Paywise's Instant AI-Group Debt Settlement and Cross-Platform Bill Sync.",
    items: [
      { name: "Paywise", type: "FinTech App", link: "https://paywiseapp.com" },
      { name: "GD Player", type: "Streaming Platform", link: "https://gdplayer.gnandeep.com" }
    ],
    color: "bg-[#00C853]/10",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "creative",
    title: "Creative Services",
    icon: <Palette className="text-[#FF2E95]" size={32} />,
    desc: "Visual storytelling and digital art. GD Photoshop provides Professional Visual Identity & Photo Editing for elite brands.",
    items: [
      { name: "GD Creations", type: "Video Production", link: "#creations" },
      { name: "GD Photoshop", type: "Digital Arts", link: "#photoshop" }
    ],
    color: "bg-[#FF2E95]/10",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "growth",
    title: "Business Growth",
    icon: <TrendingUp className="text-[#007BFF]" size={32} />,
    desc: "Freelance Web Architecture for external clients. We build high-conversion digital assets tailored to your business needs.",
    items: [
      { name: "GD Websites", type: "Freelance Service", link: "#websites" },
      { name: "Hire Us", type: "Get a Quote", link: "/contact", isCTA: true }
    ],
    color: "bg-[#007BFF]/10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

const SolutionsPortal = () => {
  return (
    <section id="solutions-portal" className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="aurora aurora-1 opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-6">The Explorer</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">Choose Your Path.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Categorized expertise designed to solve specific challenges. 
              Find the division that aligns with your mission.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {paths.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-dark group rounded-[3rem] overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/10"
            >
              {/* Image Preview */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={path.image} 
                  alt={path.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                <div className="absolute bottom-8 left-10">
                  <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                    {React.cloneElement(path.icon, { size: 28 })}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col flex-grow">
                <h3 className="text-3xl font-black mb-6 tracking-tighter">{path.title}</h3>
                <p className="text-gray-400 font-medium mb-8 leading-relaxed text-base">
                  {path.desc}
                </p>

                <div className="space-y-3 mt-auto">
                  {path.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target={item.link.startsWith('http') ? "_blank" : "_self"}
                      className={`flex items-center justify-between p-6 rounded-[1.5rem] transition-all group/btn ${
                        item.isCTA 
                          ? 'bg-accent text-white font-black hover:bg-white hover:text-primary' 
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-base">{item.name}</span>
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-black opacity-50 ${item.isCTA ? 'group-hover/btn:text-primary' : ''}`}>
                          {item.type}
                        </span>
                      </div>
                      {item.isCTA ? <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" /> : <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPortal;
