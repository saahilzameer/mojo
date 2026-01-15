import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, MessageCircle, Brain, Trophy, Clock, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HackathonShowcase: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Hackathon date: November 29, 2025
  const hackathonDate = new Date('2025-11-29T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hackathonDate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Brain, text: 'AI + Blockchain tracks', delay: 0.1 },
    { icon: Clock, text: '24H hacking sprint', delay: 0.2 },
    { icon: Users, text: 'Industry mentorship', delay: 0.3 },
    { icon: Trophy, text: 'Startup showcase & prizes', delay: 0.4 }
  ];

  const stats = [
    { icon: Calendar, label: 'Date', value: 'November 29, 2025' },
    { icon: Users, label: 'Participants', value: '3000+ Hackers' },
    { icon: MapPin, label: 'Location', value: 'Smartzy HQ & CMRIT' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#00D0FF" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="2" fill="#00D0FF"/>
                <circle cx="90" cy="10" r="2" fill="#00D0FF"/>
                <circle cx="90" cy="90" r="2" fill="#00D0FF"/>
                <circle cx="10" cy="90" r="2" fill="#00D0FF"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Featured Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-2 rounded-full border border-orange-500/30"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(255, 165, 0, 0.3)',
                '0 0 30px rgba(255, 165, 0, 0.5)',
                '0 0 20px rgba(255, 165, 0, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} className="text-orange-400" />
            <span className="text-orange-400 font-semibold text-sm">🔥 FEATURED EVENT</span>
            <Sparkles size={16} className="text-orange-400" />
          </motion.div>
        </motion.div>

        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="font-orbitron font-black text-3xl sm:text-5xl lg:text-7xl mb-4"
            initial={{ scale: 0.8 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-neon-blue text-glow">SMARTZY</span>
            <span className="text-white"> × </span>
            <span className="text-neon-blue text-glow">PROMPT TECHIES</span>
          </motion.h1>
          
          {/* Animated Hackathon Text with Glitch Effect */}
          <motion.div
            className="relative inline-block"
            animate={isVisible ? {
              textShadow: [
                '0 0 10px #00D0FF',
                '2px 2px 0px #FF0080, -2px -2px 0px #00D0FF',
                '0 0 10px #00D0FF'
              ]
            } : {}}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <h2 className="font-orbitron font-bold text-xl sm:text-3xl text-white">
              HACKATHON 2025
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 font-light mt-4"
          >
            Hyderabad's Biggest Student Hackathon
          </motion.p>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-16"
        >
          {[
            { label: 'Days', value: timeLeft.days, color: 'from-red-500 to-orange-500' },
            { label: 'Hours', value: timeLeft.hours, color: 'from-orange-500 to-yellow-500' },
            { label: 'Minutes', value: timeLeft.minutes, color: 'from-yellow-500 to-green-500' },
            { label: 'Seconds', value: timeLeft.seconds, color: 'from-green-500 to-blue-500' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative group"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
              }}
              style={{ perspective: 1000 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="text-center p-4 sm:p-8 relative overflow-hidden">
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-20`}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                
                {/* Orbiting Ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-neon-blue/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                />
                
                <motion.div
                  key={item.value}
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-6xl lg:text-8xl font-orbitron font-black text-neon-blue text-glow mb-2 relative z-10"
                >
                  {item.value.toString().padStart(2, '0')}
                </motion.div>
                
                <div className="text-sm sm:text-lg text-gray-400 font-medium uppercase tracking-wider relative z-10">
                  {item.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <GlassCard className="text-center group hover:bg-neon-blue/5 transition-all duration-300">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-neon-blue/20 rounded-full mb-4 group-hover:bg-neon-blue/30 transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-neon-blue" />
                </motion.div>
                <h3 className="font-orbitron font-semibold text-lg text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Features with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 + feature.delay }}
              className="flex items-center space-x-3 bg-gradient-to-r from-neon-blue/10 to-purple-500/10 px-6 py-3 rounded-full border border-neon-blue/30 hover:border-neon-blue/60 hover:bg-neon-blue/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={20} className="text-neon-blue group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <span className="text-neon-blue font-medium group-hover:text-white transition-colors duration-300">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://forms.gle/Hn8JVEov5AAvS7Ef8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-neon-blue to-blue-500 text-dark-bg px-12 py-6 rounded-full font-orbitron font-bold text-xl hover:from-white hover:to-gray-100 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Limited slots available!"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: [-100, 300],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            
            <span className="relative z-10 flex items-center space-x-3">
              <span>🚀 Register Now</span>
              <ExternalLink size={24} className="group-hover:rotate-45 transition-transform duration-300" />
            </span>
            
            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-neon-blue/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>

          <motion.a
            href="https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card text-neon-blue px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 border border-neon-blue/30 hover:border-neon-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            <span>Join WhatsApp Group</span>
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-gray-400 text-sm"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            40+ Colleges • Industry Mentors • Startup Showcase
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonShowcase;