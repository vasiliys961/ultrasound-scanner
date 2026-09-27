import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/LocaleProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doctor Opus Sono',
  description: 'A consultative ultrasound draft for the treating physician: frame quality, measurement, and review.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
