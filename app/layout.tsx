import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


// import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BStories',
  description: 'Memorable biblical stories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (

    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>

  )
}
