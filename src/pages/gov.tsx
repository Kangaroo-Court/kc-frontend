import Balif from '~/components/Gov/Balif'
import DefendantClaim from '~/components/Gov/DefendantClaim'
import Defense from '~/components/Gov/Defense'
import Judge from '~/components/Gov/Judge/Judge'
import Jury from '~/components/Gov/Jury'
import Prosecution from '~/components/Gov/Prosecution'

export default function Home() {
  const usersLayout = () => {
    return <Balif />
    return <Judge />
    return <Jury />
    return <Prosecution />
    return <DefendantClaim />
    return <Defense />
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {usersLayout()}
    </div>
  )
}
