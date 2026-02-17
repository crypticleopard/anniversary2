"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function MemoriesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  // Add your photos here - update paths and captions
  const memories = [
    { 
      src: "/landscapes/First meet.jpg", 
      caption: "Our Proposal",
      date: "February 2025",
      story: "The day everything changed ✨"
    },
    { 
      src: "/potrait/First long distance.jpg", 
      caption: "Our First Long distance",
      date: "March 2025",
      story: "When you realised you love me ❤️"
    },
    { 
      src: "/landscapes/1.png", 
      caption: "Our first Beach Date",
      date: "April 2025",
      story: "You me and waves 🌊"
    },
    { 
      src: "/potrait/birthdaycute.jpeg", 
      caption: "Our first Birthday",
      date: "May 2025",
      story: "My Baby turned 22🌅"
    },
    { 
      src: "/potrait/Longdistance.jpg", 
      caption: "Long distance...",
      date: "June 2025",
      story: "When it happened..."
    },
    { 
      src: "/potrait/mumbai1sttime.png", 
      caption: "Your First Visit",
      date: "July 2025",
      story: "When you came to me for the first time"
    },
    { 
      src: "/landscapes/2.png", 
      caption: "The Kerala Trip",
      date: "August 2025",
      story: "When I realised you can actually travel 🌴"
    },
    { 
      src: "/landscapes/4.png", 
      caption: "Alibaug",
      date: "September 2025",
      story: "You know what we did here...😏"
    },
    { 
      src: "/potrait/Diwalilongdistance.PNG", 
      caption: "Diwali",
      date: "October 2025",
      story: "When we felt alone 🪔"
    },
    { 
      src: "/landscapes/novdate.png", 
      caption: "Our Late night Date",
      date: "November 2025",
      story: "Thanks for the support in my toughest moment🌙"
    },
    { 
      src: "/potrait/yachtdate.png", 
      caption: "Yacht Date",
      date: "December 2025",
      story: "That Aukaat ke bahar date ⛵"
    },
    { 
      src: "/landscapes/Birthdaypic.png", 
      caption: "Our another Birthday",
      date: "January 2026",
      story: "When you made me feel the most important person in the universe 🌌"
    },

  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 237, 213, 0.3) 0%, rgba(252, 231, 243, 0.4) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4 rounded-full bg-pink-200 text-pink-800 px-4 py-1 text-sm font-medium shadow-sm"
          >
            💕 Our Story in Pictures
          </motion.span>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            style={{
              background: 'linear-gradient(to right, #db2777, #f43f5e, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            365 Days of Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every photo tells a story. Here is a snippet of each month from our first year together.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring"
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative bg-white p-3 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg transform hover:-translate-y-2">
                {/* Photo */}
                <div className="relative w-full h-64 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src={memory.src}
                    alt={memory.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold text-sm mb-1">{memory.date}</p>
                      <p className="text-xs">{memory.story}</p>
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="mt-3 text-center">
                  <h3 className="font-medium text-gray-800">{memory.caption}</h3>
                </div>

                {/* Decorative heart */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="absolute -top-2 -right-2 text-2xl"
                >
                  {index % 3 === 0 ? "💕" : index % 3 === 1 ? "✨" : "💛"}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          ✨ Click on any photo to see the full memory
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-pink-600 transition-colors shadow-lg"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-6">
              <Image
                src={memories[selectedImage].src}
                alt={memories[selectedImage].caption}
                fill
                className="object-contain"
              />
            </div>

            {/* Details */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                {memories[selectedImage].caption}
              </h3>
              <p className="text-pink-600 font-medium mb-3">
                {memories[selectedImage].date}
              </p>
              <p className="text-gray-600 text-lg">
                {memories[selectedImage].story}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : memories.length - 1)
                }}
                className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full hover:bg-pink-200 transition-colors font-medium"
              >
                ← Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage < memories.length - 1 ? selectedImage + 1 : 0)
                }}
                className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full hover:bg-pink-200 transition-colors font-medium"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}