import { motion } from 'motion/react';
import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Начало', href: '/' },
    { name: 'За нас', href: '/about' },
    { name: 'Продукти', href: '/products' },
    { name: 'Галерия', href: '/gallery' },
    { name: 'Отзиви', href: '/testimonials' },
    { name: 'Магазини', href: '/locations' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-stone-950/90 backdrop-blur-md z-50 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="font-serif text-2xl font-bold text-stone-50 tracking-wider">
              АЯКС
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-stone-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/locations"
              className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 rounded-sm transition-colors text-sm font-medium tracking-wide uppercase"
            >
              <MapPin className="w-4 h-4" />
              Намери ни
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-stone-900 border-b border-stone-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-300 hover:text-white hover:bg-stone-800 uppercase tracking-wide rounded-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
