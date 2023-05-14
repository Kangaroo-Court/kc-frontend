import { useState } from 'react'
import ImageActionLayout from '../Layout/ImageActionLayout'
import SelectPanel from '../shared/SelectPanel'
import { useSignMessage } from 'wagmi'
import ConfirmationModal from '../shared/ConfirmationModal'

export type DefenseType = { id: number; label: string } //TODO change this

const Defense: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<DefenseType>()
  const { isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Propose defense',
  })
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false)

  return (
    <>
      <ImageActionLayout
        imageSrc="/defense.png"
        imageAlt="defense"
        actionNode={
          <div className="flex flex-col items-center gap-40">
            <h1 className="text-6xl font-bold text-primary-600 underline">Defense</h1>
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
              onClick={() => signMessage()}
            >
              Propose Defense
            </button>
          </div>
        }
      />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        setIsOpen={setIsConfirmationModalOpen}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </>
  )
}
export default Defense
