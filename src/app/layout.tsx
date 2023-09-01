import './globals.css';
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: "400",
})

export const metadata: Metadata = {
  title: `Beyond Borders: Pawan Kushwah's Web Universe`,
  description: `Explore the digital universe through the skilled lens of Pawan Kushwah, a dedicated web developer. Immerse yourself in a collection of meticulously crafted websites, innovative solutions, and seamless user experiences. Discover the fusion of creativity and code that defines Pawan's journey in the world of web development.`,
  icons: ["./favicon.ico"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>

      <body className={`${ubuntu.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
