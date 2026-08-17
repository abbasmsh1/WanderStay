import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'

export default function Hero() {
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 opacity-40" />
      
      <motion.div 
        className="absolute inset-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 gradient-sunset"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Wander & Stay
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Experience luxury accommodations at the world's most enchanting destinations
        </motion.p>

        <motion.div 
          className="card-glass rounded-2xl p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent outline-none font-medium w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-orange-500" />
              <input 
                type="date" 
                className="bg-transparent outline-none font-medium w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-orange-500" />
              <select className="bg-transparent outline-none font-medium w-full">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
