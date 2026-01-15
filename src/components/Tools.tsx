import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, ExternalLink, Sparkles, Heart } from 'lucide-react';

const Tools: React.FC = () => {
  const tools = [
    {
      title: 'Resume Builder Tool',
      description: 'Create your ATS-friendly resume in minutes',
      buttonText: 'Build My Resume',
      url: 'https://resumebuilder-bice.vercel.app/',
      icon: FileText,
      color: 'from-emerald-400 to-blue-500',
      bgGradient: 'from-emerald-500/10 to-blue-500/10',
      borderColor: 'border-emerald-500/30 hover:border-emerald-500'
    },
    {
      title: 'AI Tools Directory',
      description: '100+ curated AI tools by Prompt Techies',
      buttonText: 'Explore AI Tools',
      url: 'https://techiestools.vercel.app/',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30 hover:border-purple-500'
    },
    {
      title: 'MindEase.AI',
      description: 'Your AI companion for mental wellness and emotional support',
      buttonText: 'Start Your Journey',
      url: 'https://mindeaseai-nu.vercel.app/',
      icon: Heart,
      color: 'from-rose-400 to-orange-500',
      bgGradient: 'from-rose-500/10 to-orange-500/10',
      borderColor: 'border-rose-500/30 hover:border-rose-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-purple-500/20 px-6 py-2 rounded-full border border-neon-blue/30 mb-6">
            <Sparkles size={16} className="text-neon-blue" />
            <span className="text-neon-blue font-semibold text-sm">🚀 BUILT BY US</span>
            <Sparkles size={16} className="text-neon-blue" />
          </div>
          
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-6">
            Tools by <span className="text-neon-blue">Prompt Techies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful tools crafted by our team to help students and professionals excel in their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`glass-card group relative overflow-hidden p-8 bg-gradient-to-br ${tool.bgGradient} border-2 ${tool.borderColor} transition-all duration-500 hover:shadow-2xl hover:shadow-neon-blue/10 h-full flex flex-col`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <tool.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-2xl text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {tool.description}
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center space-x-3 bg-gradient-to-r ${tool.color} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/25 group-hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{tool.buttonText}</span>
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={24} className="text-neon-blue" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-400 text-sm"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            More tools coming soon • Built with ❤️ by Prompt Techies
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;