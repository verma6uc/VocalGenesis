import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mic } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-neutral-light/80 border-b border-neutral-medium/10 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-primary">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
              <Mic size={20} />
            </div>
            <span className="text-xl font-heading font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">VoiceBox</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-dark hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/use-cases" className="text-neutral-dark hover:text-primary transition-colors font-medium">
              Use Cases
            </Link>
            <Link to="/technology" className="text-neutral-dark hover:text-primary transition-colors font-medium">
              Technology
            </Link>
            <Link to="/integrations" className="text-neutral-dark hover:text-primary transition-colors font-medium">
              API & Integrations
            </Link>
            <Link to="/why-voicebox" className="text-neutral-dark hover:text-primary transition-colors font-medium">
              Why VoiceBox
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/get-started"
              className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-neutral-dark"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-medium/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/use-cases" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMenu}>
              Use Cases
            </Link>
            <Link to="/technology" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMenu}>
              Technology
            </Link>
            <Link to="/integrations" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMenu}>
              API & Integrations
            </Link>
            <Link to="/why-voicebox" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMenu}>
              Why VoiceBox
            </Link>
            <Link
              to="/get-started"
              className="block text-center py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;