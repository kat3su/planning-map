import './globals.css'
import { type Metadata } from 'next';
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Planning Map',
  description: 'Search for planning application in Australia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={font.className}
        suppressHydrationWarning={true} >{children}</body>
    </html>
  )
}
