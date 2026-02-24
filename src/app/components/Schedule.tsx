import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

export function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section
      id="schedule"
      className="py-24 bg-gray-950 relative overflow-x-hidden"
    >
      {/* Background blobs (lighter & contained) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-0 w-[450px] h-[450px]
          bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-0 w-[450px] h-[450px]
          bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div
        ref={ref}
        className="container mx-auto max-w-6xl px-4 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Calendar className="mx-auto text-purple-400 mb-6" size={48} />
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Event{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Three days packed with exciting events, workshops, and networking opportunities.
          </p>
        </motion.div>

        {/* Schedule */}
        <div className="space-y-16">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIndex * 0.15 }}
            >
              {/* Day header */}
              <div className="mb-10">
                <div
                  className={`inline-flex items-center gap-4 px-7 py-3
                  bg-gradient-to-r ${day.color} rounded-xl`}
                >
                  <Calendar className="text-white" size={24} />
                  <h3 className="text-2xl font-bold text-white">{day.day}</h3>
                </div>
              </div>

              {/* Event cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {day.events.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative overflow-hidden
                    bg-gradient-to-br from-gray-900/90 to-gray-800/90
                    backdrop-blur-xl border border-purple-500/15
                    rounded-2xl p-5
                    hover:border-purple-500/40
                    hover:shadow-lg hover:shadow-purple-500/20
                    transition-all duration-300"
                  >
                    {/* Subtle hover glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${day.color}
                      opacity-0 hover:opacity-10 transition-opacity`}
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      {/* Icon */}
                      <div className="w-14 h-14 overflow-hidden rounded-xl flex-shrink-0">
                        <motion.div
                          className={`w-full h-full bg-gradient-to-br ${day.color}
                          flex items-center justify-center
                          shadow-md shadow-purple-500/20`}
                          whileHover={{ rotate: 45 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Clock className="text-white" size={24} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <span
                          className={`block font-semibold text-sm
                          text-transparent bg-gradient-to-r ${day.color} bg-clip-text mb-1`}
                        >
                          {event.time}
                        </span>
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-2" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}