import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'

export default function Hero() {
  return (
    <motion.section 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-50/60" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        >
          Stay somewhere<br /><span className="text-orange-700">worth the trip.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-700 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        >
          Experience luxury accommodations at the world's most enchanting destinations
        </motion.p>

        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-600" />
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent outline-none font-medium w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-orange-600" />
              <input 
                type="date" 
                className="bg-transparent outline-none font-medium w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-orange-600" />
              <select className="bg-transparent outline-none font-medium w-full">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg py-3 transition-colors">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
