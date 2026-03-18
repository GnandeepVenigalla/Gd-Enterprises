import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Briefcase, Globe, Headphones, ChevronRight, Send, Clock } from 'lucide-react';

const actionCards = [
  {
    title: "Email Us",
    desc: "Direct access to our strategic support team.",
    cta: "contact@gnandeep.com",
    icon: <Mail className="text-accent" />,
    path: "mailto:contact@gnandeep.com"
  },
  {
    title: "Follow Us",
    desc: "Join the mission on LinkedIn and X (Twitter).",
    cta: "View Social Channels",
    icon: <Globe className="text-accent-secondary" />,
    path: "https://linkedin.com/in/gnandeepvenigalla"
  },
  {
    title: "Support",
    desc: "Need help with Paywise or GD Player?",
    cta: "Visit Help Center",
    icon: <Headphones className="text-accent" />,
    path: "https://gdplayer.gnandeep.com"
  }
];

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="glass p-10 md:p-16 rounded-[3.5rem] border border-gray-100 shadow-2xl">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
          <MessageSquare size={20} />
        </div>
        <div>
          <h3 className="text-3xl font-black">Let's Build Something Together</h3>
          <p className="text-xs font-bold text-accent uppercase tracking-widest">Directed Inquiry System</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-muted ml-4">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="John Doe"
              className="w-full bg-surface border-none rounded-2xl px-8 py-5 font-medium focus:ring-2 focus:ring-accent outline-none transition-all"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-muted ml-4">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="john@example.com"
              className="w-full bg-surface border-none rounded-2xl px-8 py-5 font-medium focus:ring-2 focus:ring-accent outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-widest text-muted ml-4">Department</label>
          <div className="relative">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-accent pointer-events-none">
              <Briefcase size={18} />
            </div>
            <select className="w-full bg-surface border-2 border-transparent focus:border-accent rounded-2xl pl-16 pr-8 py-5 font-bold text-primary focus:ring-0 outline-none appearance-none cursor-pointer transition-all shadow-sm">
              <option value="">Select Department...</option>
              <optgroup label="Management">
                <option value="hr">Human Resources</option>
                <option value="finance">Finance</option>
                <option value="legal">Legal</option>
              </optgroup>
              <optgroup label="Enterprise Services">
                <option value="websites">Hire GD Websites (Development)</option>
                <option value="photoshop">GD Photoshop (Visual Identity)</option>
                <option value="creations">GD Creations (Video Production)</option>
              </optgroup>
              <optgroup label="Product Support">
                <option value="paywise">Paywise App Support</option>
                <option value="gdplayer">GD Player Platform Support</option>
              </optgroup>
              <optgroup label="Other">
                <option value="publishing">GD Publishers (Manuscript Inquiry)</option>
                <option value="careers">Careers & Talent</option>
                <option value="general">General Enterprise Inquiry</option>
              </optgroup>
            </select>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
              <ChevronRight size={18} className="rotate-90" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-widest text-muted ml-4">Message</label>
          <textarea 
            required
            placeholder="How can we help your mission today?"
            className="w-full bg-surface border-none rounded-3xl px-8 py-5 font-medium focus:ring-2 focus:ring-accent outline-none transition-all min-h-[150px] resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <div className="flex items-center gap-3 text-muted">
            <Clock size={16} className="text-accent" />
            <span className="text-[10px] font-bold tracking-tight max-w-xs">Our team typically responds within 24 hours. For urgent technical support regarding GD Player or Paywise, please include your account ID.</span>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary px-12 py-5 text-lg w-full md:w-auto flex items-center justify-center gap-3"
          >
            {loading ? "Routing..." : "Send Message"} <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="aurora aurora-1 opacity-5"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="accent-line"></div>
              <h2 className="text-5xl md:text-8xl mb-10 font-black tracking-tighter leading-[0.95] md:leading-[0.85]">
                Let's Build the <br />
                <span className="text-gradient">Next Chapter.</span>
              </h2>
              <p className="text-xl text-muted font-medium max-w-2xl leading-relaxed">
                Whether you're starting a project, submitting a novel, or seeking technical support, 
                qualified experts across our subsidiaries are ready to connect.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8">Direct Channels</h3>
              {actionCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 md:p-8 rounded-[2rem] bg-surface border border-gray-100 hover:border-accent/20 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      {React.cloneElement(card.icon, { size: 20 })}
                    </div>
                    <h4 className="text-xl font-black tracking-tight">{card.title}</h4>
                  </div>
                  <p className="text-sm text-muted font-medium mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <a 
                    href={card.path}
                    target={card.path.startsWith('http') ? "_blank" : "_self"}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all"
                  >
                    {card.cta} <ChevronRight size={14} className="text-accent" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
