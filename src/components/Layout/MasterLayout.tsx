import Head from 'next/head'
import Header from '../Header/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{`Kangaroo-Court`}</title>
        <link rel="icon" href="/vercel.svg" type="image/svg+xml"></link>
      </Head>

      <>
        <div className="flex h-screen min-h-screen w-screen flex-col bg-accent">
          <Header />
          <main className="flex h-full w-full items-center justify-center">
            {children}
          </main>
        </div>
      </>
    </>
  )
}

export default Layout
