import Layout from '@/components/Layout'
import LiveTime from '@/components/LiveTime'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <LiveTime />
    </Layout>
  )
}
