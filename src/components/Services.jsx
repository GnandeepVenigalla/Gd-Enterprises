import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "FinTech Innovation",
    desc: "Experience Paywise, featuring Instant AI-Group Debt Settlement and Cross-Platform Bill Sync for modern finance.",
    icon: <Zap size={40} className="text-accent-secondary" />
  },
  {
    title: "Video Streaming",
    desc: "Powering GD Player, our robust video platform designed for high-performance global content sharing.",
    icon: <Rocket size={40} className="text-accent-secondary" />
  },
  {
    title: "GD Photoshop",
    desc: "Our Professional Visual Identity & Photo Editing arm, delivering elite graphic design and cinematic brand assets.",
    icon: <Shield size={40} className="text-accent-secondary" />
  },
  {
    title: "GD Websites",
    desc: "Our Freelance Web Architecture service for external clients, building high-conversion assets that scale.",
    icon: <Globe size={40} className="text-accent-secondary" />
  }
];

const Services = () => {
  return (
    <section id="solutions" className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="aurora aurora-1 opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-6">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
              Pioneering technical <br />
              <span className="text-gradient">independence.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-dark p-8 md:p-12 rounded-[3.5rem] relative group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem] pointer-events-none"></div>
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl mb-4 font-bold">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* GD Websites Freelance Callout */}
        <motion.div
          id="websites"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[2.5rem] border border-[#007BFF]/30 bg-[#007BFF]/5"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#007BFF]/20 flex items-center justify-center text-2xl flex-shrink-0">🌐</div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#007BFF] mb-2">Freelance Services</div>
              <h3 className="text-2xl font-black text-white mb-2">Looking for a custom website?</h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xl">
                GD Enterprises provides freelance web development services for external clients and ambitious brands. 
                We architect high-conversion digital assets where <strong className="text-white">you hold the keys</strong>—not the platform.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn bg-[#007BFF] text-white px-10 py-4 whitespace-nowrap flex-shrink-0 hover:bg-[#0066dd] transition-colors">
            Get a Quote →
          </Link>
        </motion.div>

        {/* Creative Services Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-4">Creative Services</span>
              <h2 className="text-4xl md:text-6xl font-black text-white">Graphic Design & Visual Identity</h2>
            </div>
          </div>
        </div>

        {/* GD Photoshop Callout */}
        <motion.div
          id="photoshop"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[2.5rem] border border-white/10 bg-white/5"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">🎨</div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-secondary mb-2">Creative & Technical Services</div>
              <h3 className="text-2xl font-black text-white mb-2">GD Photoshop — Visual Identity Studio</h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xl">
                Our professional design arm delivering elite graphic design, cinematic brand assets, and photo manipulation. 
                From logo design to full visual identity systems — for clients who demand <strong className="text-white">visual sovereignty</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Cinematic Manipulation", "Brand Architecture", "Elite Retouching", "Technical Illustration"].map(f => (
                  <span key={f} className="text-[10px] font-bold bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/10">{f}</span>
                ))}
              </div>
            </div>
          </div>
           <Link to="/contact" className="btn btn-accent px-10 py-4 whitespace-nowrap flex-shrink-0">
            Request a Quote →
          </Link>
        </motion.div>

        {/* GD Publishers — Literary Spotlight */}
        <motion.div
          id="publishers"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-accent-secondary font-bold uppercase tracking-widest">GD Publishers</span>
            <h3 className="text-4xl md:text-5xl font-black">The Literary Studio</h3>
            <p className="text-gray-400 font-medium max-w-2xl mt-4 leading-relaxed">
              GD Publishers discovers, mentors, and publishes debut authors. Founded by Gnandeep Venigalla — 
              himself inspired by Chetan Bhagat and Ravindra Singh — we believe fresh voices deserve global reach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Book 1: WHY! */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col gap-5"
            >
              <div className="flex items-start gap-5">
                <div className="w-[60px] h-[80px] bg-gradient-to-br from-accent to-accent-secondary rounded-lg flex-shrink-0 flex items-center justify-center shadow-xl shadow-accent/20">
                  <span className="text-white font-black text-lg tracking-tighter">WHY!</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-1">Published · Crime Thriller</div>
                  <h4 className="font-black text-white text-2xl">WHY!</h4>
                  <div className="text-xs text-muted font-bold">by Gnandeep Venigalla</div>
                </div>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed text-sm">
                There were so many serial killings going around the city. This is the time for Anusha, who is investigating this case. She faces so many problems until she meets the right person. By solving the case, will she win or lose? Until she finds out <em>Why!</em>
              </p>
              <p className="text-gray-500 font-medium text-[13px] leading-relaxed">
                A crime novel where every scene shows how our society is — a fictional thriller that will make you feel genuinely thrilled.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Crime Thriller", "Social Commentary", "Mystery", "Debut Novel"].map(t => (
                  <span key={t} className="text-[10px] font-bold bg-accent/10 text-accent-light px-3 py-1 rounded-full border border-accent/20">{t}</span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10">
                <a href="https://www.instagram.com/gd_creations5/" target="_blank" rel="noopener noreferrer"
                  className="text-[11px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                  Follow @gd_creations5 for updates →
                </a>
              </div>
            </motion.div>

            {/* Book 2: Sweety (Upcoming) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col gap-5 relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-6 right-6 bg-accent-secondary/15 border border-accent-secondary/30 text-accent-secondary text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="flex items-start gap-5">
                <div className="w-[60px] h-[80px] bg-gradient-to-br from-accent-secondary to-pink-400 rounded-lg flex-shrink-0 flex items-center justify-center shadow-xl shadow-accent-secondary/20">
                  <span className="text-white font-black text-[12px] text-center leading-tight">SWEETY</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-secondary mb-1">Upcoming · Romance</div>
                  <h4 className="font-black text-white text-2xl">Sweety</h4>
                  <div className="text-xs text-muted font-bold">by Gnandeep Venigalla</div>
                </div>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed text-sm">
                A small-town girl with studies as her first priority meets the best cricketer and a handsome senior. 
                Their journey starts with friendship and turns into love — but what happened with the first guy? Against all backdrops, how does she manage?
              </p>
              <p className="text-gray-500 font-medium text-[13px] leading-relaxed italic">
                "Sweety is a hate-love story that will touch your heartstrings."
              </p>
              <div className="flex flex-wrap gap-2">
                {["Romance", "Hate-Love", "College Drama", "Coming Soon"].map(t => (
                  <span key={t} className="text-[10px] font-bold bg-accent-secondary/10 text-pink-300 px-3 py-1 rounded-full border border-accent-secondary/20">{t}</span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link to="/contact" className="text-[11px] font-black uppercase tracking-widest text-accent-secondary flex items-center gap-2">
                  Manuscript Inquiry →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 md:p-10 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-6 flex-wrap"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-black text-lg flex-shrink-0">GV</div>
            <div className="flex-1">
              <div className="font-black text-white mb-1">Gnandeep Venigalla</div>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
                Aspiring author & founder of GD Publishers. Raised in Vijayawada, Andhra Pradesh. Studies CSE at KL University. Inspired by Chetan Bhagat and Ravindra Singh. Also runs GD Creations on Instagram as <a href="https://www.instagram.com/gd_creations5/" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/20 underline-offset-4">@gd_creations5</a>.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* GD Creations Showreel */}
        <div id="creations" className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-4">GD Creations</span>
              <h3 className="text-4xl md:text-5xl font-black">Production Showreel</h3>
            </div>
            <a href="https://www.instagram.com/gd_creations5/" target="_blank" rel="noopener noreferrer" className="btn btn-accent px-8 py-4">Follow on Instagram</a>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video w-full rounded-[3rem] overflow-hidden relative group cursor-pointer border border-white/10"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center z-10">
              <div className="w-24 h-24 rounded-full bg-accent-secondary/80 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
              alt="Showreel Thumbnail" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* GD Publishers Showcase */}
        <div>
          <div className="text-center mb-16">
            <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-4">GD Publishers</span>
            <h3 className="text-4xl md:text-5xl font-black">Featured Publications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "WHY!",
                subtitle: "A story by Gnandeep Venigalla",
                desc: "A crime novel following Anusha's investigation into city-wide serial killings. A fictional thrill ride reflecting real society.",
                img: "/covers/why.png"
              },
              {
                title: "Sweety",
                subtitle: "Upcoming Release",
                desc: "A heart-touching hate-love story about a small-town girl whose journey transitions from friendship to complex love.",
                img: "/covers/sweety.png"
              }
            ].map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group book-3d-container"
              >
                <div className="aspect-[2/3] w-full bg-white/5 rounded-[2rem] overflow-hidden mb-6 border border-white/10 group-hover:border-accent-secondary/50 transition-all shadow-2xl relative book-3d">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-secondary mb-2">{book.subtitle}</span>
                    <h4 className="text-2xl font-black mb-3">{book.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium mb-6">{book.desc}</p>
                    <div className="flex gap-3">
                      <button className="flex-grow py-3 rounded-xl bg-white text-primary text-[10px] font-black uppercase tracking-widest hover:bg-accent-secondary transition-colors">Buy Now</button>
                      <button className="flex-grow py-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-colors">Sample</button>
                    </div>
                  </div>
                  <img 
                    src={book.img} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* GD Photoshop Showcase */}
        <div className="mb-24 pt-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-4">Elite Branding</span>
              <h3 className="text-4xl md:text-6xl font-black mb-8">GD Photoshop</h3>
              <p className="text-xl text-gray-300 font-medium leading-relaxed mb-10">
                Beyond just editing, GD Photoshop is our specialized arm for **Professional Visual Identity**. 
                We provide elite-level graphic design, cinematic photo manipulation, and total brand architecture 
                for clients who demand visual sovereignty.
              </p>
              <ul className="space-y-4 mb-12">
                {["Cinematic Manipulation", "Brand Identity Architecture", "Elite Retouching", "Technical Illustration"].map(item => (
                  <li key={item} className="flex items-center gap-4 text-gray-400 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-accent px-10 py-5">Request a Design Quote</Link>
            </motion.div>
            <div className="relative">
               <div className="aspect-square rounded-[3.5rem] overflow-hidden border border-white/10 group cursor-crosshair">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" 
                    alt="GD Photoshop Artwork" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent-secondary/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-8 right-8 p-4 glass-dark rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[10px] font-black uppercase text-accent-secondary">Precision Rendered</span>
                  </div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 glass-dark p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl max-w-[200px] md:max-w-[240px] z-20">
                  <div className="text-xl md:text-2xl font-black mb-2 tracking-tighter">Elite Visuals</div>
                  <p className="text-[10px] text-gray-400 font-medium">Delivering 100% technical control over your brand's aesthetic.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Trusted By & Testimonials */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <div className="text-center mb-24">
            <span className="text-accent-secondary font-bold uppercase tracking-widest block mb-4">Credibility</span>
            <h3 className="text-4xl md:text-5xl font-black">Trusted by Modern Brands.</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale mb-32 group">
             {["Brand One", "Growth Co", "Tech Flow", "Visionary"].map(brand => (
               <div key={brand} className="text-2xl font-black tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default select-none">
                 {brand}
               </div>
             ))}
             <div className="text-xs font-black uppercase tracking-widest text-accent-secondary animate-pulse">More Coming Soon</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-dark p-12 rounded-[3.5rem] border border-white/5 relative"
             >
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black">B</div>
                  <div>
                    <div className="font-bold">Business Strategy</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">GD Websites Client</div>
                  </div>
               </div>
               <p className="text-lg italic text-gray-300 font-medium leading-relaxed">
                 "GD Websites didn't just build a page; they architected a conversion machine. 
                 The attention to technical detail is unmatched in the freelance market."
               </p>
               <div className="absolute top-10 right-12 text-6xl font-serif text-white/5 opacity-40">“</div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-dark p-12 rounded-[3.5rem] border border-white/5 relative"
             >
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary font-black">C</div>
                  <div>
                    <div className="font-bold">Creative Director</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Media Partner</div>
                  </div>
               </div>
               <p className="text-lg italic text-gray-300 font-medium leading-relaxed">
                 "The synergy between GD Creations and their streaming tech is game-changing. 
                 They truly own the entire creative pipeline from lens to screen."
               </p>
               <div className="absolute top-10 right-12 text-6xl font-serif text-white/5 opacity-40">“</div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
