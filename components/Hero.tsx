"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  // Array of polaroid images - update these paths with your actual image paths
  const polaroids = [
    { src: "/potrait/4.jpg", alt: "First Birthday", rotation: -8, x: "5%", y: "15%" ,showOnMobile: true},
    { src: "/potrait/1.png", alt: "First Hope", rotation: 12, x: "85%", y: "20%",showOnMobile: true },
    { src: "/potrait/2.png", alt: "Aukaat se bahar", rotation: -5, x: "10%", y: "70%" ,showOnMobile: true},
    { src: "/potrait/3.png", alt: "Happy", rotation: 8, x: "88%", y: "75%",showOnMobile: true },
    { src: "/potrait/5.jpg", alt: "Best day", rotation: 5, x: "45%", y: "-5%" ,showOnMobile: true},
    { src: "/potrait/6.png", alt: "Food after Fight", rotation: -7, x: "48%", y: "85%" ,showOnMobile: false},
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden font-sans">
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(252, 231, 243, 0.8) 0%, rgba(255, 237, 213, 0.8) 50%, rgba(255, 228, 230, 0.8) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgba(219, 39, 119, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { x: 10, emoji: "💕", delay: 0 },
          { x: 30, emoji: "✨", delay: 2 },
          { x: 50, emoji: "💛", delay: 4 },
          { x: 70, emoji: "💕", delay: 6 },
          { x: 85, emoji: "✨", delay: 8 },
          { x: 20, emoji: "💛", delay: 10 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: `${item.x}%`, opacity: 0 }}
            animate={{ 
              y: "-100%", 
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
            className="absolute text-4xl"
            style={{ left: 0 }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Floating Polaroids */}
      {polaroids.map((polaroid, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: polaroid.rotation,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 + index * 0.2 },
            scale: { duration: 0.6, delay: 0.8 + index * 0.2 },
            rotate: { duration: 0.6, delay: 0.8 + index * 0.2 },
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }
          }}
          className={`absolute z-10 cursor-pointer hover:scale-110 hover:z-20 transition-transform duration-300 ${
            polaroid.showOnMobile ? 'block' : 'hidden md:block'
          }`}
          style={{
            left: polaroid.x,
            top: polaroid.y,
          }}
        >
          <div className="bg-white p-3 shadow-xl rounded-sm w-[120px] md:w-[180px]">
            <div className="relative w-full h-36 md:h-48 bg-gray-200 mb-1 md:mb-2">
              <Image
                src={polaroid.src}
                alt={polaroid.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center text-[8px] md:text-sm text-gray-700">
              {polaroid.alt}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: 15, y: 10 },
          { x: 25, y: 85 },
          { x: 45, y: 25 },
          { x: 65, y: 90 },
        ].map((pos, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-2xl"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* top-left title - positioned absolutely outside of flex container */}
      <div className="absolute top-8 left-8 z-20">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-4xl tracking-wide"
          style={{ 
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            background: 'linear-gradient(to right, #db2777, #f43f5e, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '0.5px rgba(219, 39, 119, 0.3)'
          }}
        >
          Just the two of us
        </motion.span>
      </div>

      {/* main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* playful badge */}
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.3 
          }}
          className="inline-block mb-4 rounded-full bg-pink-200 text-pink-800 px-4 py-1 text-sm font-medium shadow-sm"
        >
          💛 One year of us
        </motion.span>

        {/* headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-gray-900 font-serif"
          style={{
            background: 'linear-gradient(to right, #db2777, #f43f5e, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Hi you.
          <br />
          This is our little corner of the internet.
        </motion.h1>

        {/* subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
        >
          It's been 365 days of laughs, memories, and me being very glad
          I get to do life with you.
        </motion.p>

        {/* scroll hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              display: 'inline-block',
              backgroundColor: '#ffedd5',
              color: '#9a3412',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: '1px solid #fed7aa',
              cursor: 'default'
            }}
          >
            ↓ scroll, it gets cuter
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}