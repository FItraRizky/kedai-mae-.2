import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Home, UtensilsCrossed, Info, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount, toggleCart } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  const navItems = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Menu', path: '/menu', icon: UtensilsCrossed },
    { name: 'Tentang', path: '/about', icon: Info },
    { name: 'Kontak', path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-primary-white/95 backdrop-blur-md shadow-lg border-b border-primary-gray/20 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-brown to-brown-800 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 shadow-lg"
            >
              <span className="text-primary-white font-bold text-lg sm:text-xl">K</span>
            </motion.div>
            <motion.h1
              whileHover={{ scale: 1.02 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-brown to-brown-700 bg-clip-text text-transparent"
            >
              Kedai Mae
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                    isActive(item.path)
                      ? 'bg-primary-brown text-primary-white shadow-lg'
                      : 'text-primary-brown hover:bg-primary-cream hover:text-brown-800'
                  }`}
                >
                  <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className="relative p-2 sm:p-3 bg-primary-brown text-primary-white rounded-lg sm:rounded-xl shadow-lg hover:bg-brown-800 transition-colors duration-300"
            >
              <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary-brown hover:bg-primary-cream rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-primary-gray/20"
            >
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-primary-brown text-primary-white'
                          : 'text-primary-brown hover:bg-primary-cream'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;