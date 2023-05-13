import '@rainbow-me/rainbowkit/styles.css'
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { lineaTestnet, scrollTestnet, optimismGoerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

type WalletProviderProps = {
  children: React.ReactNode
}
const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const { theme } = resolveConfig(tailwindConfig)
  const { chains, publicClient } = configureChains(
    [optimismGoerli, scrollTestnet, lineaTestnet],
    [publicProvider()]
  )

  const { connectors } = getDefaultWallets({
    appName: 'Kangaroo Court',
    projectId: 'Kangaroo',
    chains,
  })

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: theme.colors.accent,
          accentColorForeground: theme.colors.primary[600],
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default WalletProvider
