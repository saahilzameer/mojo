import React from 'react';
import { motion } from 'framer-motion';
import './Cube3D.css';

const Cube3D: React.FC = () => {
  return (
    <div className="cube-container">
      <motion.div
        className="cube"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="cube-face front">AI</div>
        <div className="cube-face back">WEB</div>
        <div className="cube-face right">CODE</div>
        <div className="cube-face left">TECH</div>
        <div className="cube-face top">DEV</div>
        <div className="cube-face bottom">BUILD</div>
      </motion.div>
    </div>
  );
};

export default Cube3D;
