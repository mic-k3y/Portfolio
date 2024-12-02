'use client';

import { useState, useEffect, useRef } from 'react';

const Hero = ({ onScreenClick }) => {
  const [text, setText] = useState('');
  const fullText = '  Hi, my name is Michael Yilma';
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length-1) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

//   useEffect(() => {
//     const cursorBlinkInterval = setInterval(() => {
//       setIsCursorVisible((prev) => !prev);
//     }, 500);

//     return () => clearInterval(cursorBlinkInterval);
//   }, []);

  const handleClick = () => {
    if (heroRef.current) {
      heroRef.current.classList.add('fade-out');
    }
    setTimeout(onScreenClick, 1500);
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center bg-blue-800 text-white text-center cursor-pointer relative"
      onClick={handleClick}
    >
      <h1 className="text-6xl font-bold">
        {text}
        {isCursorVisible && <span className="animate-blink">|</span>}
      </h1>
      <p className="absolute bottom-10 text-gray-400 animate-pulse">Click anywhere to continue</p>
    </div>
  );
};

export default Hero;
