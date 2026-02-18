import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

export function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scheduleData = [
    {
      day: 'Day 1 - March 15',
      color: 'from-purple-500 to-pink-500',
      events: [
        { time: '09:00 AM', title: 'Registration & Breakfast', location: 'Main Hall' },
        { time: '10:00 AM', title: 'Opening Ceremony', location: 'Auditorium' },
        { time: '11:30 AM', title: 'Keynote Speech - Future of AI', location: 'Auditorium' },
        { time: '01:00 PM', title: 'Lunch Break', location: 'Cafeteria' },
        { time: '02:00 PM', title: 'Hackathon Begins', location: 'Lab Block A' },
        { time: '02:00 PM', title: 'Robotics Challenge Round 1', location: 'Lab Block B' },
        { time: '04:00 PM', title: 'Tech Quiz Preliminaries', location: 'Hall 3' },
        { time: '06:00 PM', title: 'Networking Session', location: 'Lawn Area' },
      ],
    },
    {
      day: 'Day 2 - March 16',
      color: 'from-pink-500 to-orange-500',
      events: [
        { time: '09:00 AM', title: 'Breakfast', location: 'Cafeteria' },
        { time: '10:00 AM', title: 'AI/ML Workshop', location: 'Lab Block C' },
        { time: '10:00 AM', title: 'Robotics Challenge Finals', location: 'Lab Block B' },
        { time: '12:00 PM', title: 'Startup Pitch Presentations', location: 'Seminar Hall' },
        { time: '01:00 PM', title: 'Lunch Break', location: 'Cafeteria' },
        { time: '02:00 PM', title: 'IoT Innovation Competition', location: 'Lab Block D' },
        { time: '04:00 PM', title: 'Tech Quiz Finals', location: 'Auditorium' },
        { time: '06:00 PM', title: 'Cultural Night & DJ', location: 'Open Ground' },
      ],
    },
    {
      day: 'Day 3 - March 17',
      color: 'from-orange-500 to-purple-500',
      events: [
        { time: '09:00 AM', title: 'Breakfast', location: 'Cafeteria' },
        { time: '10:00 AM', title: 'Hackathon Presentations', location: 'Auditorium' },
        { time: '12:00 PM', title: 'Panel Discussion - Tech Careers', location: 'Seminar Hall' },
        { time: '01:00 PM', title: 'Lunch Break', location: 'Cafeteria' },
        { time: '02:00 PM', title: 'Project Exhibitions', location: 'Exhibition Hall' },
        { time: '04:00 PM', title: 'Results & Prize Distribution', location: 'Auditorium' },
        { time: '06:00 PM', title: 'Closing Ceremony', location: 'Auditorium' },
        { time: '07:00 PM', title: 'Farewell Dinner', location: 'Cafeteria' },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl" 
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
            <Calendar className="text-purple-400" size={50} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Event <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Three days packed with exciting events, workshops, and networking opportunities. Plan your journey through TechFest.
          </p>
        </motion.div>

        <div className="space-y-16">
          {scheduleData.map((daySchedule, dayIndex) => (
            <motion.div
              key={daySchedule.day}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="relative"
            >
              {/* Day Header */}
              <motion.div 
                className="mb-10 relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r ${daySchedule.color} rounded-2xl shadow-2xl shadow-purple-500/50`}>
                  <Calendar className="text-white" size={32} />
                  <h3 className="text-3xl font-bold text-white">{daySchedule.day}</h3>
                </div>
                <motion.div 
                  className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${daySchedule.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '200px' } : {}}
                  transition={{ duration: 1, delay: dayIndex * 0.2 + 0.3 }}
                />
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {daySchedule.events.map((event, eventIndex) => (
                    <motion.div
                      key={`${daySchedule.day}-${eventIndex}`}
                      initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -30 : 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: dayIndex * 0.2 + eventIndex * 0.05 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative"
                    >
                      {/* Connector dot for desktop */}
                      <div className="hidden md:block absolute -left-[calc(50%-2rem)] top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50" />

                      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 group hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 overflow-hidden">
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${daySchedule.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        <div className="relative flex items-start space-x-5">
                          <motion.div 
                            className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${daySchedule.color} rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Clock className="text-white" size={28} />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <span className={`text-transparent bg-gradient-to-r ${daySchedule.color} bg-clip-text font-bold text-lg`}>
                                {event.time}
                              </span>
                            </div>
                            <h4 className="text-white font-bold text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                              {event.title}
                            </h4>
                            <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                              <MapPin size={16} className="mr-2 flex-shrink-0" />
                              <span className="truncate">{event.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Decorative corner element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">Download the complete schedule for offline access</p>
          <motion.button 
            className="px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <Calendar size={24} />
              Download PDF Schedule
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
