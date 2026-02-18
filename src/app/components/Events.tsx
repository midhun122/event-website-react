import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Cpu, Lightbulb, Brain, Trophy, Rocket, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      icon: Code,
      title: 'Hackathon',
      description: '24-hour coding marathon to build innovative solutions to real-world problems.',
      prize: '$10,000',
      image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzEzOTQ3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Competition',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cpu,
      title: 'Robotics Challenge',
      description: 'Design and build autonomous robots to complete complex tasks and challenges.',
      prize: '$8,000',
      image: 'https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc3MTM1MTIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Competition',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: Brain,
      title: 'AI/ML Workshop',
      description: 'Hands-on workshop on machine learning and artificial intelligence fundamentals.',
      prize: 'Certificate',
      image: 'https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzcxMzk0NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Workshop',
      gradient: 'from-orange-500 to-purple-500',
    },
    {
      icon: Lightbulb,
      title: 'IoT Innovation',
      description: 'Create smart solutions using Internet of Things devices and sensors.',
      prize: '$6,000',
      image: 'https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTMyMjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Competition',
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Tech Quiz',
      description: 'Test your knowledge across various domains of technology and computer science.',
      prize: '$3,000',
      image: 'https://images.unsplash.com/photo-1768590149213-8ab16aaf7511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3MTM5NDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Competition',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Rocket,
      title: 'Startup Pitch',
      description: 'Present your startup idea to industry experts and investors for funding.',
      prize: '$15,000',
      image: 'https://images.unsplash.com/photo-1768590149213-8ab16aaf7511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3MTM5NDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Competition',
      gradient: 'from-orange-500 to-pink-500',
    },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${i * 20}%`,
              top: `${(i * 15) % 80}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Star className="text-purple-400" size={50} fill="currentColor" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Explore our diverse range of competitions, workshops, and activities designed to challenge and inspire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -20, scale: 1.03 }}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Floating category badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className={`px-4 py-2 bg-gradient-to-r ${event.gradient} backdrop-blur-sm text-white text-sm font-bold rounded-full shadow-lg`}>
                    {event.category}
                  </span>
                </motion.div>

                {/* Animated particles on hover */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, -40],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="relative p-8">
                <div className="flex items-center mb-5">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-purple-500/50`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <event.icon className="text-white" size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {event.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 min-h-[80px] leading-relaxed group-hover:text-gray-300 transition-colors">
                  {event.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Prize Pool</p>
                    <p className={`text-transparent bg-gradient-to-r ${event.gradient} bg-clip-text font-bold text-2xl`}>
                      {event.prize}
                    </p>
                  </div>
                  <motion.button 
                    className={`px-6 py-3 bg-gradient-to-r ${event.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Decorative corner shine */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
