"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Timeline() {
  // Add your relationship milestones here
  const milestones = [
    {
      date: "January 14, 2025",
      title: "The Day We Became Friends",
      description: "I still remember the first time I met you. You were sitting on that chair ranting about your manager. And I was like damn she is different(I meant in a good way, Please kalesh matt krna).",
      emoji: "✨",
      image: "/potrait/Firstmeeting.png" // optional
    },
    {
      date: "February 13, 2025",
      title: "The day I realised I love you",
      description: "A small outing turned into dinner turned into hours of fun. I didn't want that night to end.",
      emoji: "❤️",
      image: "/landscapes/realisationlove.png"
    },
    {
      date: "February 18, 2025",
      title: "Made It Official",
      description: "The day I asked you 'Bandi Banegi Meri'. Best decision I ever made.",
      emoji: "💕",
      image: "/landscapes/First meet.jpg"
    },
    {
      date: "March 18, 2025",
      title: "Our One Month Anniversary",
      description: "30 days of you, and I was already addicted.",
      emoji: "✨",
      image: "/potrait/onemonth.jpeg"
    },
    {
      date: "April 5, 2025",
      title: "Our First Trip Together",
      description: "Nervous? Yes. Worth it? Absolutely.",
      emoji: "🚗",
      image: "/potrait/FirstTrip.png"
    },
    {
      date: "June 22, 2025",
      title: "Long Distance",
      description: "When it all shattered, but deep down I knew it will be worth it.",
      emoji: "🫂",
      image: "/landscapes/Longdistance2.png"
    },
    {
      date: "July 15, 2025",
      title: "When you came Mumbai for the first time",
      description: "When the universe gave us hope",
      emoji: "🌌",
      image: "/landscapes/First Mumbai.png"
    },
    {
      date: "September 27, 2025",
      title: "Our First Fight (and Makeup)",
      description: "We learned that sometimes shit happens. And that makeup food is the best kind of food.",
      emoji: "🍕",
      image: "/landscapes/FirstFight.JPG"
    },
    {
      date: "February 18, 2026",
      title: "One Year Together",
      description: "Here we are. 365 days of laughter, love, and everything in between. Can't wait to meet you.",
      emoji: "🎉",
      image: "/landscapes/lastlast.png"
    },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 237, 213, 0.3) 0%, rgba(252, 231, 243, 0.4) 50%, rgba(255, 237, 213, 0.3) 100%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
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
            className="inline-block mb-4 rounded-full bg-orange-200 text-orange-800 px-4 py-1 text-sm font-medium shadow-sm"
          >
            📅 Our Journey
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
            Our Story Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every moment, every milestone, every memory that made us who we are today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-300 to-orange-300 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center text-2xl shadow-lg z-10"
              >
                {milestone.emoji}
              </motion.div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 border-2 border-pink-100"
                >
                  {/* Date badge */}
                  <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {milestone.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 font-serif">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Optional image */}
                  {milestone.image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mt-4">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 text-3xl">
                    {index % 3 === 0 ? "💕" : index % 3 === 1 ? "✨" : "💛"}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3 }}
          className="relative flex justify-center mt-8"
        >
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
            And many more to come... 💕
          </div>
        </motion.div>
      </div>
    </section>
  )
}