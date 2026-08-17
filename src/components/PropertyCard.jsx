import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { useState } from 'react'

export default function PropertyCard({ property }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="card-glass rounded-2xl overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ background: property.image }}
            animate={{ scale: 1.1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full backdrop-blur-sm hover:bg-white transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart 
              size={20} 
              className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}
            />
          </motion.button>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{property.name}</h3>
              <p className="text-sm text-gray-600">{property.location}</p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
              <Star size={16} className="fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.slice(0, 3).map((amenity, i) => (
              <motion.span 
                key={i}
                className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {amenity}
              </motion.span>
            ))}
            {property.amenities.length > 3 && (
              <span className="text-xs text-gray-600 px-2 py-1">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600">Per night</p>
              <p className="text-2xl font-bold gradient-sunset">${property.price}</p>
            </div>
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(255, 107, 107, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
