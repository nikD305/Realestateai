'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Hero from '@/components/Hero'
import PropertyOverview from '@/components/PropertyOverview'
import Amenities from '@/components/Amenities'
import Location from '@/components/Location'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Hero />
      <PropertyOverview />
      <Amenities />
      <Location />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  )
}
