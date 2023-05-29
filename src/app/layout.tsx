import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { DarkmodeToggle } from '@/components/ui/Dropdown';
import { ThemeProvider } from 'next-themes'

const font = Nunito({ 
  subsets: ['latin'],
});

export const metadata = {
  title: 'Cashoutopia',
  description: 'Cashoutopia the Web App',
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

        <DarkmodeToggle />
        {children}
        </body>

    </html>
  )
}
