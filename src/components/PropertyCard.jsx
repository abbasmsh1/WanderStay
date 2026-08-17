import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { useState } from 'react'

export default function PropertyCard({ property }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="card-glass rounded-2xl overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ background: property.image }}
          />
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            aria-pressed={isLiked}
            aria-label="Save to wishlist"
            className="absolute top-4 right-4 bg-white/95 p-2 rounded-full hover:bg-white transition-colors active:scale-95"
          >
            <Heart 
              size={20} 
              className={isLiked ? 'fill-rose-500 text-rose-500' : 'text-gray-500'}
            />
          </button>

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
              <span
                key={i}
                className="text-xs bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full font-medium"
              >
                {amenity}
              </span>
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
              <p className="text-2xl font-bold text-gray-900 tabular-nums">${property.price}</p>
            </div>
            <button className="bg-orange-600 group-hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors">
              Book now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
