import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Award, Users, ChefHat, Leaf, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';
import Footer from '../components/Footer';

const Home = () => {
  const { addItem, formatPrice } = useCart();

  const featuredMenus = menuData.slice(0, 3);

  const testimonials = [
    {
      id: 1,
      name: 'Sari Dewi',
      avatar: '👩',
      rating: 5,
      comment: 'Makanan di Kedai Mae sangat lezat! Rasa autentik Indonesia yang bikin kangen kampung halaman.'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      avatar: '👨',
      rating: 5,
      comment: 'Pelayanan ramah dan makanan selalu fresh. Gudegnya juara banget, recommended!'
    },
    {
      id: 3,
      name: 'Maya Putri',
      avatar: '👩‍🦱',
      rating: 5,
      comment: 'Tempat favorit untuk makan bareng keluarga. Harga terjangkau dengan kualitas premium.'
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'BAHAN ALAMI',
      description: 'Semua makanan kami dibuat dengan bahan-bahan segar dan alami tanpa pengawet buatan.'
    },
    {
      icon: Heart,
      title: 'DIBUAT DENGAN CINTA',
      description: 'Setiap hidangan diracik dengan penuh perhatian dan cinta oleh chef berpengalaman kami.'
    },
    {
      icon: Award,
      title: 'KUALITAS TERJAMIN',
      description: 'Kami berkomitmen memberikan kualitas terbaik dengan cita rasa autentik Indonesia.'
    }
  ];

  const stats = [
    { icon: Clock, label: 'Tahun Pengalaman', value: '13+' },
    { icon: Users, label: 'Pelanggan Puas', value: '1000+' },
    { icon: ChefHat, label: 'Menu Pilihan', value: '50+' },
    { icon: Award, label: 'Rating', value: '4.8★' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simply Chocolate Inspired */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%238B4513%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M20%2020c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010zm10%200c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.span 
                className="inline-block px-6 py-3 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6 border border-amber-200"
              >
                HANDMADE IN INDONESIA
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-amber-900"
              >
                Cita Rasa
                <br />
                <span className="text-amber-700">
                  Autentik
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-lg"
              >
                Di Kedai Mae, kami hanya menggunakan bahan-bahan alami dan segar, 
                menghindari pengawet buatan dan bahan kimia. Kami sangat selektif 
                dalam memilih bahan - kami hanya menggunakan yang terbaik dari alam.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link
                  to="/menu"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Lihat Menu
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Tentang Kami
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Dish */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                {featuredMenus.length > 0 && (
                  <>
                    <motion.img
                      src={featuredMenus[0].image}
                      alt={featuredMenus[0].name}
                      className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="mt-6 text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-2">{featuredMenus[0].name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4">{featuredMenus[0].description}</p>
                      <div className="text-2xl sm:text-3xl font-bold text-amber-700">{formatPrice(featuredMenus[0].price)}</div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-20"></div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-amber-100 rounded-full flex items-center justify-center">
                    <Icon className="text-amber-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-amber-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section - Simply Chocolate Inspired */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Komitmen Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan yang terbaik dalam setiap hidangan yang kami sajikan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-amber-600 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-4">Menu Pilihan Terbaik</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai hidangan lezat yang disiapkan dengan bahan-bahan segar dan bumbu pilihan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredMenus.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Menu image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-900">
                      {item.name}
                    </h3>
                    <span className="text-base sm:text-lg font-bold text-amber-700">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  <button
                    onClick={() => addItem(item)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base"
                  >
                    Tambah ke Keranjang
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Lihat Menu Lengkap
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Kata Pelanggan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami. Simak testimoni dari pelanggan setia Kedai Mae
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md border border-amber-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-amber-900">{testimonial.name}</h4>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;