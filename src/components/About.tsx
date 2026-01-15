import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Exploring cutting-edge artificial intelligence and machine learning technologies'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with latest frameworks'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering collaboration and knowledge sharing among tech enthusiasts'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Driving technological advancement through creative problem-solving'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-6">
            About <span className="text-neon-blue">Us</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Prompt Techies is a student-led technology club focused on AI, web/app development, and innovation. 
            We foster collaboration, organize events, and empower students through coding, creativity, and futuristic tech. 
            Our community at CMRIT Hyderabad is passionate about pushing the boundaries of technology and 
            creating meaningful impact through hands-on learning and innovation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card text-center h-full p-6">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-neon-blue/20 rounded-full mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={32} className="text-neon-blue" />
                </motion.div>
                <h3 className="font-orbitron font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;