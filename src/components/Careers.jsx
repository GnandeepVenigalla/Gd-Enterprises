import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Video, PenTool, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const roleGroups = [
  {
    title: "Technology",
    icon: <Code className="text-accent" />,
    subsidiary: "Paywise & GD Websites",
    roles: ["Full-Stack Development", "AI & Machine Learning", "Mobile Development"]
  },
  {
    title: "Creative",
    icon: <Video className="text-accent-secondary" />,
    subsidiary: "GD Creations & GD Photoshop",
    roles: ["Video Production & Motion Graphics", "Graphic Design & Brand Identity"]
  },
  {
    title: "Editorial",
    icon: <PenTool className="text-accent" />,
    subsidiary: "GD Publishers",
    roles: ["Content Strategy & Literary Editing", "Manuscript Review"]
  }
];

const Careers = () => {
  return (
    <section id="careers" className="section-padding bg-white relative overflow-hidden">
      <div className="container">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line"></div>
            <h2 className="text-5xl md:text-7xl mb-8 font-black tracking-tighter">
              Build the <br />
              <span className="text-gradient">Future</span> with Us.
            </h2>
            <p className="text-xl text-muted font-medium leading-relaxed mb-6">
              Empowering digital architects and creative storytellers. GD Enterprises is looking for talent that aligns with our mission of technical sovereignty—even if your role isn't listed below.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {["Remote-First", "Charming Innovation", "Technical Freedom"].map(item => (
                <div key={item} className="px-5 py-2 rounded-full bg-accent/5 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/10">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary px-10 py-5 inline-flex items-center justify-center">
                View All Openings <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn border-2 border-primary/5 hover:border-primary/20 px-10 py-5 font-black text-sm inline-flex items-center justify-center">
                General Application
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black">GD Rising</h4>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">Internship Program</p>
                </div>
              </div>
              <p className="text-lg text-muted font-medium mb-8 leading-relaxed">
                Empowering the next generation of digital architects and storytellers. 
                Our flagship program for young developers and creators looking to make a global impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-surface text-xs font-bold border border-gray-100 italic">#Mentorship</span>
                <span className="px-4 py-2 rounded-full bg-surface text-xs font-bold border border-gray-100 italic">#Innovation</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {roleGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-surface border border-gray-100 hover:border-accent/20 hover:shadow-xl transition-all group"
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-2xl font-black mb-2">{group.title}</h3>
              <p className="text-xs font-black text-accent uppercase tracking-widest mb-8">{group.subsidiary}</p>
              
              <ul className="space-y-4">
                {group.roles.map(role => (
                  <Link 
                    key={role} 
                    to="/contact" 
                    className="flex justify-between items-center group/item hover:translate-x-2 transition-transform cursor-pointer"
                  >
                    <span className="font-bold text-muted group-hover/item:text-primary transition-colors">{role}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 text-accent transition-all" />
                  </Link>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Talent Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2rem] bg-accent/5 border border-accent/15 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-black text-lg flex-shrink-0"><Briefcase size={20} /></div>
            <p className="font-bold text-primary text-base">
              We are always looking for talent in <span className="text-accent">AI</span>, <span className="text-accent">Web Dev</span>, and <span className="text-accent">Media</span>. Send your CV to{" "}
              <a href="mailto:contact@gnandeep.com" className="underline underline-offset-2 hover:text-accent transition-colors">contact@gnandeep.com</a>
            </p>
          </div>
          <a href="mailto:contact@gnandeep.com" className="btn btn-primary px-8 py-4 whitespace-nowrap flex-shrink-0 text-sm flex items-center gap-2">
            Send Your CV <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* General Application Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-16 rounded-[4rem] bg-surface relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black mb-4">Don't see your role?</h3>
            <p className="text-muted font-medium mb-10 leading-relaxed">
              Submit a general application and tell us how you want to build the future of enterprise technology.
            </p>
            <Link to="/contact" className="btn btn-primary px-12 py-5 text-xl inline-flex items-center justify-center">
              Submit General Application <ArrowRight className="ml-3" />
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-primary/5 opacity-40 select-none">
            TALENT
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
