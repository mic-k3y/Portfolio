'use client';

import { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-full z-20 transition-all duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      } shadow-md`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <a href="#" className="hover:text-blue-500 transition-colors">
            Michael Yilma
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`hover:text-blue-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } transition-colors`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full border ${
            darkMode
              ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
              : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
          } transition-all duration-300`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-2">
            <div
              className={`h-0.5 w-6 transition-all ${
                darkMode ? 'bg-white' : 'bg-gray-900'
              } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            ></div>
            <div
              className={`h-0.5 w-6 transition-all ${
                darkMode ? 'bg-white' : 'bg-gray-900'
              } ${menuOpen ? 'opacity-0' : ''}`}
            ></div>
            <div
              className={`h-0.5 w-6 transition-all ${
                darkMode ? 'bg-white' : 'bg-gray-900'
              } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            ></div>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium hover:text-blue-500 transition-colors"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
