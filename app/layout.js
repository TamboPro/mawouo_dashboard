import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mawouo dashboard',
  description: 'by Gédéon NFONGYELE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="body bg-[#08090b] dark:bg-[#15161a]">{children}</body>
    </html>
  )
}
