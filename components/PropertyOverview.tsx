'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Star, TrendingUp, Shield, Award } from 'lucide-react'

export default function PropertyOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    'Premium Italian marble flooring',
    'Modular kitchen with premium appliances',
    'Smart home automation system',
    '24/7 security with CCTV surveillance',
    'High-speed elevators',
    'Underground parking',
    'Power backup for all apartments',
    'Rainwater harvesting system',
  ]

  const floorPlans = [
    {
      type: '2 BHK',
      area: '1200-1400 sq ft',
      price: '₹1.2 Cr - ₹1.5 Cr',
      features: ['2 Bedrooms', '2 Bathrooms', '1 Balcony', 'Kitchen', 'Living Room']
    },
    {
      type: '3 BHK',
      area: '1800-2200 sq ft',
      price: '₹1.8 Cr - ₹2.3 Cr',
      features: ['3 Bedrooms', '3 Bathrooms', '2 Balconies', 'Kitchen', 'Living Room', 'Dining Area']
    },
    {
      type: '4 BHK',
      area: '2500-3000 sq ft',
      price: '₹2.8 Cr - ₹3.5 Cr',
      features: ['4 Bedrooms', '4 Bathrooms', '3 Balconies', 'Kitchen', 'Living Room', 'Dining Area', 'Study Room']
    }
  ]

  const highlights = [
    { icon: Star, title: 'Premium Quality', description: 'Finest materials and craftsmanship' },
    { icon: TrendingUp, title: 'Great Investment', description: 'High appreciation potential' },
    { icon: Shield, title: 'RERA Approved', description: 'Government approved project' },
    { icon: Award, title: 'Best Developer', description: 'Award-winning construction quality' },
  ]

  return (
    <section id="overview" className="section-padding bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="text-green-400">Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Paras Florett represents the pinnacle of luxury living in Gurgaon, 
            offering meticulously designed apartments with world-class amenities.
          </p>
        </motion.div>

        {/* Project Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <highlight.icon className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-300">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floor Plans */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Available <span className="text-green-400">Floor Plans</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/80 backdrop-blur-md border border-green-400/30 rounded-xl p-8 text-center shadow-2xl"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 border border-green-400/30">
                  <span className="text-2xl font-bold text-green-400">{plan.type}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{plan.area}</h4>
                <div className="text-2xl font-bold text-green-400 mb-6">{plan.price}</div>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full mt-6">
                  Get Details
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Premium <span className="text-green-400">Features</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Every detail has been carefully considered to provide you with the ultimate 
              living experience. From premium materials to smart technology integration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Apartment Interior"
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
