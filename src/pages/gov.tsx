import Defendant from '~/components/Gov/Defendant'
import Defense from '~/components/Gov/Defense'
import Judge from '~/components/Gov/Judge/Judge'
import Jury from '~/components/Gov/Jury'
import Prosecution from '~/components/Gov/Prosecution'

export default function Home() {
  const usersLayout = () => {
    return <Judge />
    return <Jury />
    return <Prosecution />
    return <Defendant />
    return <Defense />
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {usersLayout()}
    </div>
  )
}
