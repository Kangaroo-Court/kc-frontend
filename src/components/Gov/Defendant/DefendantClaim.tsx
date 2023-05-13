import { useState } from 'react'
import ImageActionLayout from '../../Layout/ImageActionLayout'
import SelectPanel from '../../shared/SelectPanel'
import Input from '../../shared/Input'
import { useSignMessage } from 'wagmi'
import ConfirmationModal from '~/components/shared/ConfirmationModal'

export type DefendantType = { id: number; label: string } //TODO change this

const DefendantClaim: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<DefendantType>()
  const [amount, setAmount] = useState(0)

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Make claim',
  })
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false)
  console.log({ data, isError, isLoading, isSuccess })

  return (
    <>
      <ImageActionLayout
        imageSrc="/defendant.png"
        imageAlt="defendant"
        actionNode={
          <div className="flex flex-col items-center gap-32">
            <h1 className="text-6xl font-bold text-primary-600">Defendant</h1>
            <div className="flex flex-col gap-10">
              <h3 className="text-3xl font-medium text-primary-600">
                Is ApeCoin dead between XXXXXX and YYYYYY?
              </h3>
              <SelectPanel
                selectedOption={selectedClaim}
                changeSelectedOption={setSelectedClaim}
                isHorizontal
                items={[
                  { id: 0, label: 'Yes' },
                  { id: 1, label: 'No' },
                ]}
              />
              <div>
                <h4 className="text-lg font-medium text-primary-600">
                  Apecoin to bet
                </h4>
                <Input
                  value={amount.toString()}
                  onChange={(e) => setAmount(+e)}
                />
              </div>
            </div>
            <button
              className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
              disabled={!selectedClaim}
              onClick={() => {
                setIsConfirmationModalOpen(true)
                signMessage()
              }}
            >
              Make Claim
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
export default DefendantClaim
