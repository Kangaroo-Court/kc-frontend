import { useState } from 'react'
import ImageActionLayout from '../Layout/ImageActionLayout'
import SelectPanel from '../shared/SelectPanel'
import createJuryAttestation from '~/lib/createJuryAttestation'
import { useAccount, useSigner } from 'wagmi'

type JuryProps = {
  juryNumber: '1' | '2' | '3'
}

const Jury: React.FC<JuryProps> = ({ juryNumber }) => {
  const [selectedBinary, setSelectedBinary] = useState<{
    id: number
    label: string
  }>()
  const { address } = useAccount()
  const { data: signer } = useSigner()

  const onPassVeredict = async () => {
    if (signer && address && selectedBinary)
      await createJuryAttestation(
        signer,
        address,
        selectedBinary.id === 0,
        +juryNumber
      )
  }

  return (
    <ImageActionLayout
      imageSrc={`/jury${juryNumber}.png`}
      imageAlt={`jury${juryNumber}`}
      actionNode={
        <div className="flex flex-col items-center gap-44">
          <h1 className="px-5 text-6xl font-bold text-primary-600 underline">
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
            onClick={onPassVeredict}
          >
            Pass Veredict
          </button>
        </div>
      }
    />
  )
}
export default Jury
