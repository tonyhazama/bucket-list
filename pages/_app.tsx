import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '../context/app-context-provider'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  )
}

export default MyApp
