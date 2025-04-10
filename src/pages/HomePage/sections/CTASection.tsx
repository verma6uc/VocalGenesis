import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Lock } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-transparent filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-r from-secondary/20 to-transparent filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-accent/20 to-transparent filter blur-3xl opacity-30"></div>
      </div>

      <div className="container relative">
        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Ready to Join the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-Powered Voice Revolution</span>?
            </h2>
            <p className="text-neutral-medium max-w-2xl mx-auto">
              Whether you're a developer looking to integrate AI into your applications or a business seeking to revolutionize customer engagement, VoiceBox is your ultimate voice solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
                <Sparkles size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Advanced AI Features</h3>
              <p className="text-neutral-medium text-sm mb-4">
                Cutting-edge voice technology with emotional intelligence and multilingual capabilities.
              </p>
              <Link to="/technology" className="text-primary text-sm font-medium hover:text-primary-dark transition-colors inline-flex items-center">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
                <Zap size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Easy Integration</h3>
              <p className="text-neutral-medium text-sm mb-4">
                Simple API documentation and developer tools make implementation quick and hassle-free.
              </p>
              <Link to="/integrations" className="text-primary text-sm font-medium hover:text-primary-dark transition-colors inline-flex items-center">
                <span>Explore APIs</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
                <Lock size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Enterprise Security</h3>
              <p className="text-neutral-medium text-sm mb-4">
                End-to-end encryption and compliance with global data protection regulations.
              </p>
              <Link to="/security" className="text-primary text-sm font-medium hover:text-primary-dark transition-colors inline-flex items-center">
                <span>Security Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/get-started" className="btn-primary inline-block px-8 py-3 text-lg">
              Start Your Free Demo Now
            </Link>
            <p className="mt-4 text-sm text-neutral-medium">
              No credit card required. Free trial for 14 days.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;