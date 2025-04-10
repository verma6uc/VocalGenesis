import { Link } from 'react-router-dom';
import { Mic, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
                <Mic size={20} />
              </div>
              <span className="text-xl font-heading font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">VoiceBox</span>
            </Link>
            <p className="text-neutral-medium mb-6 text-sm">
              The AI-Powered Voice Revolution - Transforming human communication through advanced machine learning and natural language processing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-medium hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-medium hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-medium hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-medium hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/use-cases" className="text-neutral-medium hover:text-secondary transition-colors">Use Cases</Link>
              </li>
              <li>
                <Link to="/technology" className="text-neutral-medium hover:text-secondary transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/integrations" className="text-neutral-medium hover:text-secondary transition-colors">API & Integrations</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-medium hover:text-secondary transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documentation" className="text-neutral-medium hover:text-secondary transition-colors">Documentation</Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-medium hover:text-secondary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/support" className="text-neutral-medium hover:text-secondary transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/community" className="text-neutral-medium hover:text-secondary transition-colors">Community</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-medium hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-medium hover:text-secondary transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-medium hover:text-secondary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-medium hover:text-secondary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-medium/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-medium text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VoiceBox AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-neutral-medium text-sm hover:text-secondary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-neutral-medium text-sm hover:text-secondary transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-neutral-medium text-sm hover:text-secondary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;