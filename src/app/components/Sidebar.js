'use client';

import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen bg-blue-900 text-white flex-col py-6 space-y-8 w-64">
        <h1 className="text-2xl font-bold text-center"><a href={'#about'}>Michael Yilma</a></h1>
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

      {/* Mobile navigation */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-blue-900 text-white flex items-center justify-between px-4 py-3 z-50">
        <h1 className="text-lg font-bold">Michael Yilma</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed top-12 left-0 w-full bg-blue-800 text-white z-40">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
            {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
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
      )}
    </>
  );
};

export default Sidebar;
