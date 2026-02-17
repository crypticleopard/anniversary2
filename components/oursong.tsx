"use client"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export default function OurSong() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Update your song details here
  const songDetails = {
    title: "Our Song",
    artist: "-by my distant cousin",
    audioPath: "/oursong.mp3", // Put your song file in public/music/
    coverImage: "/potrait/selfie2.jpg", // Optional: album cover image
    lyrics: "The first line of lyrics that's special to us...", // Optional: a meaningful lyric
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    
    const newTime = parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)'
        }}
      />

      {/* Animated musical notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: `${15 + i * 15}%`, opacity: 0 }}
            animate={{ 
              y: "-100%", 
              opacity: [0, 0.4, 0.4, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute text-3xl"
          >
            {i % 3 === 0 ? "🎵" : i % 3 === 1 ? "🎶" : "♪"}
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
            className="inline-block mb-4 rounded-full bg-purple-200 text-purple-800 px-4 py-1 text-sm font-medium shadow-sm"
          >
            🎵 Our Song
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
            This One's For Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every time I hear this song, I think of you 💕
          </p>
        </motion.div>

        {/* Music Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-4xl opacity-20">🎵</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-20">🎶</div>

          <div className="relative z-10">
            {/* Album Cover / Image */}
            {songDetails.coverImage && (
              <motion.div
                animate={{ 
                  rotate: isPlaying ? 360 : 0,
                }}
                transition={{
                  duration: 20,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "linear"
                }}
                className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={songDetails.coverImage}
                  alt="Album cover"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Song Info */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-serif">
                {songDetails.title}
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                {songDetails.artist}
              </p>
              {songDetails.lyrics && (
                <p 
                  className="text-lg text-gray-500 italic mt-4"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  "{songDetails.lyrics}"
                </p>
              )}
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} src={songDetails.audioPath} />

            {/* Progress Bar */}
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6">
              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
              >
                {isPlaying ? (
                  <span className="text-3xl md:text-4xl">⏸</span>
                ) : (
                  <span className="text-3xl md:text-4xl ml-1">▶</span>
                )}
              </motion.button>
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 bg-white/60 rounded-full px-6 py-3 inline-block">
                💕 Every word reminds me of us
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            🎧 Press play and let the memories flood back
          </p>
        </motion.div>
      </div>
    </section>
  )
}