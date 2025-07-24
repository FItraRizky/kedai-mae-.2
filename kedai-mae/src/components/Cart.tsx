import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    state,
    removeItem,
    updateQuantity,
    clearCart,
    closeCart,
    formatPrice,
    generateWhatsAppMessage
  } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp kedai
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeCart}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-primary-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-gray/20">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-primary-brown" size={24} />
                <h2 className="text-2xl font-bold text-primary-brown">Keranjang</h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-primary-cream rounded-lg transition-colors duration-200"
              >
                <X className="text-primary-brown" size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="text-primary-gray mb-4" size={64} />
                  <h3 className="text-xl font-semibold text-primary-brown mb-2">
                    Keranjang Kosong
                  </h3>
                  <p className="text-primary-gray">
                    Tambahkan menu favorit Anda ke keranjang
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-primary-cream rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-2xl">{item.emoji}</span>
                            <h3 className="font-semibold text-primary-brown">
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-sm text-brown-600 mb-2">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 rounded-lg transition-colors duration-200 text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-primary-white rounded-lg transition-colors duration-200 text-primary-brown"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold text-primary-brown w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-primary-white rounded-lg transition-colors duration-200 text-primary-brown"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="font-bold text-primary-brown">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-primary-gray/20 p-6 space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between text-xl font-bold text-primary-brown">
                  <span>Total:</span>
                  <span>{formatPrice(state.total)}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>Pesan via WhatsApp</span>
                  </motion.button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-300"
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;