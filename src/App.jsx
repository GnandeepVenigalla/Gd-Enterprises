import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Context
import { ModalProvider, useModal } from './context/ModalContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmartFormModal from './components/SmartFormModal';
import ScrollToHash from './components/ScrollToHash';

// Pages
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import CompanyPage from './pages/CompanyPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

// Re-export useModal for convenience and to satisfy any old imports
export { useModal };

const AppContent = () => {
  const { modalOpen, openModal, closeModal } = useModal();
  
  React.useEffect(() => {
    window.openContactModal = openModal;
    return () => { delete window.openContactModal; };
  }, [openModal]);

  return (
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
        
        <AnimatePresence>
          {modalOpen && <SmartFormModal isOpen={modalOpen} onClose={closeModal} />}
        </AnimatePresence>
            
        {/* Global CTA */}
        <section className="section-padding bg-accent text-white relative overflow-hidden">
          <div className="aurora aurora-1 opacity-30"></div>
          <div className="container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl mb-12 leading-none max-w-5xl mx-auto font-black">
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
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Router>
  );
};

export default App;
