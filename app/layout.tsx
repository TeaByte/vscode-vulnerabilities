import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import Nav from '@/components/nav'
import ThemeProvider from "@/components/theme/provider"
import Footer from '@/components/footer'

const font = Rubik({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'VsCode Vulnerabilities',
  description: 'Search for vulnerabilities in VSCode extensions',
}

export default function RootLayout(
  {children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Nav />
          <main className="container mx-auto py-8 pb-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
