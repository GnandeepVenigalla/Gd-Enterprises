import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

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

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen && !sent) return null;

  const modalContent = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 5, 20, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.94 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ pointerEvents: 'auto', zIndex: 10000 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-7 right-7 w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10 font-bold text-xl leading-none"
        >×</button>

        <div className="p-10 md:p-14">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
              <p className="text-muted font-medium mb-10">Our team will get back to you within 24 hours.</p>
              <button 
                onClick={onClose} 
                className="inline-flex items-center justify-center bg-primary text-white rounded-2xl px-12 py-5 text-lg font-black tracking-tight hover:bg-accent transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-bold text-2xl">✉</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight">Let's Build Together</h3>
                  <p className="text-xs font-black text-accent uppercase tracking-widest opacity-70">Smart Inquiry Intelligence</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                    <input type="text" required placeholder="John Doe"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 font-bold text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email Address</label>
                    <input type="email" required placeholder="john@example.com"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 font-bold text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Department</label>
                  <select required
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-accent rounded-2xl px-6 py-5 font-black text-primary outline-none appearance-none cursor-pointer transition-all shadow-sm">
                    <option value="">Select Department...</option>
                    <optgroup label="Enterprise Solutions">
                      <option value="websites">GD Websites (Development)</option>
                      <option value="photoshop">GD Photoshop (Visual Identity)</option>
                      <option value="creations">GD Creations (Creative)</option>
                    </optgroup>
                    <optgroup label="Global Products">
                      <option value="paywise">Paywise App Support</option>
                      <option value="gdplayer">GD Player Ecosystem</option>
                    </optgroup>
                    <optgroup label="Strategic Admin">
                      <option value="general">General Enterprise Inquiry</option>
                      <option value="careers">Careers &amp; Talent</option>
                      <option value="publishing">GD Publishers Inquiry</option>
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Message</label>
                  <textarea required placeholder="How can we help your mission today?"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 font-medium text-primary focus:ring-2 focus:ring-accent outline-none transition-all min-h-[140px] resize-none placeholder:text-slate-300" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 max-w-[240px] leading-relaxed">⏱ Strategic teams respond within 24 hours. For high-priority support, include Account IDs.</span>
                  <button type="submit" disabled={loading}
                    className="flex items-center justify-center bg-primary text-white rounded-2xl px-12 py-5 text-lg font-black tracking-tight hover:bg-accent hover:scale-105 active:scale-95 transition-all w-full sm:w-auto shadow-xl shadow-primary/20">
                    {loading ? 'Routing...' : 'Establish Connection'} {!loading && '→'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
};

export default SmartFormModal;
