import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { GifsContextProvider } from './context/GifsContext'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeProvider } from './context/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Header from './components/Header'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: 'Gifree',
  description: 'Gifs'
}

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <GifsContextProvider>
        <html lang='en'>
          <link rel='icon' href='/favicon.png' sizes='any' />
          <body
            className={cn(
              'min-h-screen bg-background font-sans antialiased',
              fontSans.variable
            )}
          >
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </GifsContextProvider>
    </AuthContextProvider>
  )
}
