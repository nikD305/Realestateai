'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, MapPin, Bed, Bath, SquareStack, Phone, Mail, User, Leaf } from 'lucide-react'

export default function Hero() {
  const propertyHighlights = [
    { icon: Bed, label: '3 BHK', value: 'Luxury Apartment' },
    { icon: Bath, label: 'Premium', value: 'Bathrooms' },
    { icon: SquareStack, label: '1200-2500', value: 'Sq. Ft.' },
    { icon: MapPin, label: 'Sector 59', value: 'Gurugram' },
  ]

  const navItems = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Overview', href: '#overview' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Floor Plan', href: '#floor-plan' },
    { name: 'Price List', href: '#price-list' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ]

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-30 bg-black/60 backdrop-blur-md border-b border-green-400/30"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">The Florett</h1>
                <p className="text-sm text-green-400">Enqlave</p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    item.active 
                      ? 'bg-green-500 text-white' 
                      : 'text-white hover:text-green-400'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Phone Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>9720697206</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-20 container-custom pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Property Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Project Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              The Florett <span className="text-green-400">Enqlave</span>
            </motion.h1>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center space-x-2 mb-6 text-lg"
            >
              <MapPin className="w-5 h-5 text-green-400" />
              <span className="border-b border-green-400 pb-1">At SECTOR - 59, GURUGRAM</span>
            </motion.div>

            {/* Apartment Type */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-xl font-semibold border-b border-white pb-1">
                3 BHK Luxury Apartment
              </span>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-xl font-semibold border-b border-white pb-1">
                Price: On Request
              </span>
            </motion.div>

            {/* Property Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {propertyHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 border border-green-400/30">
                    <item.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-white/90">
                    <div className="font-semibold text-lg">{item.label}</div>
                    <div className="text-sm text-white/70">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - RERA Info and Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* RERA Registration Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-black/60 backdrop-blur-md border border-green-400/30 rounded-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4 text-green-400">RERA Registration</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-green-400">Number:</span> 83 of 2024</p>
                <p><span className="text-green-400">Dated:</span> 05-08-2024</p>
                <p><span className="text-green-400">URL:</span> <a href="https://haryanarera.gov.in/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://haryanarera.gov.in/</a></p>
                <p><span className="text-green-400">Agent RERA No.:</span></p>
                <p className="font-mono">RC/HARERA/GGM/1654/1249/2022/22</p>
              </div>
            </motion.div>

            {/* Express Interest Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-black/60 backdrop-blur-md border border-green-400/30 rounded-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4 text-green-400 text-center">Express Your Interest</h3>
              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-b border-white/30 rounded-none text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-b border-white/30 rounded-none text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-b border-white/30 rounded-none text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 uppercase tracking-wide"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
