import { Inter as FontSans } from 'next/font/google'
import { GifsContextProvider } from './context/GifsContext'
import Header from './components/Header'
import './globals.css'
import { AuthContextProvider } from './context/AuthContext'
import { cn } from '@/lib/utils'
import { ThemeProvider } from './components/theme-provider'

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
        <html className='bg-primary-black' lang='en'>
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
            </ThemeProvider>
          </body>
        </html>
      </GifsContextProvider>
    </AuthContextProvider>
  )
}
