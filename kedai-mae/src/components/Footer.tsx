import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    menu: [
      { name: 'Beranda', path: '/' },
      { name: 'Menu', path: '/menu' },
      { name: 'Tentang Kami', path: '/about' },
      { name: 'Kontak', path: '/contact' }
    ],
    categories: [
      { name: 'Makanan Berat', path: '/menu?category=makanan-berat' },
      { name: 'Makanan Ringan', path: '/menu?category=makanan-ringan' },
      { name: 'Minuman', path: '/menu?category=minuman' }
    ],
    social: [
      { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/kedaimae' },
      { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/kedaimae' },
      { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/kedaimae' }
    ]
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Jl. Malioboro No. 123, Yogyakarta'
    },
    {
      icon: Phone,
      text: '+62 812-3456-7890'
    },
    {
      icon: Mail,
      text: 'info@kedaimae.com'
    },
    {
      icon: Clock,
      text: 'Senin - Minggu: 08:00 - 22:00'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-brown to-brown-900 text-primary-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-white rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-primary-brown">🍽️</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-white">Kedai Mae</h3>
                <p className="text-brown-200 text-xs sm:text-sm">Cita Rasa Autentik</p>
              </div>
            </div>
            <p className="text-brown-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Kedai Mae menghadirkan cita rasa autentik Indonesia dengan sentuhan modern. 
              Nikmati pengalaman kuliner yang tak terlupakan bersama keluarga dan teman.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              {footerLinks.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-white/10 hover:bg-primary-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Icon size={16} className="sm:w-5 sm:h-5 text-brown-200 group-hover:text-primary-white transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-bold text-primary-white mb-4 sm:mb-6">Menu Utama</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.menu.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-brown-200 hover:text-primary-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-brown-400 rounded-full mr-3 group-hover:bg-primary-white transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-bold text-primary-white mb-4 sm:mb-6">Kategori Menu</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="text-brown-200 hover:text-primary-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-brown-400 rounded-full mr-3 group-hover:bg-primary-white transition-colors duration-300"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-bold text-primary-white mb-4 sm:mb-6">Kontak Kami</h4>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px] text-brown-300 mt-1 flex-shrink-0" />
                    <span className="text-brown-200 text-xs sm:text-sm leading-relaxed">{info.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/6281234567890?text=Halo%20Kedai%20Mae,%20saya%20ingin%20bertanya%20tentang%20menu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
            >
              💬 Chat WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-brown-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-bold text-primary-white mb-2">Dapatkan Update Terbaru</h4>
            <p className="text-brown-200 mb-6">Berlangganan newsletter kami untuk mendapatkan info promo dan menu terbaru</p>
            
            <div className="max-w-md mx-auto flex space-x-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-white/10 border border-brown-600 text-primary-white placeholder-brown-300 focus:outline-none focus:ring-2 focus:ring-primary-white/30 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-white text-primary-brown px-6 py-3 rounded-lg font-semibold hover:bg-brown-100 transition-colors duration-300"
              >
                Berlangganan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-brown-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-brown-200 text-sm"
            >
              <span>© {currentYear} Kedai Mae. Dibuat dengan</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>di Yogyakarta</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-brown-200 text-sm"
            >
              <a href="#" className="hover:text-primary-white transition-colors duration-300">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-primary-white transition-colors duration-300">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-primary-white transition-colors duration-300">
                FAQ
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;