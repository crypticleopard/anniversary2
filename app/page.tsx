import Hero from "@/components/Hero"
import MemoriesGallery from "@/components/memories"
import LoveLetter from "@/components/Loveletter"
import Timeline from "@/components/timeline"
import TimeTogether from "@/components/timer"
import OurSong from "@/components/oursong"
import Conclusion from "@/components/conclusion"

export default function Home() {
  return (
    <main>
      <Hero />
      <MemoriesGallery/>
      <LoveLetter/>
      <TimeTogether/>
      <OurSong/>
      <Timeline/>
      <Conclusion/>
    </main>
  )
}
