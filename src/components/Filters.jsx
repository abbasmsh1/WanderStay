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
      className="bg-white border-b border-orange-100 py-6"
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
              className="w-full cursor-pointer accent-orange-600"
              onChangeCapture={handleFilter}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Minimum Rating: {rating > 0 ? `${rating}+` : 'Any'}
            </label>
            <div className="flex gap-2">
              {[0, 4.5, 4.7, 4.8, 4.9].map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setRating(r)
                    handleFilter()
                  }}
                  aria-pressed={rating === r}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    rating === r
                      ? 'bg-orange-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-700'
                  }`}
                >
                  {r === 0 ? 'All' : `${r}+`}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleFilter}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2.5 rounded-lg font-semibold transition-colors w-full md:w-auto md:justify-self-end"
          >
            Apply filters
          </button>
        </div>
      </div>
    </motion.section>
  )
}
