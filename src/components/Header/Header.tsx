import { ConnectButton } from '@rainbow-me/rainbowkit'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Header: React.FC = () => {
  const headerLinks: { id: 'predict' | 'gov'; link: string; label: string }[] =
    [
      {
        id: 'predict',
        link: '/predict',
        label: 'Predict',
      },
      {
        id: 'gov',
        link: '/gov',
        label: 'Gov',
      },
    ]

  const { asPath } = useRouter()

  return (
    <div className="z-10 flex h-7 w-full items-center justify-between bg-primary-600 px-10 py-10">
      <div className="flex items-center gap-6">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        {headerLinks.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={clsx(
              'text-lg font-semibold text-primary-400 hover:text-white',
              {
                'text-white': asPath.split('/').includes(item.id),
              }
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <ConnectButton showBalance={false} />
    </div>
  )
}
export default Header
