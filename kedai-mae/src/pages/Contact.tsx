import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Malioboro No. 123\nYogyakarta, DIY 55271',
      action: 'Lihat di Maps',
      actionUrl: 'https://maps.google.com/?q=Jl.+Malioboro+No.+123+Yogyakarta'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '(0274) 123-4567\n+62 812-3456-7890',
      action: 'Hubungi Sekarang',
      actionUrl: 'tel:+6281234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@kedaimae.com\norder@kedaimae.com',
      action: 'Kirim Email',
      actionUrl: 'mailto:info@kedaimae.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+62 812-3456-7890\nChat langsung untuk pemesanan',
      action: 'Chat WhatsApp',
      actionUrl: 'https://wa.me/6281234567890?text=Halo%20Kedai%20Mae,%20saya%20ingin%20bertanya%20tentang%20menu'
    }
  ];

  const operatingHours = [
    { day: 'Senin', hours: '08:00 - 22:00' },
    { day: 'Selasa', hours: '08:00 - 22:00' },
    { day: 'Rabu', hours: '08:00 - 22:00' },
    { day: 'Kamis', hours: '08:00 - 22:00' },
    { day: 'Jumat', hours: '08:00 - 22:00' },
    { day: 'Sabtu', hours: '08:00 - 23:00' },
    { day: 'Minggu', hours: '08:00 - 23:00' }
  ];

  const handleDirections = () => {
    window.open('https://maps.google.com/dir//Jl.+Malioboro+No.+123+Yogyakarta', '_blank');
  };

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
              📞 Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-brown mb-6">
              Kontak & Lokasi
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Kami siap melayani Anda. Jangan ragu untuk menghubungi kami untuk reservasi atau pertanyaan lainnya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-primary-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-primary-gray/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-brown to-brown-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-brown mb-3">{info.title}</h3>
                  <p className="text-brown-600 mb-4 whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                  <a
                    href={info.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-brown hover:bg-brown-800 text-primary-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    {info.action}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map and Hours Section */}
      <section className="py-20 bg-gradient-to-br from-primary-cream to-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                  Lokasi Kami
                </h2>
                <p className="text-lg text-brown-600 mb-6">
                  Kedai Mae berlokasi strategis di jantung kota Bandar Lampung, mudah dijangkau dengan berbagai transportasi.
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9999999999995!2d110.36500000000001!3d-7.7956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14f4c1234567%3A0x1234567890abcdef!2sJl.%20Malioboro%2C%20Yogyakarta!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80"
                ></iframe>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDirections}
                className="w-full bg-primary-brown hover:bg-brown-800 text-primary-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Navigation size={20} />
                <span>Dapatkan Arah ke Kedai Mae</span>
              </motion.button>
            </motion.div>

            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                  Jam Operasional
                </h2>
                <p className="text-lg text-brown-600 mb-6">
                  Kami buka setiap hari untuk melayani Anda dengan hidangan lezat dan pelayanan terbaik.
                </p>
              </div>

              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-primary-gray/10">
                <div className="flex items-center mb-6">
                  <Clock className="text-primary-brown mr-3" size={24} />
                  <h3 className="text-xl font-bold text-primary-brown">Jadwal Buka</h3>
                </div>
                
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => {
                    const isWeekend = schedule.day === 'Sabtu' || schedule.day === 'Minggu';
                    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
                    const isToday = schedule.day === today;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors duration-200 ${
                          isToday 
                            ? 'bg-primary-brown text-primary-white' 
                            : 'bg-primary-cream hover:bg-primary-gray'
                        }`}
                      >
                        <span className={`font-medium ${
                          isToday ? 'text-primary-white' : 'text-primary-brown'
                        }`}>
                          {schedule.day}
                          {isToday && <span className="ml-2 text-sm">(Hari Ini)</span>}
                        </span>
                        <span className={`font-semibold ${
                          isToday ? 'text-primary-white' : isWeekend ? 'text-green-600' : 'text-brown-600'
                        }`}>
                          {schedule.hours}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-green-700 font-medium">Sedang Buka</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    Kami siap melayani pesanan Anda sekarang!
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-primary-gray/10">
                <h3 className="text-xl font-bold text-primary-brown mb-4">Kontak Cepat</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Kedai%20Mae,%20saya%20ingin%20memesan%20makanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group"
                  >
                    <MessageCircle className="text-green-600 group-hover:scale-110 transition-transform duration-200" size={20} />
                    <div>
                      <div className="font-medium text-green-700">WhatsApp</div>
                      <div className="text-sm text-green-600">Pesan langsung via chat</div>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group"
                  >
                    <Phone className="text-blue-600 group-hover:scale-110 transition-transform duration-200" size={20} />
                    <div>
                      <div className="font-medium text-blue-700">Telepon</div>
                      <div className="text-sm text-blue-600">Hubungi untuk reservasi</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6">
              Pertanyaan Umum
            </h2>
            <p className="text-xl text-brown-600">
              Jawaban untuk pertanyaan yang sering diajukan pelanggan
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Apakah Kedai Mae menyediakan layanan delivery?',
                answer: 'Ya, kami menyediakan layanan delivery melalui WhatsApp dan berbagai platform online. Minimum order untuk delivery adalah Rp 50.000.'
              },
              {
                question: 'Bisakah melakukan reservasi tempat?',
                answer: 'Tentu saja! Anda bisa melakukan reservasi melalui telepon atau WhatsApp. Kami merekomendasikan reservasi terutama untuk weekend dan hari libur.'
              },
              {
                question: 'Apakah tersedia menu vegetarian?',
                answer: 'Ya, kami memiliki beberapa pilihan menu vegetarian seperti Gado-Gado, Pecel, dan berbagai sayuran. Silakan tanyakan kepada staff kami untuk rekomendasi.'
              },
              {
                question: 'Bagaimana cara pembayaran yang diterima?',
                answer: 'Kami menerima pembayaran tunai, transfer bank, e-wallet (GoPay, OVO, DANA), dan kartu debit/kredit.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-white rounded-2xl p-6 shadow-lg border border-primary-gray/10"
              >
                <h3 className="text-lg font-bold text-primary-brown mb-3">{faq.question}</h3>
                <p className="text-brown-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;