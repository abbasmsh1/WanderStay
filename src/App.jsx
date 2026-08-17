import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import PropertyCard from './components/PropertyCard'
import Filters from './components/Filters'

const properties = [
  {
    id: 1,
    name: 'Santorini Sunset Villa',
    location: 'Santorini, Greece',
    price: 450,
    rating: 4.9,
    image: 'linear-gradient(160deg, #c2703f 0%, #7c3f21 100%)',
    amenities: ['Pool', 'Terrace', 'WiFi', 'Kitchen'],
  },
  {
    id: 2,
    name: 'Alpine Luxury Chalet',
    location: 'Zermatt, Switzerland',
    price: 520,
    rating: 4.8,
    image: 'linear-gradient(160deg, #5c6d8c 0%, #2b3a55 100%)',
    amenities: ['Spa', 'Fireplace', 'Mountain View', 'Hot Tub'],
  },
  {
    id: 3,
    name: 'Bali Beachfront Resort',
    location: 'Bali, Indonesia',
    price: 280,
    rating: 4.7,
    image: 'linear-gradient(160deg, #3f7d5f 0%, #1e4034 100%)',
    amenities: ['Beach Access', 'Yoga Studio', 'Restaurant', 'Spa'],
  },
  {
    id: 4,
    name: 'Paris Boutique Apartment',
    location: 'Paris, France',
    price: 380,
    rating: 4.9,
    image: 'linear-gradient(160deg, #a8788a 0%, #5c3a48 100%)',
    amenities: ['View', 'Kitchen', 'WiFi', 'Concierge'],
  },
  {
    id: 5,
    name: 'Tokyo Modern Penthouse',
    location: 'Tokyo, Japan',
    price: 410,
    rating: 4.8,
    image: 'linear-gradient(160deg, #47617a 0%, #1d2a3a 100%)',
    amenities: ['City View', 'Gym', 'Terrace', 'Smart Home'],
  },
  {
    id: 6,
    name: 'Dubai Luxury Palace',
    location: 'Dubai, UAE',
    price: 650,
    rating: 5.0,
    image: 'linear-gradient(160deg, #b98a52 0%, #6e4a26 100%)',
    amenities: ['Private Pool', 'Concierge', 'Helipad', 'Cinema'],
  },
]

export default function App() {
  const [filteredProperties, setFilteredProperties] = useState(properties)

  return (
    <div className="min-h-screen bg-orange-50/60">
      <Hero />
      <Filters properties={properties} setFiltered={setFilteredProperties} />
      
      <motion.section 
        className="px-6 py-16 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-2 text-gray-900">Discover luxury stays</h2>
        <p className="text-gray-600 mb-12">Hand-picked destinations for unforgettable experiences</p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>
      </motion.section>

      <motion.footer 
        className="bg-gray-900 text-white py-12 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 WanderStay. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}
