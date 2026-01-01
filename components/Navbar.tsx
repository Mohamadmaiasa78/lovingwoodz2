import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Onze Visie', path: '/about' },
    { name: 'Expertise', path: '/services' },
    { name: 'Realisaties', path: '/portfolio' },
    { name: 'Atelier', path: '/materials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[80] transition-all duration-700 ${isScrolled ? 'bg-[#2C221C]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-[0.4em] uppercase hover:opacity-70 transition-opacity text-white font-serif">
          Lovingwoodz
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:text-[#8F9779] ${
                location.pathname === link.path ? 'text-white border-b border-[#8F9779] pb-1' : 'text-white/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#2C221C] transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen border-t border-white/5 h-screen' : 'max-h-0'}`}>
        <div className="flex flex-col p-12 space-y-8 items-center pt-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif italic text-white/80 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;