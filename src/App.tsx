import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import FacultyCoordinatorsTeam from './components/FacultyCoordinatorsTeam';
import VibeTeam from './components/VibeTeam';
import CodingCommunity from './components/CodingCommunity';
import Events from './components/Events';
import FeaturedEvent from './components/FeaturedEvent';
import Tools from './components/Tools';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users } from 'lucide-react';

const App: React.FC = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar onTeamClick={() => setShowTeam(true)} />
      <Hero />
      <About />
      <FeaturedEvent />
      <Events />
      <Tools />
      <Partners />
      <Contact />
      <Chatbot />

      {/* Floating Team Button */}
      <motion.button
        onClick={() => setShowTeam(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-neon-blue to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Users size={24} />
      </motion.button>

      {/* Team Modal */}
      <AnimatePresence>
        {showTeam && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTeam(false)}
            />
            <motion.div
              className="fixed inset-4 md:inset-8 z-50 bg-dark-bg/95 backdrop-blur-md rounded-2xl border border-neon-blue/30 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <button
                onClick={() => setShowTeam(false)}
                className="sticky top-4 right-4 float-right m-4 p-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white rounded-full transition-all duration-300 z-10"
              >
                <X size={24} />
              </button>
              <div className="clear-both pt-8">
                {/* Faculty Coordinators Section */}
                <FacultyCoordinatorsTeam />

                {/* Divider */}
                <div className="my-8 max-w-5xl mx-auto border-t border-neon-blue/20" />

                {/* Original Team Component */}
                <Team />

                {/* Vibe Coding Crew Section */}
                <div className="mt-12">
                  <VibeTeam />
                </div>

                {/* Coding Community Section */}
                <div className="mt-12">
                  <CodingCommunity />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;