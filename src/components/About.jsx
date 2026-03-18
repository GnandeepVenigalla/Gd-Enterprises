import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SubLogo from './SubLogo';

const subsidiaries = [
  {
    name: "Paywise",
    category: "FinTech & Innovation",
    desc: "The next generation of social finance. Split bills, manage group expenses, and settle debts instantly with AI-powered group debt settlement.",
    color: "#00C853",
    link: "https://paywiseapp.com",
    logo: "https://www.paywiseapp.com/logo.png",
    isApp: true,
    features: ["Instant AI-Group Debt Settlement", "Cross-Platform Bill Sync", "Group Analytics", "Split Bills"],
    hasPreview: true
  },
  {
    name: "GD Player",
    category: "Media & Entertainment",
    desc: "Our proprietary video ecosystem for creators to upload, share, and engage with audiences globally — built and owned by GD Enterprises.",
    color: "#6C1CD3",
    link: "https://gdplayer.gnandeep.com",
    logo: "https://gdplayer.gnandeep.com/logo.png",
    features: ["Global Video Streaming", "Creator Upload Tools", "HD Quality", "Own Platform"]
  },
  {
    name: "GD Publishers",
    category: "Media & Literary Arts",
    desc: "Founded by Gnandeep Venigalla, GD Publishers is a literary venture publishing and mentoring debut authors. Home to the crime novel \"WHY!\" and the upcoming romance \"Sweety\".",
    color: "#1a1a2e",
    link: "/solutions#publishers",
    isContact: false,
    logo: "https://lh3.googleusercontent.com/sitesv/APaQ0SRkbCj4_5O8TVhw9LPnL52a6q0ssKfFAb1UX4qsdJgR8MG0e7EnkRm-uqWMUM9NP5TuZpGMVVdwle4-jdTYDPXVSKCJsQJ8DZglKTipoVYzVwvq0XNo21_4NF-rOHUbjwVEHkVeXme-95gKy3JCGWWNT6JtKFm6J33zODkIZuD4yLpYohkJ-REgJtON2JALOs2De1NAxwbAfA_xS1-QspXtJz_GbbuxQUZp=w1280",
    features: ["\"WHY!\" — Crime Novel", "\"Sweety\" — Coming Soon", "Debut Author Mentorship", "Literary Publishing"]
  },
  {
    name: "GD Creations",
    category: "Creative & Video Content",
    desc: "Our creative content studio producing cinematic video content, edits, and visual storytelling. Follow us on Instagram for our latest drops — @gd_creations5.",
    color: "#FF0000",
    link: "/solutions#creations",
    isContact: false,
    logo: "/old-logos/creatives.png",
    features: ["Video Production", "Cinematic Edits", "Content Strategy", "@gd_creations5"]
  },
  {
    name: "GD Websites",
    category: "Creative & Technical Services",
    desc: "A freelance web development service for external clients and ambitious brands. We architect conversion-focused digital assets that you fully own — no platform lock-in.",
    color: "#007BFF",
    link: "/solutions#websites",
    logo: "/michael-dale.svg",
    cta: "Hire Us / Get a Quote",
    isContact: false,
    features: ["Freelance Services", "Custom Architecture", "Conversion Focused", "Full Ownership"]
  },
  {
    name: "GD Photoshop",
    category: "Creative & Technical Services",
    desc: "The professional visual identity and photo editing arm of GD Enterprises. Our portfolio includes cinematic film-style posters (NTR 30), brand identity work (CK Mens Ware), and elite retouching for clients who demand visual sovereignty.",
    color: "#222222",
    link: "/solutions#photoshop",
    isContact: false,
    logo: "/old-logos/publishers.png",
    features: ["Cinematic Poster Design", "Brand Identity (CK Mens Ware)", "NTR 30 Poster Replica", "Elite Retouching"]
  }
];

const timeline = [
  { year: "2019", title: "The Spark", desc: "GD Enterprises founded by Gnandeep Venigalla with a vision for technical sovereignty." },
  { year: "2021", title: "GD Player Launch", desc: "The release of our proprietary global video-sharing infrastructure." },
  { year: "2024", title: "Paywise Beta", desc: "Released on Feb 5 (Founder's Birthday). Revolutionizing social finance with AI-driven settlements." },
  { year: "2026", title: "Scale Phase", desc: "Expanding the ecosystem to empower global enterprise commerce." }
];

const About = () => {
  return (
    <section id="company" className="section-padding bg-surface">
      <div className="container">
        {/* Vision Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line"></div>
            <h2 className="text-5xl md:text-6xl mb-8 font-black tracking-tighter">
              Technical <br />
              <span className="text-muted text-4xl">Sovereignty.</span>
            </h2>
            <p className="text-xl text-muted font-medium leading-relaxed mb-8">
              Founded in 2019 by Gnandeep Venigalla, GD Enterprises was born from a simple yet powerful goal: Technical Sovereignty. We believe that to truly innovate, a company must own its ecosystem. Over the last five years, we have grown from a single vision into a multi-industry powerhouse. Whether it is building our own streaming infrastructure with GD Player, revolutionizing personal finance with Paywise, or empowering authors through GD Publishers, our mission remains the same: Building tools that simplify lives and architecting a future where creativity has no boundaries.
            </p>
            <div className="flex flex-col gap-6 mt-12">
              <div className="p-8 rounded-[2rem] bg-white border border-gray-100 group hover:border-accent transition-all">
                <h4 className="font-black text-primary mb-3 uppercase tracking-widest text-xs">Technical Sovereignty</h4>
                <p className="text-sm text-muted font-medium leading-relaxed">Most companies rely on third-party platforms. We built our own—like the video-sharing power of GD Player—to ensure absolute freedom.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-gray-100 group hover:border-accent transition-all">
                <h4 className="font-black text-primary mb-3 uppercase tracking-widest text-xs">Enterprise Synergy</h4>
                <p className="text-sm text-muted font-medium leading-relaxed">Our ecosystem is a closed circle with global impact. GD Creations content lives on GD Player, while GD Websites builds the home for all of them.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-gray-100 group hover:border-accent transition-all">
                <h4 className="font-black text-primary mb-3 uppercase tracking-widest text-xs">Human-Centric Impact</h4>
                <p className="text-sm text-muted font-medium leading-relaxed">From solving friend-group debts with Paywise to professional architecture for every business, we build for human connection.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-[3rem] relative"
          >
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl aurora-move"></div>
             <h3 className="text-3xl font-bold mb-6">The Founder</h3>
             <p className="text-lg mb-8 leading-relaxed font-medium text-muted">
               <strong>Gnandeep Venigalla</strong> founded GD Enterprises with a mission of absolute technical sovereignty. 
               His 2019 vision has evolved into a multi-industry ecosystem where 
               ownership is the standard, and creative freedom is the only goal.
             </p>
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl">
                   GV
                 </div>
                 <div>
                   <div className="font-bold text-xl">Gnandeep Venigalla</div>
                   <div className="text-accent font-semibold uppercase tracking-wider text-xs">Founder & Visionary</div>
                 </div>
               </div>
               <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                   <span className="font-bold text-xs">𝕏</span>
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                   <span className="font-bold text-xs">in</span>
                 </a>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Founder's Note Section */}
        <div className="mb-24">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto bg-primary text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]"
           >
             <div className="aurora aurora-1 opacity-20"></div>
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <span className="text-[15rem] font-black leading-none select-none">“</span>
             </div>
             <div className="relative z-10">
               <span className="text-accent-secondary font-black uppercase tracking-widest block mb-10">A Note from Gnandeep</span>
               <h3 className="text-3xl md:text-4xl font-black mb-10 leading-tight">
                 "We don't build projects to follow trends. We build icons to define them."
               </h3>
               <div className="space-y-6 text-lg text-gray-300 font-medium leading-relaxed max-w-2xl">
                 <p>
                   When I started GD Enterprises in 2019, I had a simple realization: 
                   the digital world was becoming too fragmented and too dependent on platforms 
                   that don't put the creator first.
                 </p>
                 <p>
                   My goal has always been to reclaim that independence. Whether we're building 
                   a fintech app like Paywise or publishing a new novel, the mission remains the same: 
                   Technical Sovereignty. We're here to build the tools that empower you to own your future.
                 </p>
               </div>
                <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white font-black italic text-2xl border border-white/20">
                      GV
                    </div>
                    <div>
                      <div className="text-2xl font-black italic tracking-tight">Gnandeep Venigalla</div>
                      <div className="text-accent-secondary text-[10px] font-black uppercase tracking-widest">Founder, GD Enterprises</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="text-4xl font-serif italic text-white/40 select-none pointer-events-none transform -rotate-3">
                        Gnandeep V.
                     </div>
                     <span className="text-xs font-bold text-gray-400 italic">Est. 2019</span>
                  </div>
                </div>
             </div>
           </motion.div>
        </div>

        {/* Our Journey Timeline */}
        <div className="mb-24">
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-widest block mb-4">Our Evolution</span>
            <h2 className="text-5xl font-black">Our Journey</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pt-12 border-t-2 border-gray-100"
              >
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-accent -translate-y-[9px]"></div>
                <span className="text-4xl font-black text-gray-200 block mb-4">{item.year}</span>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subsidiary Portfolio */}
        <div className="mb-16">
          <h3 className="text-4xl mb-4">Subsidiary Portfolio</h3>
          <p className="text-xl text-muted max-w-2xl font-medium">
            A diverse ecosystem of specialized companies pushing the boundaries of digital and physical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 min-h-0 md:min-h-[550px]"
            >
              {/* Colored Side Bar */}
              <div 
                className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-full opacity-[0.03]"
                style={{ backgroundColor: sub.color }}
              ></div>
              
              <div className="mb-10 p-8 bg-surface rounded-3xl border border-gray-100/30">
                <SubLogo name={sub.name} size={48} className="scale-150 transform origin-center py-4" />
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span 
                    className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border" 
                    style={{ 
                      color: sub.color, 
                      borderColor: `${sub.color}20`,
                      backgroundColor: `${sub.color}08` 
                    }}
                  >
                    {sub.category}
                  </span>
                </div>
                
                <h3 className="text-3xl mb-4 font-black tracking-tighter text-primary">{sub.name}</h3>
                <p className="text-muted text-lg mb-6 font-medium leading-relaxed opacity-80">{sub.desc}</p>
                
                {sub.features && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {sub.features.map(f => (
                      <span key={f} className="text-[10px] font-bold bg-primary/5 text-primary px-3 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                )}

                {sub.hasPreview && (
                  <div className="mb-8 p-4 bg-muted/20 rounded-2xl border border-dashed border-muted relative overflow-hidden group/preview">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                      </div>
                      <span className="text-[10px] font-black uppercase text-accent">AI Scan Active</span>
                    </div>
                    <div className="space-y-2">
                       <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="h-full w-1/3 bg-accent/30"
                          ></motion.div>
                       </div>
                       <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-[10px] font-black text-primary">How it works →</span>
                    </div>
                  </div>
                )}

                {sub.isApp && (
                  <div className="flex gap-3 mb-8">
                    <div className="h-8 w-24 bg-primary text-white text-[8px] flex items-center justify-center rounded border border-white/10 opacity-80 cursor-not-allowed">
                       App Store
                    </div>
                    <div className="h-8 w-24 bg-primary text-white text-[8px] flex items-center justify-center rounded border border-white/10 opacity-80 cursor-not-allowed">
                       Google Play
                    </div>
                  </div>
                )}
                
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  {sub.isContact ? (
                    <Link 
                      to="/contact"
                      className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all hover:opacity-70"
                      style={{ color: sub.color }}
                    >
                      {sub.cta || "Visit Experience"} <span>→</span>
                    </Link>
                  ) : (
                    <a 
                      href={sub.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all hover:opacity-70"
                      style={{ color: sub.color }}
                    >
                      {sub.cta || "Visit Experience"} <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paywise: How it Works section */}
        <div className="mt-24 pt-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-[#00C853] font-black uppercase tracking-widest block mb-4">Product Spotlight</span>
              <h2 className="text-5xl md:text-6xl font-black mb-8">Paywise: How it Works</h2>
              <p className="text-xl text-muted font-medium">Revolutionizing social finance in three simple steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/3 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
               
               {[
                 { step: "01", title: "Create Group", desc: "Instantly create a secure workspace for your trip, event, or shared home.", icon: "👥" },
                 { step: "02", title: "Add Expenses", desc: "Upload receipts or manually add expenses in any currency. AI tracks the rest.", icon: "💸" },
                 { step: "03", title: "One-Click Settle", desc: "Our algorithm calculates the most efficient way for everyone to pay back instantly.", icon: "⚡" }
               ].map((item, i) => (
                 <motion.div
                   key={item.step}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className="flex flex-col items-center text-center p-10 bg-white rounded-[3rem] border border-gray-100 shadow-xl hover:translate-y-[-10px] transition-all"
                 >
                   <div className="w-20 h-20 rounded-2xl bg-[#00C853]/10 flex items-center justify-center text-4xl mb-8">
                     {item.icon}
                   </div>
                   <div className="text-xs font-black text-[#00C853] uppercase tracking-[0.3em] mb-4">Step {item.step}</div>
                   <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                   <p className="text-muted font-medium leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
