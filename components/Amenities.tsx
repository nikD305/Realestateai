'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Waves, 
  Dumbbell, 
  Car, 
  TreePine, 
  Wifi, 
  Shield, 
  Users, 
  Coffee,
  Sparkles,
  Heart,
  Zap,
  Leaf
} from 'lucide-react'

export default function Amenities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const amenityCategories = [
    {
      title: 'Lifestyle & Recreation',
      icon: Heart,
      amenities: [
        { name: 'Swimming Pool', icon: Waves, description: 'Olympic-size pool with temperature control' },
        { name: 'Fitness Center', icon: Dumbbell, description: 'State-of-the-art gym with personal trainers' },
        { name: 'Garden & Landscaping', icon: TreePine, description: 'Beautifully landscaped gardens' },
        { name: 'Clubhouse', icon: Users, description: 'Multi-purpose clubhouse for events' },
      ]
    },
    {
      title: 'Convenience & Security',
      icon: Shield,
      amenities: [
        { name: '24/7 Security', icon: Shield, description: 'Round-the-clock security with CCTV' },
        { name: 'Underground Parking', icon: Car, description: 'Spacious parking for all residents' },
        { name: 'High-Speed Internet', icon: Wifi, description: 'Fiber-optic internet connectivity' },
        { name: 'Power Backup', icon: Zap, description: 'Uninterrupted power supply' },
      ]
    },
    {
      title: 'Wellness & Sustainability',
      icon: Leaf,
      amenities: [
        { name: 'Yoga & Meditation', icon: Sparkles, description: 'Dedicated wellness zones' },
        { name: 'Children\'s Play Area', icon: Users, description: 'Safe and fun play spaces' },
        { name: 'Eco-Friendly Features', icon: Leaf, description: 'Green building practices' },
        { name: 'Café & Lounge', icon: Coffee, description: 'Community gathering spaces' },
      ]
    }
  ]

  const premiumFeatures = [
    'Smart home automation system',
    'Premium elevator finishes',
    'Acoustic insulation',
    'Fire safety systems',
    'Rainwater harvesting',
    'Solar power integration',
    'Waste management system',
    'Air quality monitoring'
  ]

  return (
    <section id="amenities" className="section-padding bg-gradient-to-br from-gray-900 to-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            World-Class <span className="text-green-400">Amenities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of amenities designed 
            to enhance your lifestyle and provide ultimate convenience.
          </p>
        </motion.div>

        {/* Amenity Categories */}
        <div className="space-y-16">
          {amenityCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.2 }}
            >
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <category.icon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>
               
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.amenities.map((amenity, amenityIndex) => (
                  <motion.div
                    key={amenity.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 + amenityIndex * 0.1 }}
                    className="bg-gray-800/80 backdrop-blur-md border border-green-400/30 rounded-xl p-6 text-center group hover:bg-gradient-to-br hover:from-green-500/10 hover:to-green-600/10 shadow-xl"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-green-400/30">
                      <amenity.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{amenity.name}</h4>
                    <p className="text-gray-300 text-sm">{amenity.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Premium <span className="text-green-400">Features</span>
            </h3>
            <p className="text-lg text-gray-300">
              Every detail has been carefully crafted to provide you with the ultimate living experience.
            </p>
          </div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gray-800/80 backdrop-blur-md border border-green-400/30 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span className="text-gray-300 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Luxury Living?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a site visit and discover why Paras Florett is the perfect choice for your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Schedule Visit
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
