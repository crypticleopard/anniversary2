import "./globals.css"
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google"

const serif = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: 'swap',
})

const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
})

const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}