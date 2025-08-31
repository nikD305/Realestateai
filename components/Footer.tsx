'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Award,
  Heart
} from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const projectInfo = [
    { name: 'Project Status', value: 'Under Construction' },
    { name: 'Possession', value: 'Q4 2024' },
    { name: 'RERA Number', value: 'HARERA-123456' },
    { name: 'Total Units', value: '450' },
    { name: 'Floor Range', value: 'G+25' },
    { name: 'Parking', value: '2 Cars per Unit' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ]

  const certifications = [
    { icon: Star, title: 'Premium Quality', description: 'Award-winning construction' },
    { icon: Shield, title: 'RERA Approved', description: 'Government certified project' },
    { icon: Award, title: 'Best Developer', description: 'Industry recognition' },
    { icon: Heart, title: 'Customer First', description: 'Satisfaction guaranteed' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white border-t border-green-400/30">
      {/* Main Footer Content */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Paras Florett</h3>
                <p className="text-sm text-green-400">Premium Living</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience luxury living at its finest with Paras Florett, the most 
              prestigious residential project in Gurgaon.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center transition-all duration-300 border border-green-400/30 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Project Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Project Info</h4>
            <ul className="space-y-3">
              {projectInfo.map((info) => (
                <li key={info.name} className="flex justify-between">
                  <span className="text-gray-300">{info.name}:</span>
                  <span className="font-medium text-white">{info.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">+91 98765 43210</p>
                  <p className="text-sm text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">info@parasflorett.com</p>
                  <p className="text-sm text-gray-300">24/7 support available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Cyber City, Gurgaon</p>
                  <p className="text-sm text-gray-300">Haryana 122002, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {certifications.map((cert, index) => (
            <div key={cert.title} className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-green-400/30">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold mb-2 text-white">{cert.title}</h5>
              <p className="text-sm text-gray-300">{cert.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center mb-12 border border-green-400/30"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, exclusive offers, 
            and construction progress of Paras Florett.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700/50 border border-green-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © 2024 Paras Florett. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
