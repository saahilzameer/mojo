import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onTeamClick: () => void;
}

interface NavItem {
  name: string;
  href?: string;
  onClick?: () => void;
  isButton?: boolean;
  isExternal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onTeamClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', onClick: onTeamClick, isButton: true },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card backdrop-blur-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/whatsapp_image_2025-10-14_at_08.40.10_d25cfc93 copy.jpg"
              alt="Prompt Techies Logo"
              className="h-10 w-10 rounded-full border-2 border-neon-blue/30 object-cover"
            />
            <span className="font-orbitron font-bold text-xl text-neon-blue">
              Prompt Techies
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.isButton ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass-card"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                item.isButton ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    className="text-gray-300 hover:text-neon-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;