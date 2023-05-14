import { useState } from 'react'
import ImageActionLayout from '../../Layout/ImageActionLayout'
import SelectPanel from '../../shared/SelectPanel'
import Input from '../../shared/Input'
import { useAccount, useBalance, useSignMessage } from 'wagmi'
import ConfirmationModal from '~/components/shared/ConfirmationModal'

export type DefendantType = { id: number; label: string } //TODO change this

const DefendantClaim: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<DefendantType | undefined>()
  const [amount, setAmount] = useState(0)
  const [tokenToBet, setTokenToBet] = useState<{ id: number; label: string } | undefined>({
    id: 1,
    label: 'GETH',
  })
  const { isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Make claim',
  })
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false)

  const { address } = useAccount()
  const { data: balance } = useBalance({ address })

  return (
    <>
      <ImageActionLayout
        imageSrc="/defendant.png"
        imageAlt="defendant"
        actionNode={
          <div className="flex flex-col items-center gap-32">
            <h1 className="text-6xl font-bold text-primary-600 underline">Defendant</h1>
            <div className="flex flex-col gap-10">
              <h3 className="text-3xl font-medium text-primary-600">Is ApeCoin dead by XXXXX?</h3>
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
                <div className="flex items-center gap-5">
                  <h4 className="text-lg font-medium text-primary-600">Bet in</h4>
                  <SelectPanel
                    selectedOption={tokenToBet}
                    changeSelectedOption={setTokenToBet}
                    isHorizontal
                    items={[
                      { id: 0, label: 'ApeCoin' },
                      { id: 1, label: 'GETH' },
                    ]}
                  />
                </div>
                <h4 className="text-lg font-medium text-primary-600">{tokenToBet?.label} to bet</h4>
                <Input value={amount.toString()} onChange={(e) => setAmount(+e)} type="number" />
                <p className=" text-primary-500">
                  You have {tokenToBet?.id === 1 ? balance?.formatted : 0} {tokenToBet?.label}
                </p>
              </div>
            </div>
            <button
              className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
              disabled={!selectedClaim || amount < 0 || amount > Number(balance?.formatted)}
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
