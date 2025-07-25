import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { MenuItem } from '../context/CartContext';
import { getMenuByCategory, searchMenu } from '../data/menuData';
import Footer from '../components/Footer';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem, formatPrice } = useCart();

  const categories = [
    { id: 'semua', name: 'Semua Menu', emoji: '🍽️' },
    { id: 'makanan-berat', name: 'Makanan Berat', emoji: '🍛' },
    { id: 'makanan-ringan', name: 'Makanan Ringan', emoji: '🍌' },
    { id: 'minuman', name: 'Minuman', emoji: '🧊' }
  ];

  const filteredMenu = useMemo(() => {
    let result = getMenuByCategory(selectedCategory);
    if (searchQuery) {
      result = searchMenu(searchQuery).filter(item => 
        selectedCategory === 'semua' || item.category === selectedCategory
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    // Optional: Show toast notification
  };

  return (
    <div className="min-h-screen bg-primary-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-cream to-primary-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-3 bg-primary-brown/10 text-primary-brown rounded-full text-sm font-semibold mb-6">
              🍽️ Menu Lengkap
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-brown mb-6">
              Menu Kedai Mae
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brown-600 max-w-3xl mx-auto">
              Jelajahi berbagai pilihan menu lezat dengan cita rasa autentik Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-primary-white border-b border-primary-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full md:flex-1 max-w-md"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400" size={20} />
              <input
                type="text"
                placeholder="Cari menu favorit Anda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2 sm:py-3 border border-primary-gray/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-brown/20 focus:border-primary-brown transition-all duration-300 text-sm sm:text-base"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 justify-center md:justify-start"
            >
              <Filter className="text-primary-brown mr-2 flex-shrink-0" size={20} />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-xs sm:text-sm ${
                    selectedCategory === category.id
                      ? 'bg-primary-brown text-primary-white shadow-lg'
                      : 'bg-primary-cream text-primary-brown hover:bg-primary-gray'
                  }`}
                >
                  <span>{category.emoji}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="text-brown-600">
              Menampilkan {filteredMenu.length} menu
              {searchQuery && ` untuk "${searchQuery}"`}
              {selectedCategory !== 'semua' && ` dalam kategori ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </motion.div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            {filteredMenu.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              >
                {filteredMenu.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group bg-primary-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary-gray/10"
                  >
                    {/* Menu Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-lg sm:text-2xl">{item.emoji}</span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">

                      {/* Menu Info */}
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base sm:text-lg font-bold text-primary-brown group-hover:text-brown-700 transition-colors duration-300 line-clamp-2">
                            {item.name}
                          </h3>
                        </div>
                        <div className="mb-3">
                          <span className="text-lg sm:text-xl font-bold text-primary-brown bg-primary-cream px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <p className="text-brown-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddToCart(item)}
                        className="w-full bg-gradient-to-r from-primary-brown to-brown-700 hover:from-brown-700 hover:to-brown-800 text-primary-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart size={18} />
                        <span>Tambah ke Keranjang</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-primary-brown mb-2">
                  Menu Tidak Ditemukan
                </h3>
                <p className="text-brown-600 mb-6">
                  Maaf, tidak ada menu yang sesuai dengan pencarian Anda.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('semua');
                  }}
                  className="bg-primary-brown hover:bg-brown-800 text-primary-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  Lihat Semua Menu
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;