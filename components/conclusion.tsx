"use client"
import { motion } from "framer-motion"

export default function Conclusion() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.1) 0%, rgba(249, 115, 22, 0.15) 50%, rgba(219, 39, 119, 0.1) 100%)'
        }}
      />

      {/* Animated hearts all around */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: 5, emoji: "💕", delay: 0 },
          { x: 15, emoji: "✨", delay: 0.5 },
          { x: 25, emoji: "💛", delay: 1 },
          { x: 35, emoji: "🌟", delay: 1.5 },
          { x: 45, emoji: "💕", delay: 2 },
          { x: 55, emoji: "✨", delay: 2.5 },
          { x: 65, emoji: "💛", delay: 3 },
          { x: 75, emoji: "🌟", delay: 3.5 },
          { x: 85, emoji: "💕", delay: 4 },
          { x: 95, emoji: "✨", delay: 4.5 },
          { x: 10, emoji: "💛", delay: 5 },
          { x: 20, emoji: "🌟", delay: 5.5 },
          { x: 30, emoji: "💕", delay: 6 },
          { x: 40, emoji: "✨", delay: 6.5 },
          { x: 50, emoji: "💛", delay: 7 },
          { x: 60, emoji: "🌟", delay: 7.5 },
          { x: 70, emoji: "💕", delay: 8 },
          { x: 80, emoji: "✨", delay: 8.5 },
          { x: 90, emoji: "💛", delay: 9 },
          { x: 12, emoji: "🌟", delay: 9.5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "100%", 
              x: `${item.x}%`, 
              opacity: 0,
            }}
            animate={{ 
              y: "-100%", 
              opacity: [0, 0.6, 0.6, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + i * 0.5,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
            className="absolute text-2xl md:text-4xl"
            style={{ left: 0 }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Sparkle badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl md:text-8xl">✨</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
            style={{
              background: 'linear-gradient(to right, #db2777, #f43f5e, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Here's to Forever
          </motion.h2>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p 
              className="text-2xl md:text-4xl text-gray-700 leading-relaxed mb-6"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              One year down, a lifetime to go.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Thank you for being my partner, my best friend, and my favorite person. 
              Every day with you is a new adventure, and I can't wait to see where this journey takes us.
            </p>
          </motion.div>

          {/* Big heart with pulsing animation */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
            className="my-12"
          >
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block text-8xl md:text-9xl"
            >
              💕
            </motion.span>
          </motion.div>

          {/* Final message */}
         {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200 inline-block overflow-visible"
        >
          <p 
            className="text-3xl md:text-5xl font-bold mb-4 pb-2"
            style={{
              background: 'linear-gradient(to right, #db2777, #f43f5e, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: "'Dancing Script', cursive",
              lineHeight: '1.4'
            }}
          >
              I love you more than words can say
            </p>
            <p className="text-xl md:text-2xl text-gray-600">
              Happy Anniversary, my love ❤️
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <p 
              className="text-2xl md:text-3xl text-gray-700"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Yours always,
              <br />
              <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Tarun 💕
              </span>
            </p>
          </motion.div>

          {/* Inside joke */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl px-6 py-4 inline-block border-2 border-pink-200 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 italic">
                P.S. This wasn't so "bare minimum" now, was it?
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-gray-400 text-sm"
        >
          <p>Made with Love for the most amazing person in the world</p>
          <p className="mt-2">February 2025 - Infinity & Beyond</p>
        </motion.div>
      </div>

      {/* Glowing orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}