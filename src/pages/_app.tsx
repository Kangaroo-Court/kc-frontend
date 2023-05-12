import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '~/components/Layout'
import WalletProvider from '~/providers/WalletProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletProvider>
  )
}
