import type { AppProps } from 'next/app'
import ThemeProvider from '../theme'
import Layout from '../layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
