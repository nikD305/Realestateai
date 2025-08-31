'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Play, 
  ZoomIn, 
  ArrowLeft, 
  ArrowRight, 
  X,
  Camera,
  Video,
  Home,
  Building
} from 'lucide-react'

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentCategory, setCurrentCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All', icon: Camera, count: 12 },
    { id: 'exterior', name: 'Exterior', icon: Building, count: 4 },
    { id: 'interior', name: 'Interior', icon: Home, count: 5 },
    { id: 'amenities', name: 'Amenities', icon: Video, count: 3 },
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury Building Exterior',
      category: 'exterior',
      title: 'Building Exterior',
      description: 'Modern architectural design with premium finishes'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Living Room Interior',
      category: 'interior',
      title: 'Living Room',
      description: 'Spacious living area with premium materials'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Kitchen Interior',
      category: 'interior',
      title: 'Modular Kitchen',
      description: 'Fully equipped kitchen with premium appliances'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Swimming Pool',
      category: 'amenities',
      title: 'Swimming Pool',
      description: 'Olympic-size pool with temperature control'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Gym Facility',
      category: 'amenities',
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Bedroom Interior',
      category: 'interior',
      title: 'Master Bedroom',
      description: 'Luxurious bedroom with premium finishes'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Garden View',
      category: 'exterior',
      title: 'Landscaped Gardens',
      description: 'Beautifully designed outdoor spaces'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Building Entrance',
      category: 'exterior',
      title: 'Main Entrance',
      description: 'Grand entrance with premium security'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Bathroom Interior',
      category: 'interior',
      title: 'Premium Bathroom',
      description: 'Luxurious bathroom with modern fixtures'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Clubhouse',
      category: 'amenities',
      title: 'Clubhouse',
      description: 'Multi-purpose community space'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dining Area',
      category: 'interior',
      title: 'Dining Area',
      description: 'Elegant dining space for family meals'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Aerial View',
      category: 'exterior',
      title: 'Aerial View',
      description: 'Birds eye view of the entire project'
    }
  ]

  const filteredImages = currentCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-900 to-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Property <span className="text-green-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the beauty and luxury of Paras Florett through our comprehensive 
            collection of high-quality images and virtual tour.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-800/80 text-white border-2 border-green-400/30 hover:border-green-400'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                  <p className="text-sm text-white/80">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Virtual Tour Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Experience Virtual Tour</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take a 360° virtual tour of our premium apartments and amenities 
              from the comfort of your home.
            </p>
            <button className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 mx-auto">
              <Play className="w-6 h-6" />
              <span>Start Virtual Tour</span>
            </button>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h4 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h4>
                  <p className="text-white/80">{filteredImages[selectedImage].description}</p>
                </div>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
