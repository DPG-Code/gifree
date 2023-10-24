import { Inter } from 'next/font/google'
import './globals.css'
import { GifsContextProvider } from './context/GifsContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gifree',
  description: 'Gifs'
}

export default function RootLayout({ children }) {
  return (
    <GifsContextProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </GifsContextProvider>
  )
}
