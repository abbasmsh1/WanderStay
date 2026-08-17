import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Filters({ properties, setFiltered }) {
  const [priceRange, setPriceRange] = useState([200, 700])
  const [rating, setRating] = useState(0)

  const handleFilter = () => {
    const filtered = properties.filter(p => 
      p.price >= priceRange[0] && 
      p.price <= priceRange[1] && 
      p.rating >= rating
    )
    setFiltered(filtered)
  }

  return (
    <motion.section 
      className="bg-white/60 backdrop-blur-sm border-b border-gray-200 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <motion.input 
              type="range" 
              min="200" 
              max="700"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full cursor-pointer"
              onChangeCapture={handleFilter}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Minimum Rating: {rating > 0 ? `${rating}+` : 'Any'}
            </label>
            <div className="flex gap-2">
              {[0, 4.5, 4.7, 4.8, 4.9].map((r) => (
                <motion.button
                  key={r}
                  onClick={() => {
                    setRating(r)
                    handleFilter()
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    rating === r 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {r === 0 ? 'All' : `${r}★`}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button 
            onClick={handleFilter}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-2 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Filters
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}
