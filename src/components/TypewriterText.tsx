import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 100, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-neon-blue">|</span>
    </span>
  );
};

export default TypewriterText;