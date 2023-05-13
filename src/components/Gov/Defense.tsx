import { useState } from 'react'
import ImageActionLayout from '../Layout/ImageActionLayout'
import SelectPanel from '../shared/SelectPanel'

export type DefenseType = { id: number; label: string } //TODO change this

const Defense: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<DefenseType>()

  return (
    <ImageActionLayout
      imageSrc="/defense.png"
      imageAlt="defense"
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
            className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
            disabled={!selectedClaim}
          >
            Propose Defense
          </button>
        </div>
      }
    />
  )
}
export default Defense
