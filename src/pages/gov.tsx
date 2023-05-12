import Defendant from '~/components/Gov/Defendant'
import ImageActionLayout from '~/components/Layout/ImageActionLayout'
import SelectPanel from '~/components/SelectPanel'

export default function Home() {
  const usersLayout = () => {
    return <Defendant />
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {usersLayout()}
    </div>
  )
}
