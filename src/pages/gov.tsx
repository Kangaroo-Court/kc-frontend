import Balif from '~/components/Gov/Balif'
import DefendantClaim from '~/components/Gov/Defendant/DefendantClaim'
import DefendantVeredict from '~/components/Gov/Defendant/DefendantVeredict'
import Defense from '~/components/Gov/Defense'
import Judge from '~/components/Gov/Judge/Judge'
import Jury from '~/components/Gov/Jury'
import Prosecution from '~/components/Gov/Prosecution'

export default function GovPage() {
  const usersLayout = () => {
    return <Jury juryNumber="1" />
    return <DefendantClaim />
    return <Judge />
    return <Defense />
    return <DefendantVeredict />
    return <Balif />
    return <Prosecution />
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {usersLayout()}
    </div>
  )
}
