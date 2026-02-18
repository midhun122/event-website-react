import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Sparkles, Zap, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768590149213-8ab16aaf7511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3MTM5NDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tech Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/90 to-gray-950" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-transparent rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/30 via-pink-500/30 to-transparent rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" 
        />

        {/* Floating particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm shadow-lg shadow-purple-500/20"
          >
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text font-semibold">March 15-17, 2026</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 leading-tight"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(168, 85, 247, 0.5)",
                "0 0 40px rgba(236, 72, 153, 0.5)",
                "0 0 20px rgba(251, 146, 60, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.5)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              TechFest
            </span>
            <br />
            <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              2026
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Where <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Innovation</span> Meets{' '}
            <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text">Excellence</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              onClick={scrollToRegister}
              className="relative px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/50 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white rounded-2xl font-bold text-lg border-2 border-purple-400/30 hover:border-purple-400 hover:bg-white/20 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events
            </motion.button>
          </motion.div>

          {/* Info Cards with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Calendar, title: '3 Days', subtitle: 'March 15-17, 2026', color: 'from-purple-500 to-pink-500' },
              { icon: MapPin, title: 'Main Campus', subtitle: 'University Auditorium', color: 'from-pink-500 to-orange-500' },
              { icon: Users, title: '2000+ Participants', subtitle: 'From 100+ Colleges', color: 'from-orange-500 to-purple-500' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 group hover:scale-105 transition-all duration-300 shadow-xl"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-2xl transition-all duration-300" />
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/50`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div 
          className="w-8 h-14 border-3 border-purple-400/50 rounded-full flex justify-center relative shadow-lg shadow-purple-500/30"
          animate={{ boxShadow: ["0 0 20px rgba(168, 85, 247, 0.3)", "0 0 40px rgba(236, 72, 153, 0.5)", "0 0 20px rgba(168, 85, 247, 0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-3"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
