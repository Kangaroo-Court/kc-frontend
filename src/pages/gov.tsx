import Defendant from '~/components/Gov/Defendant'
import Prosecution from '~/components/Gov/Prosecution'

export default function Home() {
  const usersLayout = () => {
    return <Defendant />
    return <Prosecution />
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {usersLayout()}
    </div>
  )
}
