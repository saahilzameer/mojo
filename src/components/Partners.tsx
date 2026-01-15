import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Instagram } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Student Tribe',
      url: 'https://www.studenttribe.in/',
      logo: '/st.webp',
      description: 'A dynamic student-led community that provides opportunities, internships, and learning resources.',
      ctaText: 'Visit Website',
      icon: Globe,
      color: 'hover:text-red-400'
    },
    {
      name: 'Edam Community',
      url: 'https://www.instagram.com/edam.community/',
      logo: '/edam.jpg',
      description: 'A tech-forward community empowering students through events, mentorship, and AI-driven learning.',
      ctaText: 'Follow on Instagram',
      icon: Instagram,
      color: 'hover:text-purple-400'
    },
    {
      name: 'NextGen Nexus',
      url: 'https://bento.me/nextgen-nexus',
      logo: '/whatsapp_image_2025-12-30_at_01.35.04_d91af16d.jpg',
      description: 'Connecting the next generation of innovators and leaders through collaborative learning and growth.',
      ctaText: 'Visit Profile',
      icon: Globe,
      color: 'hover:text-green-400'
    },
    {
      name: 'Studlyf',
      url: 'https://chat.whatsapp.com/BRYjPpzxMlABg1SgOdLB7z',
      logo: '/whatsapp_image_2025-07-06_at_00.29.28_eef78456-removebg-preview.png',
      description: 'Join our vibrant WhatsApp community for student collaboration, resources, and peer support.',
      ctaText: 'Join WhatsApp',
      icon: Globe,
      color: 'hover:text-emerald-400'
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
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-6">
            Our Collaboration <span className="text-blue-400">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with amazing organizations to create impactful experiences and opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-card text-center group hover:bg-neon-blue/5 transition-all duration-500 p-6">
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-neon-blue/30 group-hover:border-neon-blue transition-all duration-500">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <h3 className="font-orbitron font-bold text-2xl text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                  {partner.name}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                  {partner.description}
                </p>

                <motion.a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 bg-neon-blue/20 hover:bg-neon-blue text-neon-blue hover:text-dark-bg px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-neon-blue/30 hover:border-neon-blue ${partner.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <partner.icon size={18} />
                  <span>{partner.ctaText}</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;