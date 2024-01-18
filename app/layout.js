import { Inter } from 'next/font/google'
import { GifsContextProvider } from './context/GifsContext'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gifree',
  description: 'Gifs'
}

export default function RootLayout({ children }) {
  return (
    <GifsContextProvider>
      <html className='bg-primary-black' lang='en'>
        <link rel='icon' href='/favicon.png' sizes='any' />
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </GifsContextProvider>
  )
}
