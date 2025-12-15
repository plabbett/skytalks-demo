import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { InteractiveBackground } from '@/components/InteractiveBackground'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: '%s - SKYTALKS',
    default: 'SKYTALKS - No recording. No photography. No bullshit.',
  },
  description:
    'At SKYTALKS you\'ll learn about the latest dark-patterns and anti-practices that need exposed, especially the kind that runs the risk of offending a company.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="1em" font-size="80">%F0%9F%98%B6%E2%80%8D%F0%9F%8C%AB%EF%B8%8F</text></svg>',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-slate-950 antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <InteractiveBackground />
        <div className="relative z-10 flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
