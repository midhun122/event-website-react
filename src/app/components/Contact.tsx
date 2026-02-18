import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@techfest2026.edu',
      link: 'mailto:info@techfest2026.edu',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'University Campus, Main Auditorium, City, State 12345',
      link: '#',
      gradient: 'from-orange-500 to-purple-500',
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', name: 'Facebook', color: 'hover:from-purple-500 hover:to-purple-600' },
    { icon: Twitter, link: '#', name: 'Twitter', color: 'hover:from-pink-500 hover:to-pink-600' },
    { icon: Instagram, link: '#', name: 'Instagram', color: 'hover:from-orange-500 hover:to-orange-600' },
    { icon: Linkedin, link: '#', name: 'LinkedIn', color: 'hover:from-purple-500 hover:to-pink-500' },
  ];

  const coordinators = [
    { name: 'Sarah Johnson', role: 'Event Coordinator', email: 'sarah@techfest2026.edu', phone: '+1 (555) 123-4568', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Michael Chen', role: 'Technical Head', email: 'michael@techfest2026.edu', phone: '+1 (555) 123-4569', gradient: 'from-pink-500 to-orange-500' },
    { name: 'Emily Davis', role: 'Sponsorship Lead', email: 'emily@techfest2026.edu', phone: '+1 (555) 123-4570', gradient: 'from-orange-500 to-purple-500' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl" 
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
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <MessageCircle className="text-purple-400" size={50} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 hover:border-purple-500 transition-all duration-500 group text-center shadow-xl hover:shadow-2xl hover:shadow-purple-500/50"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className="text-white" size={36} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{info.content}</p>

              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Coordinators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Event Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coordinators.map((coordinator, index) => (
              <motion.div
                key={coordinator.email}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500 transition-all duration-500 group shadow-xl"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${coordinator.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                <div className="text-center mb-6 relative">
                  <motion.div 
                    className={`w-24 h-24 bg-gradient-to-br ${coordinator.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-white text-3xl font-bold">
                      {coordinator.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-2">{coordinator.name}</h4>
                  <p className={`text-transparent bg-gradient-to-r ${coordinator.gradient} bg-clip-text font-semibold text-lg`}>
                    {coordinator.role}
                  </p>
                </div>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${coordinator.email}`} 
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors justify-center"
                  >
                    <Mail size={18} className="mr-2" />
                    <span className="text-sm">{coordinator.email}</span>
                  </a>
                  <a 
                    href={`tel:${coordinator.phone}`} 
                    className="flex items-center text-gray-400 hover:text-pink-400 transition-colors justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    <span className="text-sm">{coordinator.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="relative">
            {/* Glowing border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-30" />
            
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Send us a Quick Message</h3>
              <form className="space-y-6">
                <motion.input
                  whileHover={{ scale: 1.01 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                />
                <motion.input
                  whileHover={{ scale: 1.01 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300"
                />
                <motion.textarea
                  whileHover={{ scale: 1.01 }}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300 resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center shadow-2xl shadow-purple-500/50 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Send size={22} />
                    Send Message
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                className={`w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-2xl flex items-center justify-center hover:border-purple-500 transition-all duration-300 group shadow-lg ${social.color}`}
                aria-label={social.name}
                whileHover={{ y: -10, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
              >
                <social.icon className="text-gray-400 group-hover:text-white transition-colors" size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
