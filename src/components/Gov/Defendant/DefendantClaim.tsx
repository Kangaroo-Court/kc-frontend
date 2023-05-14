import { useState } from 'react'
import ImageActionLayout from '../../Layout/ImageActionLayout'
import SelectPanel from '../../shared/SelectPanel'
import Input from '../../shared/Input'
import { useAccount, useBalance, useContractRead, useSignMessage, useSigner } from 'wagmi'
import ConfirmationModal from '~/components/shared/ConfirmationModal'
import { apeCoinAbi } from '~/abis/ApeCoin.abi'
import { formatEther } from 'ethers/lib/utils.js'
import createDefendantAttestation from '~/lib/createDefendantAttestation'

export type DefendantType = { id: number; label: string } //TODO change this

const DefendantClaim: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<DefendantType | undefined>()
  const [amount, setAmount] = useState(0)
  const [tokenToBet, setTokenToBet] = useState<{ id: number; label: string } | undefined>({
    id: 1,
    label: 'GETH',
  })

  const { address } = useAccount()
  const { data: balance } = useBalance({ address })

  const { data: apeBalance } = useContractRead({
    address: '0x1bd51c4ce823Cb653F107Eb366d513C32e792E52',
    abi: apeCoinAbi,
    functionName: 'balanceOf',
    args: [address!],
    enabled: !!address,
  })

  const getTokenBalance = () => {
    if (tokenToBet?.id === 1) return balance?.formatted
    if (tokenToBet?.id === 0 && apeBalance) return formatEther(apeBalance)
    else return 0
  }
  const { data: signer } = useSigner()
  const onMakeClaim = async () => {
    if (signer && address) await createDefendantAttestation(signer, address)
  }
  return (
    <>
      <ImageActionLayout
        imageSrc="/defendant.png"
        imageAlt="defendant"
        actionNode={
          <div className="flex flex-col items-center gap-20">
            <h1 className="text-6xl font-bold text-primary-600 underline">Defendant</h1>
            <div className="flex flex-col gap-10">
              <h3 className="text-3xl font-medium text-primary-600">Is ApeCoin dead?</h3>
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
                  You have {getTokenBalance()} {tokenToBet?.label}
                </p>
              </div>
            </div>
            <button
              className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
              disabled={!selectedClaim || amount < 0}
              onClick={() => {
                onMakeClaim()
              }}
            >
              Make Claim
            </button>
          </div>
        }
      />
    </>
  )
}
export default DefendantClaim
