import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { User, Mail, Phone, School, Users, FileText, Send, CheckCircle } from 'lucide-react';

export function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    team: 'individual',
    event: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        team: 'individual',
        event: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl" 
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
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Send className="text-purple-400" size={50} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Register <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Now</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Join us for an unforgettable experience. Fill out the form below to secure your spot at TechFest 2026.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 md:p-14 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/50"
                  >
                    <CheckCircle className="text-white" size={60} />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-white mb-4">Registration Successful!</h3>
                  <p className="text-gray-400 text-lg">We've received your registration. Check your email for confirmation details.</p>
                  <motion.div 
                    className="flex justify-center gap-2 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="name" className="flex items-center text-white mb-3 font-semibold text-lg">
                        <User size={20} className="mr-2 text-purple-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="email" className="flex items-center text-white mb-3 font-semibold text-lg">
                        <Mail size={20} className="mr-2 text-pink-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="phone" className="flex items-center text-white mb-3 font-semibold text-lg">
                        <Phone size={20} className="mr-2 text-orange-400" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300"
                        placeholder="+1 234 567 8900"
                      />
                    </motion.div>

                    {/* College */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="college" className="flex items-center text-white mb-3 font-semibold text-lg">
                        <School size={20} className="mr-2 text-purple-400" />
                        College/University *
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                        placeholder="Your College Name"
                      />
                    </motion.div>

                    {/* Year */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="year" className="flex items-center text-white mb-3 font-semibold text-lg">
                        <FileText size={20} className="mr-2 text-pink-400" />
                        Year of Study *
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300"
                      >
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                        <option value="graduate">Graduate</option>
                      </select>
                    </motion.div>

                    {/* Team Type */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="team" className="flex items-center text-white mb-3 font-semibold text-lg">
                        <Users size={20} className="mr-2 text-orange-400" />
                        Registration Type *
                      </label>
                      <select
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300"
                      >
                        <option value="individual">Individual</option>
                        <option value="team">Team (2-4 members)</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Event Selection */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="event" className="flex items-center text-white mb-3 font-semibold text-lg">
                      <FileText size={20} className="mr-2 text-purple-400" />
                      Primary Event Interest *
                    </label>
                    <select
                      id="event"
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select Event</option>
                      <option value="hackathon">Hackathon</option>
                      <option value="robotics">Robotics Challenge</option>
                      <option value="ai-workshop">AI/ML Workshop</option>
                      <option value="iot">IoT Innovation</option>
                      <option value="quiz">Tech Quiz</option>
                      <option value="startup">Startup Pitch</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="message" className="flex items-center text-white mb-3 font-semibold text-lg">
                      <FileText size={20} className="mr-2 text-pink-400" />
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us more about yourself or your team..."
                    />
                  </motion.div>

                  {/* Fee Info */}
                  <div className="relative bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border-2 border-purple-500/40 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl" />
                    <p className="relative text-gray-300 text-lg">
                      <strong className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Registration Fee:</strong> $25 per person | 
                      <strong className="text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text"> Team Discount:</strong> $80 for teams of 4
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full px-10 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-purple-500/50 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="relative z-10 flex items-center justify-center gap-3"
                    >
                      <Send size={24} />
                      Complete Registration
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  <p className="text-gray-400 text-sm text-center leading-relaxed">
                    By registering, you agree to our terms and conditions. You'll receive a confirmation email with payment details.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
