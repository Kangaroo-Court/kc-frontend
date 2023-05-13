import { useState } from 'react'
import ImageActionLayout from '../Layout/ImageActionLayout'
import SelectPanel from '../shared/SelectPanel'

type JuryProps = {
  juryNumber: '1' | '2' | '3'
}

const Jury: React.FC<JuryProps> = ({ juryNumber }) => {
  const [selectedBinary, setSelectedBinary] = useState<{
    id: number
    label: string
  }>()

  return (
    <ImageActionLayout
      imageSrc={`/jury${juryNumber}.png`}
      imageAlt={`jury${juryNumber}`}
      actionNode={
        <div className="flex flex-col items-center gap-60">
          <h1 className="px-5 text-6xl font-bold text-primary-600">
            Jury {juryNumber}
          </h1>
          <div className="flex flex-col items-center gap-20">
            <h3 className="text-2xl font-medium text-primary-600">
              ***Transaction Hash***
            </h3>
            <SelectPanel
              selectedOption={selectedBinary}
              changeSelectedOption={setSelectedBinary}
              isHorizontal
              items={[
                { id: 0, label: 'True' },
                { id: 1, label: 'False' },
              ]}
            />
          </div>
          <button
            className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
            disabled={!selectedBinary}
          >
            Pass Veredict
          </button>
        </div>
      }
    />
  )
}
export default Jury
