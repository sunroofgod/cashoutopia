import { Poppins, Raleway } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'

import { DarkmodeToggle } from '@/components/ui/Dropdown';
import { ThemeProvider } from 'next-themes'
import { Card } from '@/components/ui/Card';

const font = Raleway({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
