import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock, ChefHat, Star } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cinta Kuliner',
      description: 'Kami mencintai setiap proses memasak dan menyajikan hidangan terbaik untuk Anda'
    },
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Menggunakan bahan-bahan segar dan berkualitas tinggi untuk setiap hidangan'
    },
    {
      icon: Users,
      title: 'Pelayanan Ramah',
      description: 'Tim kami selalu siap melayani dengan senyuman dan keramahan yang tulus'
    },
    {
      icon: ChefHat,
      title: 'Resep Autentik',
      description: 'Mempertahankan cita rasa asli dengan resep turun-temurun yang telah teruji'
    }
  ];

  const team = [
    {
      name: 'Ibu Suratmi (Mae)',
      role: 'Pemilik & Head Chef',
      avatar: '👩‍🍳',
      description: 'Pendiri Kedai Mae dengan pengalaman memasak lebih dari 20 tahun'
    },
    {
      name: 'Ibu Suratmi',
      role: 'Sous Chef',
      avatar: '👨‍🍳',
      description: 'Ahli masakan tradisional dengan keahlian khusus dalam bumbu rempah'
    },
    {
      name: 'Mbak Lingga Fani',
      role: 'Manager Operasional',
      avatar: '👩‍💼',
      description: 'Mengatur operasional harian dan memastikan kualitas pelayanan terbaik'
    },
    {
      name: 'Mas Ga Tu',
      role: 'Customer Service',
      avatar: '👨‍💼',
      description: 'Siap membantu dan melayani kebutuhan pelanggan dengan ramah'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Berdirinya Kedai Mae',
      description: 'Memulai usaha kuliner dengan 5 menu andalan'
    },
    {
      year: '2021',
      title: 'Ekspansi Menu',
      description: 'Menambah variasi menu hingga 30 pilihan hidangan'
    },
    {
      year: '2023',
      title: 'Renovasi Kedai',
      description: 'Memperluas tempat dan meningkatkan kenyamanan pelanggan'
    },
    {
      year: '2024',
      title: 'Layanan Online',
      description: 'Memulai layanan pemesanan online dan delivery'
    },
    {
      year: '2025',
      title: 'Website Resmi',
      description: 'Meluncurkan website resmi untuk kemudahan pemesanan'
    }
  ];

  return (
    <div className="min-h-screen bg-primary-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-cream to-primary-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-3 bg-primary-brown/10 text-primary-brown rounded-full text-sm font-semibold mb-6">
              🏪 Cerita Kami
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-brown mb-6">
              Tentang Kedai Mae
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brown-600 max-w-3xl mx-auto">
              Perjalanan kuliner yang dimulai dari cinta terhadap cita rasa autentik Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-brown mb-4 sm:mb-6">
              Cerita Dimulai dari Dapur Rumah
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-brown-600 leading-relaxed">
                Kedai Mae didirikan pada tahun 2020 oleh Ibu Suratmi, seorang ibu rumah tangga yang memiliki 
                passion besar terhadap kuliner tradisional Indonesia. Berawal dari hobi memasak untuk keluarga, 
                Ibu Suratmi kemudian memutuskan untuk berbagi kelezatan masakan rumahnya kepada masyarakat luas.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-brown-600 leading-relaxed">
                Dengan modal nekat dan resep turun-temurun dari neneknya, Kedai Mae memulai perjalanan 
                dari sebuah warung kecil dengan 5 menu andalan. Kini, setelah lebih dari 13 tahun beroperasi, 
                Kedai Mae telah menjadi destinasi kuliner favorit dengan lebih dari 50 pilihan menu autentik.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-brown-600 leading-relaxed">
                Komitmen kami adalah menyajikan makanan berkualitas tinggi dengan cita rasa yang konsisten, 
                menggunakan bahan-bahan segar pilihan, dan tetap mempertahankan resep asli yang telah 
                menjadi ciri khas Kedai Mae.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-cream to-primary-gray rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center text-primary-brown transform -rotate-3">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-brown to-brown-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-white text-4xl">🏪</span>
                  </div>
                  <p className="text-2xl font-bold">Kedai Mae</p>
                  <p className="text-brown-600 text-lg">Sejak 2020</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-brown rounded-full flex items-center justify-center shadow-xl">
                <span className="text-primary-white text-2xl">❤️</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary-cream to-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-brown mb-4 sm:mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brown-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap pelayanan dan hidangan yang kami sajikan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-primary-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-brown to-brown-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="text-primary-white" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-brown mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-brown-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-brown mb-4 sm:mb-6">
              Perjalanan Kami
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brown-600 max-w-3xl mx-auto">
              Milestone penting dalam perjalanan Kedai Mae dari masa ke masa
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-brown/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-primary-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-primary-gray/10">
                      <div className="text-xl sm:text-2xl font-bold text-primary-brown mb-2">{milestone.year}</div>
                      <h3 className="text-lg sm:text-xl font-semibold text-primary-brown mb-2 sm:mb-3">{milestone.title}</h3>
                      <p className="text-brown-600 text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary-brown rounded-full border-4 border-primary-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-cream to-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-brown mb-4 sm:mb-6">
              Tim Kedai Mae
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brown-600 max-w-3xl mx-auto">
              Orang-orang hebat di balik kelezatan setiap hidangan yang kami sajikan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-primary-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-brown to-brown-800 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl">{member.avatar}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-brown mb-1">{member.name}</h3>
                <p className="text-primary-brown font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-brown-600 text-xs sm:text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Clock, label: 'Tahun Pengalaman', value: '13+' },
              { icon: Users, label: 'Pelanggan Puas', value: '1000+' },
              { icon: ChefHat, label: 'Menu Pilihan', value: '50+' },
              { icon: Star, label: 'Rating Rata-rata', value: '4.8★' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 sm:p-6 bg-primary-white rounded-xl sm:rounded-2xl shadow-lg border border-primary-gray/10"
                >
                  <Icon className="mx-auto mb-2 sm:mb-3 text-primary-brown" size={24} />
                  <div className="text-2xl sm:text-3xl font-bold text-primary-brown mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-brown-600 font-medium text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;