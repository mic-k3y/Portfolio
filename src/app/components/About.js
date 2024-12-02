'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen bg-blue-50 text-blue-900 flex flex-col justify-center items-center px-6"
    >
      <div
        className={`max-w-4xl text-center transform transition-transform duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-justify">
        I am an undergraduate student pursuing a B.A. in Computer Science and B.A. in Mathematics at Colby College. 
        I am passionate about Software Engineering, Data Science, and Machine Learning and everything AI, and I am eager to apply my knowledge and skills to real-world challenges. 
        Feel free to connect if you'd like to discuss potential opportunities or collaborations!
        </p>
      </div>
    </section>
  );
};

export default About;
