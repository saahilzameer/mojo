import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';
import TypewriterText from './TypewriterText';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  // Generate floating dot positions once
  const floatingDots = useMemo(() => {
    return [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="grid-bg absolute inset-0 opacity-20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="font-orbitron font-black text-4xl sm:text-6xl lg:text-8xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-neon-blue">PROMPT</span>
            <br />
            <span className="text-white">TECHIES</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl font-inter font-light text-gray-300"
          >
            <TypewriterText 
              text="Dream. Develop. Deploy." 
              className="text-neon-blue font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto"
          >
            CMRIT's Premier Student Tech Club | AI • Web • Innovation • Community
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.a
              href="https://forms.gle/FCvFaMWWVcoztz9J7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Apply to Join</span>
              <ExternalLink size={20} />
            </motion.a>

            <motion.a
              href="https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              <span>Join WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-60"
            style={{ left: dot.left, top: dot.top }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
