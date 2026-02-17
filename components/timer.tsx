"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function TimeTogether() {
  // Set your anniversary start date here (YYYY, MM-1, DD, HH, MM, SS)
  // Note: Month is 0-indexed (0 = January, 1 = February, etc.)
  const startDate = new Date(2025, 1, 18, 16, 0, 0) // February 18, 2025

  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeElapsed({
        days,
        hours,
        minutes,
        seconds,
        totalDays: days
      })
    }

    // Calculate immediately
    calculateTime()

    // Update every second
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeElapsed.days, emoji: "📅", color: "from-pink-500 to-rose-500" },
    { label: "Hours", value: timeElapsed.hours, emoji: "⏰", color: "from-rose-500 to-orange-500" },
    { label: "Minutes", value: timeElapsed.minutes, emoji: "⏱️", color: "from-orange-500 to-amber-500" },
    { label: "Seconds", value: timeElapsed.seconds, emoji: "⚡", color: "from-amber-500 to-yellow-500" },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(252, 231, 243, 0.5) 0%, rgba(255, 237, 213, 0.5) 100%)'
        }}
      />

      {/* Animated hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: `${10 + i * 12}%`, opacity: 0 }}
            animate={{ 
              y: "-100%", 
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute text-3xl"
          >
            {i % 2 === 0 ? "💕" : "✨"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4 rounded-full bg-pink-200 text-pink-800 px-4 py-1 text-sm font-medium shadow-sm"
          >
            ⏰ Time Together
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
            We've Been Together For...
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every second counts when I'm with you ✨
          </p>
        </motion.div>

        {/* Big Number Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
            <motion.div
              key={timeElapsed.totalDays}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent mb-4"
            >
              {timeElapsed.totalDays}
            </motion.div>
            <div className="text-2xl md:text-3xl font-semibold text-gray-700">
              Beautiful Days Together 💕
            </div>
          </div>
        </motion.div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${unit.color} rounded-2xl p-6 shadow-xl text-white`}>
                {/* Emoji */}
                <div className="text-4xl mb-3 text-center">
                  {unit.emoji}
                </div>

                {/* Number */}
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-2"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>

                {/* Label */}
                <div className="text-sm md:text-base font-medium text-center opacity-90">
                  {unit.label}
                </div>

                {/* Decorative shine */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full opacity-40" />
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-white rounded-full opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border-2 border-pink-100 inline-block">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              That's <span className="font-bold text-pink-600">{(timeElapsed.totalDays * 24).toLocaleString()}</span> hours, 
              {' '}<span className="font-bold text-rose-600">{(timeElapsed.totalDays * 24 * 60).toLocaleString()}</span> minutes,
              {' '}or <span className="font-bold text-orange-600">{(timeElapsed.totalDays * 24 * 60 * 60).toLocaleString()}</span> seconds
              {' '}of pure happiness! 🎉
            </p>
          </div>
        </motion.div>

        {/* Sweet message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p 
            className="text-2xl md:text-3xl text-gray-700 italic"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            And counting... 💕
          </p>
        </motion.div>
      </div>
    </section>
  )
}