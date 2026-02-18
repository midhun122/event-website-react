import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Award, Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovation and technical excellence among students by providing a platform to showcase their skills and creativity.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Why Participate',
      description: 'Compete with brilliant minds, win exciting prizes, network with industry experts, and gain exposure to cutting-edge technologies.',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'What to Expect',
      description: 'Technical competitions, workshops, guest lectures from industry leaders, and opportunities to collaborate on innovative projects.',
      gradient: 'from-orange-500 to-purple-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-purple-400 mx-auto" size={40} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">TechFest</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            TechFest is the flagship annual technical festival where innovation meets opportunity. 
            Experience three days of intense competitions, insightful workshops, and unforgettable networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, rotateY: 5 }}
              className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 group hover:border-purple-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/50 relative z-10`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="text-white" size={40} />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
          <div className="relative bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border-2 border-purple-500/50 rounded-3xl p-12 text-center backdrop-blur-xl shadow-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-50"
            />
            <h3 className="text-3xl font-bold text-white mb-4">Total Prize Pool</h3>
            <motion.p 
              className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $50,000+
            </motion.p>
            <p className="text-gray-300 text-xl">In cash prizes and goodies across all events</p>
            <div className="flex justify-center gap-4 mt-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
