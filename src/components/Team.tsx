import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Settings, Palette, Brain, Megaphone, Users, FileText, Code, Lightbulb, UserCheck, Wrench, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const teamCategories = [
    {
      title: '👑 CORE HEADS', 
      members: [
        {
          name: 'Kiran Thalari',
          role: 'President',
          image: '/images/Kiran Thalari.jpg',
          icon: Crown,
          color: 'from-yellow-400 to-orange-500',
          linkedin: 'https://www.linkedin.com/in/kiran-thalari'
        },
        {
          name: 'Varshitha Reddy',
          role: 'Vice President',
          image: '/images/Varshitha Reddy.jpg',
          icon: Star,
          color: 'from-purple-400 to-pink-500',
          linkedin: 'https://www.linkedin.com/in/varshitha-reddy'
        },
        {
          name: 'Srita Vakiti',
          role: 'Secretary General',
          image: '/Srita Vakiti.jpg',
          icon: UserCheck,
          color: 'from-rose-400 to-pink-500',
          linkedin: 'https://www.linkedin.com/in/srita-vakiti'
        },
        {
          name: 'Saahil Zameer Shaik',
          role: 'Growth Head & CEO',
          image: '/saahil.jpg.jpg',
          icon: Crown,
          color: 'from-emerald-400 to-teal-500',
          linkedin: 'https://www.linkedin.com/in/saahil-zameer'
        }
      ]
    },
    {
      title: '🖥️ DIGITAL TEAM',
      members: [
        {
          name: 'Neeraj Ram',
          role: 'Digital Maven',
          image: "/image.png",
          icon: Settings,
          color: 'from-pink-400 to-rose-500',
          linkedin: 'https://www.linkedin.com/in/jyothi-swaroop'
        },
        {
          name: 'Muhammad Zaid',
          role: 'Digital Maven',
          image: '/zaid.jpg.jpg',
          icon: Settings,
          color: 'from-cyan-400 to-teal-500',
          linkedin: 'https://www.linkedin.com/in/muhammad-zaid'
        },
        {
          name: 'Lakshmi Prasanna',
          role: 'Digital Maven',
          image: '/prasanna.jpg.png',
          icon: Settings,
          color: 'from-emerald-400 to-green-500',
          linkedin: 'https://www.linkedin.com/in/lakshmi-prasanna'
        }
      ]
    },
    {
      title: '🎨 DESIGN TEAM',
      members: [
        {
          name: 'Bhavya sree',
          role: 'Pixel Pals',
          image: '/jbit prompt techies (10) copy.png',
          icon: Palette,
          color: 'from-red-400 to-pink-500',
          linkedin: 'https://www.linkedin.com/in/harsha-vardhan'
        },
        {
          name: 'Nara Sai Deepak',
          role: 'Pixel Pals',
          image: '/deepak.jpg.jpg',
          icon: Palette,
          color: 'from-orange-400 to-red-500',
          linkedin: 'https://www.linkedin.com/in/nara-sai-deepak'
        },
        {
          name: 'Jaya Shree',
          role: 'Graphic Designer',
          image: '/JAYASHREE.jpg',
          icon: Palette,
          color: 'from-purple-400 to-indigo-500',
          linkedin: 'https://www.linkedin.com/in/jaya-shree'
        }
      ]
    },
    {
      title: '🧠 AI DIVISION',
      members: [
        {
          name: 'Ravi Kiran Kandregula',
          role: 'Chat GPT Lead',
          image: '/ravi.jpg.png',
          icon: Brain,
          color: 'from-orange-400 to-red-500',
          linkedin: 'https://www.linkedin.com/in/ravi-kiran-kandregula'
        },
        {
          name: 'Neeli Vaishnavi',
          role: 'AI Lead',
          image: '/vaishnavi.jpg.jpg',
          icon: Brain,
          color: 'from-blue-500 to-purple-500',
          linkedin: 'https://www.linkedin.com/in/neeli-vaishnavi'
        },
        {
          name: 'Sriya Kandukuri',
          role: 'Tech Lead (AI Specialist)',
          image: '/sriya.jpg.jpg',
          icon: Brain,
          color: 'from-emerald-400 to-blue-500',
          linkedin: 'https://www.linkedin.com/in/sriya-kandukuri'
        },
        {
          name: 'Sai Medh',
          role: 'AI Agent Lead',
          image: '/Saimedh.jpg',
          icon: Brain,
          color: 'from-indigo-400 to-purple-500',
          linkedin: 'https://www.linkedin.com/in/sai-medh'
        }
      ]
    },
    {
      title: '📢 PUBLIC RELATIONS & CREATIVE',
      members: [
        {
          name: 'Yashwanth Kumar',
          role: 'Logistics Head',
          image: '/yashwanth.jpg.jpg',
          icon: Users,
          color: 'from-indigo-400 to-purple-500',
          linkedin: 'https://www.linkedin.com/in/yashwanth-kumar'
        },
        {
          name: 'Manaswini Reddy',
          role: 'Public Relations Lead',
          image: '/manaswini.jpg.jpg',
          icon: Megaphone,
          color: 'from-green-400 to-emerald-500',
          linkedin: 'https://www.linkedin.com/in/manaswini-reddy'
        },
        {
          name: 'Durga Prasad',
          role: 'Creative Committee',
          image: '/durga.jpg.jpg',
          icon: Lightbulb,
          color: 'from-amber-400 to-orange-500',
          linkedin: 'https://www.linkedin.com/in/durga-prasad'
        },
        {
          name: 'Chandu',
          role: 'Creative Committee',
          image: '/chandu.jpg.png',
          icon: Lightbulb,
          color: 'from-amber-400 to-orange-500',
          linkedin: 'https://www.linkedin.com/in/chandu'
        }
      ]
    },
    {
      title: '🧭 MANAGEMENT',
      members: [
        {
          name: 'Sheetal',
          role: 'Steering Committee',
          image: '/sheetal.jpg.jpg',
          icon: Wrench,
          color: 'from-violet-400 to-purple-500',
          linkedin: 'https://www.linkedin.com/in/sheetal'
        },
        {
          name: 'Navya Sree',
          role: 'Steering Committee',
          image: '/navya.jpg',
          icon: Wrench,
          color: 'from-violet-400 to-purple-500',
          linkedin: 'https://www.linkedin.com/in/navya-sree'
        },
        {
          name: 'Vyshali',
          role: 'Steering Committee',
          image: '/vyshali.jpg.png',
          icon: Wrench,
          color: 'from-cyan-400 to-teal-500',
          linkedin: 'https://www.linkedin.com/in/vyshali'
        }
      ]
    },
    {
      title: '⚙️ OPERATIONS & DEVELOPMENT',
      members: [
        {
          name: 'Mohan Gopi',
          role: 'HR',
          image: '/gopi.jpg.jpg',
          icon: UserCheck,
          color: 'from-green-400 to-emerald-500',
          linkedin: 'https://www.linkedin.com/in/mohan-gopi'
        },
        {
          name: 'Neeraj Ram',
          role: 'Documentation Head',
          image: 'jbit prompt techies (9) copy.png',
          icon: FileText,
          color: 'from-teal-400 to-blue-500',
          linkedin: 'https://www.linkedin.com/in/neeraj-ram'
        },
        {
          name: 'Harika',
          role: 'Treasurer',
          image: '/harika .jpg',
          icon: Code,
          color: 'from-blue-400 to-cyan-500',
          linkedin: 'https://www.linkedin.com/in/harika'
        },
        {
          name: 'G.V. Medha Sree',
          role: 'Code Crew',
          image: '/medha.jpg',
          icon: Code,
          color: 'from-blue-400 to-cyan-500',
          linkedin: 'https://www.linkedin.com/in/medha-sree'
        }
      ]
    }
  ];

  return (
    <section id="team" className="py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Team Heading - Only shows once */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-4">
            Prompt Techies <span className="text-neon-blue">Core Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind Prompt Techies, driving innovation and excellence
          </p>
        </motion.div>

        {/* Team Categories */}
        <div className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-neon-blue text-center mb-10 uppercase tracking-wider">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: memberIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-card text-center group relative overflow-hidden h-full p-6 hover:border-neon-blue transition-all duration-500 hover:shadow-lg hover:shadow-neon-blue/30">
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Profile Image */}
                      <motion.div
                        className="relative mb-6 z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-neon-blue/30 group-hover:border-neon-blue transition-all duration-500 shadow-lg group-hover:shadow-neon-blue/50">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + member.name;
                            }}
                          />
                        </div>
                        
                        {/* Icon Overlay */}
                        <motion.div
                          className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center border-4 border-dark-bg shadow-lg`}
                          whileHover={{ scale: 1.15, rotate: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <member.icon size={20} className="text-white" />
                        </motion.div>
                      </motion.div>

                      <div className="relative z-10">
                        <h4 className="font-orbitron font-semibold text-lg text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                          {member.name}
                        </h4>
                        
                        <p className="text-neon-blue/80 font-medium mb-6 text-sm group-hover:text-neon-blue transition-colors duration-300">
                          {member.role}
                        </p>

                        {/* LinkedIn Button */}
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full transition-all duration-300 border border-blue-600/30 hover:border-blue-600 shadow-md hover:shadow-blue-600/50"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;