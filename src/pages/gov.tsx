import { useAccount } from 'wagmi'
import Bailiff from '~/components/Gov/Bailiff'
import Defense from '~/components/Gov/Defense'
import Judge from '~/components/Gov/Judge/Judge'
import Jury from '~/components/Gov/Jury'
import Prosecution from '~/components/Gov/Prosecution'
import roles from 'roles.json'
import DefendantVeredict from '~/components/Gov/Defendant/DefendantVeredict'

export default function GovPage() {
  const { address } = useAccount()
  const usersLayout = () => {
    if (!address) return <></>
    const roleToBe = roles.find((x) => x.Address === address)?.Role

    switch (roleToBe) {
      case 'Defandant':
        return <DefendantVeredict />
      case 'Defense':
        return <Defense />
      case 'Prosecutor':
        return <Prosecution />
      case 'Jury1':
        return <Jury juryNumber="1" />
      case 'Jury2':
        return <Jury juryNumber="2" />
      case 'Jury3':
        return <Jury juryNumber="3" />
      case 'Judge':
        return <Judge />
      case 'Bailiff':
        return <Bailiff />
    }
  }

  return <div className="flex h-full w-full items-center justify-center">{usersLayout()}</div>
}
