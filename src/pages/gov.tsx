import Defendant from '~/components/Gov/Defendant'
import Jury from '~/components/Gov/Jury'
import Prosecution from '~/components/Gov/Prosecution'

export default function Home() {
  const usersLayout = () => {
    return <Jury />
    return <Defendant />
    return <Prosecution />
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {usersLayout()}
    </div>
  )
}
