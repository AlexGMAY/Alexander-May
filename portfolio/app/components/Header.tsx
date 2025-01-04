'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white">
      <motion.h1
        className="text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Merveille.
      </motion.h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/about" className="hover:text-secondary">
          About
        </a>        
        <a href="/services" className="hover:underline">
          Services
        </a>
        <a href="/projects" className="hover:underline">
          Projects
        </a>
        <a href="/blog" className="hover:text-secondary">
          Blog          
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-gray-800 p-2 rounded hover:bg-gray-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}
