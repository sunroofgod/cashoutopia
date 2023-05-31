import { Poppins, Raleway } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'

import { DarkmodeToggle } from '@/components/ui/ModeToggle';
import { ThemeProvider } from '@/components/themeprovider';

const font = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Cashoutopia',
  description: 'Cashoutopia the Web App',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html className="dark" lang="en" >
      <body className={font.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <DarkmodeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}