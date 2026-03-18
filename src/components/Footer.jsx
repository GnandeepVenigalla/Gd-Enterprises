import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const FooterFormButton = () => {
  const { openModal } = useModal();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }}
      className="flex bg-primary text-white rounded-[1.5rem] p-6 items-center justify-between hover:bg-accent transition-all group w-full text-left shadow-lg hover:shadow-accent/20"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          <Mail size={20} className="text-white" />
        </div>
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-white/60 block mb-1">Contact Sales</span>
          <span className="text-sm font-black uppercase tracking-widest text-white">Open Smart Form</span>
        </div>
      </div>
      <ArrowRight size={20} className="text-white group-hover:translate-x-2 transition-transform" />
    </button>
  );
};

const Footer = () => (
  <footer className="bg-white py-20 border-t border-gray-100">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center">
              <img src="/michael-dale.svg" alt="GD Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-black tracking-tighter text-primary">GD ENTERPRISES</span>
          </div>
          <p className="text-muted max-w-xs font-medium">
            GD Enterprises, founded in 2019 by Gnandeep Venigalla, is a diversified technology and media collective.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com/GnandeepV" target="_blank" rel="noopener noreferrer"><Twitter className="text-muted hover:text-accent cursor-pointer transition-colors" /></a>
            <a href="https://linkedin.com/in/gnandeepvenigalla" target="_blank" rel="noopener noreferrer"><Linkedin className="text-muted hover:text-accent cursor-pointer transition-colors" /></a>
            <a href="https://github.com/gnandeep" target="_blank" rel="noopener noreferrer"><Github className="text-muted hover:text-accent cursor-pointer transition-colors" /></a>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold">Explore</h4>
          <ul className="flex flex-col gap-4 text-muted font-medium">
            <li><Link to="/solutions" className="hover:text-accent transition-colors">Solutions Portal</Link></li>
            <li><Link to="/company" className="hover:text-accent transition-colors">Vision & Mission</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Connect</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
           <h4 className="text-lg font-bold">Subsidiaries</h4>
           <ul className="flex flex-col gap-4 text-muted font-medium">
             <li><a href="https://gdplayer.gnandeep.com" target="_blank" className="hover:text-accent flex items-center gap-2">GD Player <ExternalLink size={12} /></a></li>
             <li><a href="https://paywiseapp.com" target="_blank" className="hover:text-accent flex items-center gap-2">Paywise <ExternalLink size={12} /></a></li>
             <li><Link to="/solutions" className="hover:text-accent">GD Websites</Link></li>
             <li><Link to="/solutions" className="hover:text-accent">GD Photoshop</Link></li>
             <li><Link to="/solutions" className="hover:text-accent">GD Publishers</Link></li>
             <li><Link to="/solutions" className="hover:text-accent">GD Creations</Link></li>
           </ul>
        </div>

        <div className="flex flex-col gap-6">
           <h4 className="text-lg font-bold">Quick Inquiry</h4>
           <p className="text-muted font-medium">Ready to start a project?</p>
           <FooterFormButton />
        </div>
      </div>
      
      <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-sm font-medium">
        <p>© 2026 GD Enterprises. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
