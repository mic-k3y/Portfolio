'use client';

import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed top-0 left-0 h-screen bg-blue-900 text-white flex flex-col py-6 space-y-8 w-64">
      <h1 className="text-2xl font-bold text-center">Michael Yilma</h1>
      <nav>
        <ul className="space-y-4 text-lg font-medium">
          {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`block px-4 py-2 ${
                  activeSection === item ? 'bg-yellow-400 text-blue-900 font-bold' : 'hover:text-yellow-400'
                } transition-colors`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
