import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SubLogo from './SubLogo';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = React.useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  // Close solutions dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Company', path: '/company' },
    { name: 'Careers', path: '/careers' }
  ];

  const solutionsData = {
    categories: [
      { name: "FinTech", desc: "Paywise Settlements" },
      { name: "Streaming", desc: "GD Player Platform" },
      { name: "Freelance", desc: "GD Websites & Creative" }
    ],
    links: [
      { name: "Paywise", href: "https://paywiseapp.com", category: "FinTech" },
      { name: "GD Player", href: "https://gdplayer.gnandeep.com", category: "Streaming" },
      { name: "GD Websites", path: "/solutions#websites", category: "Freelance" },
      { name: "GD Photoshop", path: "/solutions#photoshop", category: "Freelance" },
      { name: "GD Creations", path: "/solutions#creations", category: "Freelance" },
      { name: "GD Publishers", path: "/solutions#publishers", category: "Media" }
    ]
  };

  return (
    <>
      <nav 
        style={{ zIndex: 1000 }}
        className={`fixed top-0 left-0 w-full transition-all duration-500 ${
          isScrolled || mobileMenuOpen || location.pathname !== '/'
            ? 'py-4 glass shadow-lg border-b border-gray-100' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container flex justify-between items-center">
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center">
                <img 
                  src="/michael-dale.svg" 
                  alt="GD Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary">
                GD ENTERPRISES
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-6">
              {/* Solutions Dropdown */}
              <div 
                className="relative h-full flex items-center group"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  to="/solutions"
                  className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 h-full px-1 ${
                    location.pathname.startsWith('/solutions') || solutionsOpen ? 'text-accent' : 'text-primary/70 hover:text-accent'
                  }`}
                >
                  Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
                  {location.pathname.startsWith('/solutions') && (
                    <motion.div 
                      layoutId="nav-underline" 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-accent shadow-[0_4px_12px_rgba(255,46,149,0.4)]" 
                      initial={false}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[9999]"
                    >
                      {/* Invisible bridge to prevent mouse-out between trigger and menu */}
                      <div className="absolute top-0 left-0 w-full h-4 -translate-y-4" />
                      
                      <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] overflow-hidden flex w-[680px]">
                        {/* Left Column: Featured Section */}
                        <div className="w-[38%] bg-slate-50/50 p-10 border-r border-slate-50 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent block mb-4">Core Ecosystem</span>
                            <h4 className="text-xl font-black text-primary leading-tight mb-4">Empowering <br />Modern Enterprise</h4>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Discover our specialized subsidiaries built for the next generation of commerce and media.</p>
                          </div>
                          
                          <Link 
                            to="/solutions" 
                            onClick={() => setSolutionsOpen(false)}
                            className="group/link flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-colors pt-10 uppercase tracking-widest"
                          >
                            Browse All <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Right Columns: Links Grid */}
                        <div className="w-[62%] p-8">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {solutionsData.links.map(link => (
                              link.href ? (
                                <a
                                  key={link.name}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setSolutionsOpen(false)}
                                  className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                    <SubLogo name={link.name} size={18} />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold text-primary group-hover/item:text-accent transition-colors">{link.name}</span>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mt-0.5">{link.category || 'Platform'}</span>
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  key={link.name}
                                  to={link.path}
                                  onClick={() => setSolutionsOpen(false)}
                                  className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                    <SubLogo name={link.name} size={18} />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold text-primary group-hover/item:text-accent transition-colors">{link.name}</span>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mt-0.5">{link.category || 'Service'}</span>
                                  </div>
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap relative py-3 px-1 ${
                        isActive ? 'text-accent' : 'text-primary/70 hover:text-accent'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {(isActive || (link.path === '/' && location.pathname === '/')) && (
                          <motion.div 
                            layoutId="nav-underline" 
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-accent shadow-[0_4px_12px_rgba(255,46,149,0.4)]" 
                            initial={false}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="btn btn-outline-primary !h-12 py-0 px-8 text-sm whitespace-nowrap font-bold transition-all inline-flex items-center justify-center no-underline"
            >
              Connect with us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden shadow-2xl border-t border-gray-100"
            >
              <div className="container py-8 flex flex-col gap-6">
                <NavLink 
                  to="/solutions"
                  className={({ isActive }) => `text-xl font-bold ${isActive ? 'text-accent' : ''}`}
                >
                  Solutions
                </NavLink>
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name} 
                    to={link.path}
                    className={({ isActive }) => 
                      `text-xl font-bold ${isActive ? 'text-accent' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-black uppercase tracking-widest text-accent">Our Subsidiaries</span>
                  <div className="grid gap-6">
                    {solutionsData.links.map(link => (
                      link.href ? (
                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                          <SubLogo name={link.name} size={20} />
                          <div className="flex flex-col">
                            <span className="text-lg font-bold text-primary">{link.name}</span>
                            <span className="text-[10px] text-accent uppercase font-black tracking-widest">{link.category}</span>
                          </div>
                        </a>
                      ) : (
                        <Link key={link.name} to={link.path} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                          <SubLogo name={link.name} size={20} />
                          <div className="flex flex-col">
                            <span className="text-lg font-bold text-primary">{link.name}</span>
                            <span className="text-[10px] text-accent uppercase font-black tracking-widest">{link.category}</span>
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="btn btn-primary w-full mt-4 flex items-center justify-center py-5 rounded-2xl font-black"
                >
                  Connect with us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Sticky Connect Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-10 right-10 z-[60] hidden md:block"
          >
            <Link 
              to="/contact"
              className="group relative flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-110 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 group-hover:opacity-40"></div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                 <X size={24} className="rotate-45" />
              </motion.div>
              {/* Tooltip */}
              <div className="absolute right-full mr-6 py-3 px-6 bg-white text-primary text-xs font-black uppercase tracking-widest rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
                Start your mission
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
