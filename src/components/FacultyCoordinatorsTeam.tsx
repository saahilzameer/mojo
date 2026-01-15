import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, GraduationCap, Users } from 'lucide-react';

const FacultyCoordinators: React.FC = () => {
  const faculty = [
   {
  name: "Asst Prof. M.N. Sai Suvarna Kumar",
  department: "CSM Department", 
  role: "Faculty Coordinator",
  image: "/images/sai.jpg",
  email: "sai.suvarna@cmrithyderabad.edu.in",
  linkedin: "#",
  color: "from-blue-400 to-indigo-500"
},
{
  name: "Asst Prof. K.Priyanka",
  department: "CSE Department",
  role: "Faculty Coordinator",
  image: "/images/mam.jpg",
  email: "priyanka@cmrithyderabad.edu.in",
  linkedin: "#",
  color: "from-emerald-400 to-teal-500"
}
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-purple-500/5"></div>
      <div className="grid-bg absolute inset-0 opacity-10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-purple-500/20 px-6 py-2 rounded-full border border-neon-blue/30 mb-6">
            <GraduationCap size={16} className="text-neon-blue" />
            <span className="text-neon-blue font-semibold text-sm">👨‍🏫 FACULTY GUIDANCE</span>
            <GraduationCap size={16} className="text-neon-blue" />
          </div>

          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-6">
            Faculty <span className="text-neon-blue">Coordinators</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Guiding our club with expertise and mentorship, our dedicated faculty coordinators 
            provide invaluable support and direction to help us achieve excellence.
          </p>
        </motion.div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="glass-card group relative overflow-hidden p-8 text-center hover:border-neon-blue transition-all duration-500"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Profile Image */}
                <motion.div
                  className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-neon-blue/30 group-hover:border-neon-blue transition-all duration-500 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Floating Icon Badge */}
                  <motion.div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center border-4 border-dark-bg shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users size={24} className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <motion.h3 
                    className="font-orbitron font-bold text-2xl text-white group-hover:text-neon-blue transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <div className="space-y-2">
                    <p className="text-neon-blue font-semibold text-lg">
                      {member.department}
                    </p>
                    <p className="text-gray-400 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-4 pt-6">
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center w-12 h-12 bg-neon-blue/20 hover:bg-neon-blue text-neon-blue hover:text-white rounded-full transition-all duration-300 border border-neon-blue/30 hover:border-neon-blue group/icon"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      title={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </motion.a>

                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full transition-all duration-300 border border-blue-600/30 hover:border-blue-600"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      title={`LinkedIn Profile`}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-4"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <GraduationCap size={24} className="text-neon-blue" />
              <span className="text-lg text-gray-300 font-medium">
                Mentoring the next generation of tech innovators
              </span>
              <GraduationCap size={24} className="text-neon-blue" />
            </motion.div>
            
            <p className="text-gray-400 text-sm">
              Our faculty coordinators bring years of academic excellence and industry experience 
              to guide Prompt Techies towards achieving our vision of technological innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultyCoordinators;