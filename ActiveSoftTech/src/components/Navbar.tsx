import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Menu, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Courses', value: 'courses' },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Active<span className="text-brand-blue">SoftTech</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  currentPage === item.value ? 'text-brand-blue' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                    currentPage === item.value ? 'bg-brand-blue/5 text-brand-blue' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
