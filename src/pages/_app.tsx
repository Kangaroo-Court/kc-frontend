import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import WalletProvider from '~/providers/WalletProvider'
import Layout from '~/components/Layout/MasterLayout'
import { init } from '@airstack/airstack-react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

init('f0c50a3071c044d38a817e5a866a1149')
export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = new ApolloClient({
    uri: 'https://optimism-goerli.easscan.org/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={apolloClient}>
      <WalletProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletProvider>
    </ApolloProvider>
  )
}
