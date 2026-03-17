import React from 'react';
import { motion } from 'framer-motion';

const OriginStory = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-accent font-black uppercase tracking-[0.3em] block mb-6 text-sm">Est. 2019</span>
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
              The Story of <br />
              <span className="text-gradient">Independence.</span>
            </h2>
            <div className="accent-line w-32 h-2"></div>
          </motion.div>

          <div className="grid gap-16 text-xl text-muted font-medium leading-relaxed">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p>
                "I don't just want to build things; I want to own the soil they grow in."
              </p>
              <p>
                That was the realization that sparked <strong>GD Enterprises</strong>. It wasn't about starting a company; it was about escaping a system where everyone is a renter.
              </p>
              <p>
                In 2019, <strong>Gnandeep Venigalla</strong> looked at the digital landscape and saw a trap. Creators pouring their soul into platforms that could ban them tomorrow. Developers building incredible tools on infrastructure they had no control over. Businesses hostage to algorithm changes and third-party fees.
              </p>
              <p>
                We were all building mansions on rented land.
              </p>
              <p>
                I remember staring at my screen, frustrated by yet another platform limitation, when the core philosophy of GD Enterprises crystallized: <strong>Technical Sovereignty</strong>.
              </p>
              <p>
                The belief that to truly innovate, you must own the entire stack. You shouldn't just write the software; you should own the servers it runs on, the payment gateways it processes through, the storage it relies on. You need to control the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[21/9] rounded-[4rem] overflow-hidden bg-primary shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
                alt="Visionary Workspace" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-white text-9xl font-black opacity-20 select-none">2019</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p>
                That's why our first major leap wasn't just a simple app. It was <strong>GD Player</strong>—a proprietary video ecosystem. Creating a platform where content couldn't be arbitrarily throttled by a third-party was the first test of Sovereignty.
              </p>
              <p>
                Then came <strong>Paywise</strong>. We didn't want to just create another UI on top of existing banking APIs. We built an AI-driven group settlement engine from the ground up to ensure absolute clarity and control over social finance.
              </p>
              <p>
                Next was <strong>GD Websites</strong>. Having seen external brands struggle with generic, locked-in site builders, we started architecting custom, high-conversion digital assets where the client holds the keys, not the service provider.
              </p>
              <p>
                From those foundational pillars, the ecosystem naturally expanded. GD Publishers, GD Creations, GD Photoshop—each subsidiary was born not just to offer a service, but to solve a dependency.
              </p>
              <p className="bg-surface p-12 rounded-[3.5rem] border border-gray-100 italic text-2xl text-primary font-black">
                "From a single desk to a multi-industry powerhouse, the goal has remained exactly the same as it was on day one: Building the tools that allow us—and our partners—to own our future entirely."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
