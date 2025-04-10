import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Customer Support Manager, GlobalTech',
    image: '/images/testimonials/sarah.jpg',
    quote: 'VoiceBox has revolutionized our customer support operations. We have reduced response times by 60% while expanding our language capabilities to 30+ languages. The emotional intelligence built into the AI makes conversations feel remarkably human.',
    rating: 5,
    delay: 0.1
  },
  {
    name: 'Michael Chen',
    title: 'Content Director, StreamFlix',
    image: '/images/testimonials/michael.jpg',
    quote: 'As a content creator, VoiceBox has been game-changing for our international dubbing. We have cut production costs by 70% while maintaining authentic voice quality across 45 markets. Our audiences can't tell the difference from traditional voice actors.',
    rating: 5,
    delay: 0.2
  },
  {
    name: 'Dr. Lakshmi Patel',
    title: 'Chief Medical Officer, HealthConnect',
    image: '/images/testimonials/lakshmi.jpg',
    quote: 'Patient communication is crucial in healthcare. VoiceBox helps our physicians explain complex medical concepts in the patient native language with appropriate emotional tone. We have seen a 40% improvement in treatment adherence due to better understanding.',
    rating: 4,
    delay: 0.3
  },
  {
    name: 'Carlos Mendez',
    title: 'EdTech Product Manager, LearnWave',
    image: '/images/testimonials/carlos.jpg',
    quote: 'Implementing VoiceBox in our virtual learning environment has increased student engagement by 85%. The ability to provide instructions and feedback in multiple languages has made our platform truly accessible to global learners.',
    rating: 5,
    delay: 0.4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-light/50 to-neutral-light" id="testimonials">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            Hear from industry leaders who have transformed their voice communications with VoiceBox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 md:p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-3xl -mt-2 -mr-2"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-xl font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-medium">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-accent text-accent" : "text-neutral-medium"}
                  />
                ))}
              </div>
              
              <blockquote className="text-neutral-medium italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <p className="text-xs text-neutral-medium">Verified Client</p>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </div>
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
          <a href="/case-studies" className="btn-secondary inline-flex items-center">
            <span>View All Case Studies</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
