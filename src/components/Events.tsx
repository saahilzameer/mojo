import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: 'CYBERSPHERE',
      date: '09-Feb-2024',
      description: 'Exploring the Digital Frontier',
      image: '/1.CYBERSPHERE.jpg',
      status: 'completed'
    },
    {
      title: 'SPECTRUM SPARKS',
      date: '18-Mar-2024',
      description: 'Bright Ideas. Bold Futures.',
      image: '/2.SPECTRUM SPARKS.jpg',
      status: 'completed'
    },
    {
      title: 'JNTU X CMRIT',
      date: '23-Apr-2024',
      description: 'United for Innovation',
      image: '/3.JNTU X CMRIT.jpg',
      status: 'completed'
    },
    {
      title: 'SNIST X CMRIT',
      date: '23-Jul-2024',
      description: 'Empowering Student Collaboration',
      image: '/4.SNIST X CMRIT.jpg',
      status: 'completed'
    },
    {
      title: 'AI GANESHA',
      date: '06-Sep-2024',
      description: 'When Devotion Meets Intelligence',
      image: '/5.AI GANESHA.jpg',
      status: 'completed'
    },
    {
      title: 'Student Tribe Meet at CMRIT',
      date: '20-Sep-2024',
      description: 'An engaging meetup fostering new bonds',
      image: '/6.student tribe meet at cmrit.jpg',
      status: 'completed'
    },
    {
      title: 'SAWIT.AI – Gen AI Learning Challenge',
      date: '18-Feb-2025',
      description: 'Empowering Women in AI Education',
      image: '/7.SAWIT.AI.png',
      status: 'completed'
    },
    {
      title: 'AI No-Code Workshop',
      date: '01-Mar-2025',
      description: 'Build Without Code. Think With AI.',
      image: '/8.AI NO CODE.jpg',
      status: 'completed'
    },
    {
      title: 'App Testing at Student Tribe HQ',
      date: '02-Mar-2025',
      description: 'Hands-On Learning in Real Time',
      image: '/9.app testing at student tribe.jpg',
      status: 'completed'
    },
    {
      title: 'Prompt Techies x Crypto Wala',
      date: '22-Jun-2025',
      description: 'Tech Synergy: AI Meets Blockchain',
      image: '/10. prompt techies x crypto wala.jpg',
      status: 'completed'
    },
     {
      title: 'Google Gemini Workshop & Influencer Talk',
      date: '30th August 2025',
      description: 'The Gemini Era',
      image: '/4.png',
      status: 'completed'
    },
    {
      title: 'GEN AI  Workshop ',
      date: '15th September 2025',
      description: 'AI Era',
      image: '/5.png',
      status: 'completed'
    },
    {
      title: 'AI Workshop by Microsoft Copilot',
      date: '19th September 2025',
      description: 'Empowering Productivity with AI',
      image: '/6.png',
      status: 'completed'
    },
    {
      title: 'ATEDD AI',
      date: '25th October',
      description: 'Advancing Technology Education',
      image: '/7.png',
      status: 'completed'
    },
    {
      title: 'TALENT HUNT – Pre-Event for Summit',
      date: ' 29th October',
      description: 'Discovering Tomorrow\'s Leaders',
      image: '/8.png',
      status: 'completed'
    },
    {
      title: 'MUSIC HUNT – Pre-Event for Summit',
      date: '30th October',
      description: 'Where Rhythm Meets Innovation',
      image: '/jbit_prompt_techies_(3).png',
      status: 'completed'
    },
    {
      title: 'UNDER 25 SUMMIT AT CAMPUS – CMRIT HYDERABAD',
      date: ' 1st NOVEMBER',
      description: 'Youth-Driven Innovation and Leadership',
      image: '/10.png',
      status: 'completed'
    }
  ];

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-6">
            Our <span className="text-neon-blue">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our journey through innovative events, workshops, and collaborations that shape the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card overflow-hidden group h-full p-6">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    event.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                  }`}>
                    {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.h3 
                    className="font-orbitron font-bold text-xl text-white group-hover:text-neon-blue transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {event.title}
                  </motion.h3>
                  
                  <div className="flex items-center space-x-2 text-neon-blue">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-neon-blue"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">More exciting events coming soon...</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;