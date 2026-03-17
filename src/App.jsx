import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import CompanyPage from './pages/CompanyPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import { ArrowRight, Github, Twitter, Linkedin, ExternalLink, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Modal Context — provides openModal() globally to any component
export const ModalContext = React.createContext({ openModal: () => {}, closeModal: () => {} });
export const useModal = () => React.useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {modalOpen && (
          <SmartFormModal isOpen={modalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

// Smart Form Modal
const SmartFormModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 2000);
  };

  React.useEffect(() => {
    if (!isOpen) { const t = setTimeout(() => setSent(false), 400); return () => clearTimeout(t); }
  }, [isOpen]);

  // Lock body scroll when open
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // No early return here - AnimatePresence needs the motion components to be present
  // but we'll control visibility with the AnimatePresence in the parent.
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 pointer-events-none"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/80 backdrop-blur-md pointer-events-auto"
      />
      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.94 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-7 right-7 w-10 h-10 rounded-full bg-surface border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10 font-bold text-lg leading-none"
        >×</button>

        <div className="p-10 md:p-14">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
              <p className="text-muted font-medium mb-10">Our team will get back to you within 24 hours.</p>
              <button onClick={onClose} className="btn btn-primary px-10 py-4">Close</button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">✉</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black">Let's Build Something Together</h3>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">Smart Inquiry Form</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted ml-2">Full Name</label>
                    <input type="text" required placeholder="John Doe"
                      className="w-full bg-surface border-none rounded-2xl px-6 py-4 font-medium focus:ring-2 focus:ring-accent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted ml-2">Email Address</label>
                    <input type="email" required placeholder="john@example.com"
                      className="w-full bg-surface border-none rounded-2xl px-6 py-4 font-medium focus:ring-2 focus:ring-accent outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted ml-2">Department</label>
                  <select required
                    className="w-full bg-surface border-2 border-transparent focus:border-accent rounded-2xl px-6 py-4 font-bold text-primary outline-none appearance-none cursor-pointer transition-all">
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
                      <option value="careers">Careers &amp; Talent</option>
                      <option value="general">General Enterprise Inquiry</option>
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted ml-2">Message</label>
                  <textarea required placeholder="How can we help your mission today?"
                    className="w-full bg-surface border-none rounded-2xl px-6 py-4 font-medium focus:ring-2 focus:ring-accent outline-none transition-all min-h-[120px] resize-none" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] font-bold text-muted max-w-xs leading-relaxed">⏱ Typical response within 24 hours. Include your account ID for app support.</span>
                  <button type="submit" disabled={loading}
                    className="btn btn-primary px-10 py-4 text-base w-full sm:w-auto flex items-center justify-center gap-2">
                    {loading ? 'Sending...' : 'Send Message'} {!loading && '→'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Footer button that opens the modal
const FooterFormButton = () => {
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

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <ScrollToHash />
        <div className="antialiased font-outfit">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            
            {/* Final CTA - Visible on appropriate pages or just Home? 
                Commonly stays on Home or footer. Let's put it in a separate section if needed 
                But for now, I'll keep it as a common section above footer on certain paths or all. 
                Usually nice to have a CTA on every page. */}
            <section className="section-padding bg-accent text-white relative overflow-hidden">
              <div className="aurora aurora-1 opacity-30"></div>
              <div className="container text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-6xl md:text-8xl mb-12 leading-none max-w-5xl mx-auto">
                    Building tools that <span className="underline decoration-white/30 underline-offset-8">simplify</span> lives.
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    <Link 
                      to="/contact"
                      className="btn bg-white text-accent px-12 py-5 text-xl inline-flex items-center"
                    >
                      Work With Us <ArrowRight className="ml-3" />
                    </Link>
                    <Link 
                      to="/careers"
                      className="btn btn-outline border-white/20 hover:bg-white/10 text-white px-12 py-5 text-xl"
                    >
                      Explore Careers
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </Router>
    </ModalProvider>
  );
};

export default App;
