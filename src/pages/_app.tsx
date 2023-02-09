import Header from '@/components/Header'
import { SidebarContext } from '@/contexts/SidebarContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarContext>
      <Header />
      <Component {...pageProps} />
    </SidebarContext>
  )
}
