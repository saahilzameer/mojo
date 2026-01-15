import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, MessageCircle, Brain, Trophy, Clock, Sparkles, Zap, Target, Award, GraduationCap, Heart } from 'lucide-react';

const FeaturedEvent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const highlights = [
    { icon: GraduationCap, text: 'Campus orientation', delay: 0.1 },
    { icon: Users, text: 'Meet senior students & faculty', delay: 0.2 },
    { icon: Heart, text: 'Fun icebreaker activities', delay: 0.3 },
    { icon: Trophy, text: 'Introduction to clubs & societies', delay: 0.4 }
  ];

  const eventDetails = [
    { icon: Calendar, label: 'Date & Time', value: 'To Be Announced' },
    { icon: MapPin, label: 'Venue', value: 'CMRIT Campus' },
    { icon: Target, label: 'Organized by', value: 'Prompt Techies' },
    { icon: Users, label: 'For', value: 'All New Students (Freshers)' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-bg overflow-hidden py-20"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* AI Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="ai-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M20,20 L100,20 L100,100 L20,100 Z" fill="none" stroke="#8B5CF6" strokeWidth="0.8"/>
                <circle cx="20" cy="20" r="3" fill="#8B5CF6"/>
                <circle cx="100" cy="20" r="3" fill="#8B5CF6"/>
                <circle cx="100" cy="100" r="3" fill="#8B5CF6"/>
                <circle cx="20" cy="100" r="3" fill="#8B5CF6"/>
                <path d="M60,20 L60,100" stroke="#8B5CF6" strokeWidth="0.5"/>
                <path d="M20,60 L100,60" stroke="#8B5CF6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ai-circuit)"/>
          </svg>
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Featured Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-8 py-3 rounded-full border border-orange-500/40">
            <Sparkles size={20} className="text-orange-400" />
            <span className="text-orange-400 font-bold text-lg">🎉 COMING SOON</span>
            <Sparkles size={20} className="text-orange-400" />
          </div>
        </motion.div>

        {/* Main Title with Enhanced Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="font-orbitron font-black text-4xl sm:text-6xl lg:text-8xl mb-4"
            initial={{ scale: 0.8 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-purple-400">FRESHERS</span>
            <span className="text-neon-blue"> EVENT</span>
          </motion.h1>
          
          <motion.h2 
            className="font-orbitron font-bold text-xl sm:text-3xl lg:text-4xl text-white relative mb-4"
            animate={isVisible ? {
              textShadow: [
                '0 0 20px #8B5CF6',
                '0 0 40px #8B5CF6',
                '0 0 20px #8B5CF6'
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to CMRIT - Your Journey Begins Here
            {/* Enhanced Glitch overlay */}
            <motion.span
              className="absolute inset-0 text-pink-500 opacity-0"
              animate={isVisible ? {
                opacity: [0, 0.4, 0],
                x: [0, 3, -3, 0],
              } : {}}
              transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
            >
              Your Amazing College Journey Starts Now
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-red-700 font-light"
          >
            Get ready for an amazing welcome experience!
          </motion.p>
        </motion.div>

        {/* Announcement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden border-2 border-blue-500/30">
                {/* Enhanced animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10"
                  animate={{
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="text-4xl sm:text-6xl lg:text-8xl font-orbitron font-black text-blue-400 mb-4">
                    🎓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-2">
                    Announcement Soon
                  </h3>
                  <p className="text-blue-300 text-lg">
                    More details will be shared soon!
                  </p>
                </motion.div>
              </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12"
        >
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <div className="glass-card group hover:bg-blue-500/10 transition-all duration-300 p-6 border border-blue-500/20 hover:border-blue-500/50">
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <detail.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-orbitron font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {detail.label}
                    </h3>
                    <p className="text-blue-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12 text-blue-400"
        >
          <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-center text-blue-400 mb-8">
            What to <span className="text-blue-400">Expect</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + highlight.delay }}
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 px-6 py-4 rounded-full border border-blue-400/40 hover:border-blue-400/70 hover:bg-blue-400/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon size={22} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <span className="text-blue-400 group-hover:text-white transition-colors duration-300">
                  {highlight.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#"
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-6 rounded-full font-orbitron font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border-2 border-purple-500/50 hover:border-purple-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Stay updated for announcements!"
          >
            {/* Enhanced animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative z-10 flex items-center space-x-">
              <Award size={20} />
              <span>📢 Stay Tuned</span>
              <Sparkles size={20} />
            </span>
          </motion.a>

          <motion.a
            href="https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} className="inline mr-2" />
            <span>Join Updates Group</span>
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
            className="text-blue-400 text-sm"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎓 Welcome to CMRIT • For all freshers • More details coming soon
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-30 text-blue-400">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Brain size={50} className="text-purple-400" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-30 text-blue-400">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Zap size={45} className="text-pink-400" />
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-5 opacity-20 text-blue-400">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={35} className="text-blue-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvent;