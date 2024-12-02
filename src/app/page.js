'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsCourses from './components/SkillsCourses';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleScreenClick = () => {
    setShowMainContent(true);
  };

  return (
    <div className="font-sans">
      <title>Michael's Portfolio Page</title>
      <Sidebar />
      {!showMainContent && <Hero onScreenClick={handleScreenClick} />}
      {showMainContent && (
        <main className="md:ml-64 md:pl-0 pl-0">
          <About />
          <Experience />
          <SkillsCourses />
          <Projects />
          <Contact />
        </main>
      )}
    </div>
  );
}
