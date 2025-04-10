import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Layers, BarChart3, Globe, MoveHorizontal } from 'lucide-react';

const technologies = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Deep Learning Frameworks',
    description: 'Utilizes TensorFlow and PyTorch to build complex neural networks for speech recognition and synthesis, trained on vast datasets for accuracy and adaptability.',
    delay: 0.1
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Generative Adversarial Networks',
    description: 'Employed for voice transformation, allowing seamless conversion between different voices while maintaining emotional authenticity.',
    delay: 0.2
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Natural Language Processing',
    description: 'Integrates NLP to analyze and understand the context, intent, and sentiment of conversations for personalized interactions.',
    delay: 0.3
  },
  {
    icon: <MoveHorizontal className="w-6 h-6" />,
    title: 'Real-Time Speech Processing',
    description: 'Employs edge computing for instant processing of audio inputs, ensuring lag-free interactions in any environment.',
    delay: 0.4
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Cross-Lingual Transfer Learning',
    description: 'Utilizes transfer learning to adapt models across languages, reducing training time and improving multilingual capabilities.',
    delay: 0.5
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Predictive Analytics',
    description: 'Leverages predictive models to anticipate user needs based on conversational history and behavioral patterns.',
    delay: 0.6
  }
];

const CoreTechnologiesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-20 bg-neutral-light overflow-hidden" id="core-technologies">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent"></div>
      </div>
      
      <div className="container relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Technologies</span>
          </h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            VoiceBox's AI framework integrates cutting-edge machine learning technologies to deliver unprecedented voice transformation capabilities.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 relative group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{tech.title}</h3>
                <p className="text-neutral-medium">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/technology" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
            <span>Learn more about our technology stack</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTechnologiesSection;