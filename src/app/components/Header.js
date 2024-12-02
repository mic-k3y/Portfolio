'use client';

import { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`fixed w-full z-20 shadow-md transition-all duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-red-500 transition-colors">
            Michael Yilma
          </a>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full border ${
            darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-100'
          } transition-all`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
