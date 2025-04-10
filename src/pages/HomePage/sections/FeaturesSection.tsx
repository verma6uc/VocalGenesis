import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Zap, Unlock, RefreshCw } from 'lucide-react';

const FeatureTab: React.FC<{
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, title, isActive, onClick }) => (
  <button
    className={`flex items-center p-4 w-full text-left transition-all duration-300 border-l-2 ${
      isActive 
        ? 'border-l-primary bg-primary/5 text-primary' 
        : 'border-l-transparent hover:bg-neutral-light/80 text-neutral-medium hover:text-neutral-dark'
    }`}
    onClick={onClick}
  >
    <div className={`mr-3 ${isActive ? 'text-primary' : 'text-neutral-medium'}`}>
      {icon}
    </div>
    <span className="font-medium">{title}</span>
  </button>
);

const features = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Infrastructure',
    description: 'Built on scalable cloud architecture to handle high volumes of concurrent conversations with dynamic resource allocation, ensuring optimal performance during peak usage times.',
    benefits: ['Unlimited scalability', 'Load balancing', 'Reduced latency', 'Global distribution'],
    image: 'cloud-infrastructure.svg'
  },
  {
    icon: <Shield size={24} />,
    title: 'Data Security',
    description: 'End-to-end encryption and GDPR compliance for secure data handling, with advanced anonymization techniques to ensure privacy in all voice interactions.',
    benefits: ['End-to-end encryption', 'GDPR compliance', 'Data anonymization', 'Regular security audits'],
    image: 'data-security.svg'
  },
  {
    icon: <Zap size={24} />,
    title: 'Real-time Processing',
    description: 'Edge computing ensures instant processing of audio inputs with minimal latency, providing seamless, natural conversations in any environment.',
    benefits: ['Under 100ms latency', 'Continuous processing', 'Adaptive quality control', 'Background noise filtering'],
    image: 'real-time-processing.svg'
  },
  {
    icon: <Unlock size={24} />,
    title: 'API Integration',
    description: 'Comprehensive RESTful APIs for seamless integration with existing systems and applications, allowing developers to easily implement voice capabilities.',
    benefits: ['Simple authentication', 'Extensive documentation', 'Webhook support', 'Custom integration options'],
    image: 'api-integration.svg'
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Continuous Learning',
    description: 'AI models that continuously improve through usage, adapting to new speech patterns, accents, and language variations over time.',
    benefits: ['Adaptive improvement', 'Personalization', 'Accent recognition', 'Contextual understanding'],
    image: 'continuous-learning.svg'
  }
];

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technical Architecture</span> of VoiceBox
          </h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            A robust foundation built for enterprise-grade reliability, security, and seamless integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-md">
            <div className="h-full flex flex-col">
              {features.map((feature, index) => (
                <FeatureTab
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            className="lg:col-span-3 glass-card p-8 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={activeTab}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {features[activeTab].title}
            </h3>
            <p className="text-neutral-medium mb-6">
              {features[activeTab].description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-3">Key Benefits:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="h-48 sm:h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
                  {features[activeTab].icon}
                </div>
                <p className="text-sm text-neutral-medium">Visualization of {features[activeTab].title}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;