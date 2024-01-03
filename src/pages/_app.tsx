import type { AppProps } from 'next/app'
import '@/styles/app.scss'
import Layout from '@/views/layout'

function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
