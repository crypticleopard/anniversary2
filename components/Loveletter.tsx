"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(252, 231, 243, 0.4) 0%, rgba(255, 237, 213, 0.3) 100%)'
        }}
      />

      {/* Floating hearts in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: "-100%", 
              opacity: [0, 0.2, 0.2, 0]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute text-4xl"
            style={{ left: `${15 + i * 15}%` }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            className="inline-block mb-4 rounded-full bg-rose-200 text-rose-800 px-4 py-1 text-sm font-medium shadow-sm"
          >
            💌 A Letter for You
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
            Dear Deba,
          </h2>
        </motion.div>

        {/* Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          {/* Envelope (closed state) */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border-2 border-pink-100 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="text-center">
                <div className="text-6xl mb-6">💌</div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                  You've got mail...
                </h3>
                <p className="text-gray-600 mb-6">
                  Click to open your letter
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  Open Letter ✨
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Letter (open state) */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-pink-50 rounded-lg shadow-2xl p-8 md:p-12 border-2 border-pink-200"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v1H0z" fill="%23fecdd3" fill-opacity="0.1"/%3E%3C/svg%3E")',
              }}
            >
              {/* Letter content */}
              <div 
                className="prose prose-lg max-w-none"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                    Dear Jaan,
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    I can't believe it's been a whole year already. Sometimes it feels like just yesterday we met, 
                    and other times it feels like I've known you forever. I guess that's what happens when you find 
                    someone who just... fits.
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    This year with you has been the best thing that has happened to me. Also, the biggest test 
                    that I had to go through. From our monthly scheduled fights 😂 to the feeling of utter hopelessness,
                    I have always known that you are worth every bit. And today when we are together for an year, you have
                    proven me right.
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    You make ordinary days feel special. You make me feel loved in ways I never deserved. You make me want to be 
                    a better person. You make me feel like I'm exactly where I'm supposed to be.
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    I made this website because I wanted to do something special for our anniversary, but honestly, 
                    no website (no matter how many hours I spent on it 😅) could ever capture how much you mean to me. 
                    But I hope it makes you smile. I hope it reminds you of all our memories together. 
                    And I hope it shows you even just a fraction of how happy you make me.
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    Here's to 365 days down, and a lifetime to go. I can't wait to be back together.
                  </p>

                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
                    I love you more than words can say.
                  </p>

                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Forever yours,
                  </p>
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Tarun 💕
                  </p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-3xl">💕</div>
              <div className="absolute bottom-4 left-4 text-2xl">✨</div>
              <div className="absolute top-1/2 left-2 text-xl opacity-50">💛</div>
              <div className="absolute top-1/4 right-2 text-xl opacity-50">💕</div>
            </motion.div>
          )}
        </motion.div>

        {/* Close button (only shown when open) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-sm underline"
            >
              Close letter
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}