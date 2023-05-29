import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'

const font = Nunito({ 
  subsets: ['latin'],
});

export const metadata = {
  title: 'Name of App',
  description: 'Description of App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
