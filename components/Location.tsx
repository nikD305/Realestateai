'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MapPin, 
  Car, 
  Train, 
  Plane, 
  ShoppingBag, 
  GraduationCap, 
  Heart, 
  Building,
  Clock,
  Star
} from 'lucide-react'

export default function Location() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const connectivity = [
    { icon: Car, title: 'By Road', details: 'NH-8, Delhi-Gurgaon Expressway' },
    { icon: Train, title: 'By Metro', details: 'Yellow Line - Cyber City Station (2 km)' },
    { icon: Plane, title: 'By Air', details: 'IGI Airport - 15 minutes drive' },
    { icon: Clock, title: 'By Bus', details: 'Multiple bus routes available' },
  ]

  const nearbyPlaces = [
    { 
      category: 'Shopping & Entertainment',
      icon: ShoppingBag,
      places: [
        { name: 'Ambience Mall', distance: '1.5 km', rating: 4.5 },
        { name: 'Cyber Hub', distance: '2 km', rating: 4.3 },
        { name: 'DLF Cyber City', distance: '2.5 km', rating: 4.4 },
      ]
    },
    { 
      category: 'Education',
      icon: GraduationCap,
      places: [
        { name: 'Delhi Public School', distance: '3 km', rating: 4.6 },
        { name: 'Manav Rachna University', distance: '4 km', rating: 4.2 },
        { name: 'GD Goenka University', distance: '5 km', rating: 4.1 },
      ]
    },
    { 
      category: 'Healthcare',
      icon: Heart,
      places: [
        { name: 'Medanta Hospital', distance: '3.5 km', rating: 4.7 },
        { name: 'Fortis Hospital', distance: '4 km', rating: 4.5 },
        { name: 'Artemis Hospital', distance: '5 km', rating: 4.3 },
      ]
    },
    { 
      category: 'Corporate Offices',
      icon: Building,
      places: [
        { name: 'Google Office', distance: '2 km', rating: 4.8 },
        { name: 'Microsoft Office', distance: '2.5 km', rating: 4.6 },
        { name: 'Amazon Office', distance: '3 km', rating: 4.5 },
      ]
    }
  ]

  return (
    <section id="location" className="section-padding bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prime <span className="text-green-400">Location</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategically located in the heart of Gurgaon, Paras Florett offers 
            unparalleled connectivity and access to all major destinations.
          </p>
        </motion.div>

        {/* Location Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Why This <span className="text-green-400">Location?</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Located in the prestigious Cyber City area of Gurgaon, Paras Florett offers 
              the perfect blend of urban convenience and peaceful living. The location 
              provides easy access to major corporate offices, shopping centers, hospitals, 
              and educational institutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span className="text-gray-300">Prime Cyber City location</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span className="text-gray-300">Excellent connectivity to Delhi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span className="text-gray-300">Close to major corporate offices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span className="text-gray-300">World-class shopping and dining</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl transform -rotate-3"></div>
            <div className="relative z-10 bg-gray-800/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-green-400/30">
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Map</p>
                  <p className="text-sm text-gray-400">Cyber City, Gurgaon</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connectivity */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Excellent <span className="text-green-400">Connectivity</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectivity.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/80 backdrop-blur-md border border-green-400/30 rounded-xl p-6 text-center shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <item.icon className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Places */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nearby <span className="text-green-400">Attractions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nearbyPlaces.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + categoryIndex * 0.2 }}
                className="bg-gray-800/80 backdrop-blur-md border border-green-400/30 rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <category.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{category.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {category.places.map((place, placeIndex) => (
                    <div key={place.name} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-white">{place.name}</h5>
                        <p className="text-sm text-gray-400">{place.distance}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-300">{place.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl p-8 border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Explore the Location?</h3>
            <p className="text-gray-300 mb-6">
              Schedule a site visit and experience the premium location firsthand.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Schedule Site Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
