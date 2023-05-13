import { useState } from 'react'
import ImageActionLayout from '../Layout/ImageActionLayout'
import SelectPanel from '../shared/SelectPanel'

export type ProsecutionType = { id: number; label: string } //TODO change this

const Prosecution: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<ProsecutionType>()

  return (
    <ImageActionLayout
      imageSrc="/prosecutor.png"
      imageAlt="prosecutor"
      actionNode={
        <div className="flex flex-col items-center gap-40">
          <h1 className="text-6xl font-bold text-primary-600 underline">
            Prosecution
          </h1>
          <SelectPanel
            selectedOption={selectedClaim}
            changeSelectedOption={setSelectedClaim}
            items={[{ id: 0, label: '0x1231231144412' }]}
          />
          <button
            className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
            disabled={!selectedClaim}
          >
            Dispute Claim
          </button>
        </div>
      }
    />
  )
}
export default Prosecution
