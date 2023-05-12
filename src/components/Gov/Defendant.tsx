import { useState } from 'react'
import ImageActionLayout from '../Layout/ImageActionLayout'
import SelectPanel from '../SelectPanel'

export type DefendantType = { id: number; label: string } //TODO change this

const Defendant: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<DefendantType>()

  return (
    <ImageActionLayout
      imageSrc="/defendant.png"
      imageAlt="defendant"
      actionNode={
        <div className="flex flex-col items-center gap-60">
          <h1 className="text-6xl font-bold text-primary-600">Defense</h1>
          <SelectPanel
            selectedOption={selectedClaim}
            changeSelectedOption={setSelectedClaim}
            items={[
              { id: 0, label: '0x1231231144412' },
              { id: 1, label: '0x1231231144412' },
            ]}
          />
          <button
            className="rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
            disabled={!selectedClaim}
          >
            Propose Defense
          </button>
        </div>
      }
    />
  )
}
export default Defendant
