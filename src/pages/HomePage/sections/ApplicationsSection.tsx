import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Stethoscope, GraduationCap, ShoppingCart, Tv } from 'lucide-react';

const applications = [
  {
    icon: <Headphones size={24} />,
    title: 'AI-Powered Customer Service',
    description: 'Deploy AI agents that mimic human-like conversations, providing 24/7 support in multiple languages. Integrate with CRM systems to personalize customer interactions.',
    color: 'from-primary/20 to-secondary/20',
    textColor: 'from-primary to-secondary',
    delay: 0.1
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'AI-Enhanced Sales Enablement',
    description: 'Offer real-time coaching for sales reps during calls, suggesting personalized pitches and handling objections. Analyze customer responses to predict conversion rates.',
    color: 'from-secondary/20 to-accent/20',
    textColor: 'from-secondary to-accent',
    delay: 0.2
  },
  {
    icon: <Stethoscope size={24} />,
    title: 'Healthcare AI Innovations',
    description: 'Assist doctors with AI-driven consultations, translating complex medical terms into patient-friendly language. Help patients understand diagnoses in their native language.',
    color: 'from-accent/20 to-primary/20',
    textColor: 'from-accent to-primary',
    delay: 0.3
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'AI in Education',
    description: 'Create interactive, AI-powered lessons that adapt to students learning styles and languages. Provide real-time feedback and assessment tools for educators.',
    color: 'from-primary/20 to-accent/20',
    textColor: 'from-primary to-accent',
    delay: 0.4
  },
  {
    icon: <Tv size={24} />,
    title: 'AI for Entertainment & Media',
    description: 'Generate realistic voiceovers for movies, ads, and video games using AI-driven dubbing technology. Enable content creators to produce multilingual content without re-recording.',
    color: 'from-secondary/20 to-primary/20',
    textColor: 'from-secondary to-primary',
    delay: 0.5
  }
];

const ApplicationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-light to-neutral-light/50" id="applications">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Applications in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-Driven Industries</span>
          </h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            Explore how VoiceBox is transforming communication across diverse industries with tailored AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: app.delay }}
            >
              <div className="h-full flex flex-col">
                <div className={`w-16 h-16 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br ${app.color} text-primary group-hover:scale-110 transition-transform duration-300`}>
                  {app.icon}
                </div>
                <h3 className={`text-xl font-heading font-semibold mb-4 bg-gradient-to-r ${app.textColor} bg-clip-text text-transparent`}>{app.title}</h3>
                <p className="text-neutral-medium flex-grow">{app.description}</p>
                <a href={`/use-cases#${app.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-6 inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/use-cases" className="btn-primary inline-flex items-center">
            <span>Explore All Industry Solutions</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsSection;