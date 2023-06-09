import { useEffect, useState } from 'react'
import ImageActionLayout from '../../Layout/ImageActionLayout'
import SelectPanel from '../../shared/SelectPanel'
import Input from '../../shared/Input'
import VeredictsModal from './VeredictsModal'
import { GiScrollUnfurled } from 'react-icons/gi'
import createJudgeAttestation from '~/lib/createJudgeAttestation'
import { useAccount, useSigner } from 'wagmi'

const Judge: React.FC = () => {
  const [selectedBinary, setSelectedBinary] = useState<{
    id: number
    label: string
  }>()
  const [sentenceTime, setSentenceTime] = useState<number>(0)
  const [isVeredictModalOpen, setIsVeredictModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (selectedBinary?.id === 1) setSentenceTime(0)
  }, [selectedBinary])

  const { data: signer } = useSigner()
  const { address } = useAccount()

  const onFinalJudgment = async () => {
    if (signer && address && selectedBinary)
      await createJudgeAttestation(signer, address, selectedBinary.id === 0, sentenceTime)
  }

  return (
    <>
      <ImageActionLayout
        imageSrc="/judge.png"
        imageAlt="judge"
        actionNode={
          <div className="flex flex-col items-center gap-28">
            <h1 className="px-5 text-6xl font-bold text-primary-600 underline">Judge</h1>
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-20">
                <h3 className="text-2xl font-medium text-primary-600">CASENUMBER 1</h3>
                <button
                  onClick={() => setIsVeredictModalOpen(true)}
                  className="flex items-center gap-5 self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
                >
                  <GiScrollUnfurled /> Veredicts
                </button>
              </div>
              <SelectPanel
                selectedOption={selectedBinary}
                changeSelectedOption={setSelectedBinary}
                isHorizontal
                items={[
                  { id: 0, label: 'Guilty' },
                  { id: 1, label: 'Not Guilty' },
                ]}
              />
              <div>
                <h4 className="text-lg font-medium text-primary-600">Sentence time</h4>
                <Input
                  value={sentenceTime.toString()}
                  onChange={(e) => setSentenceTime(+e)}
                  isDisabled={selectedBinary?.id !== 0}
                  type="number"
                />
              </div>
            </div>
            <button
              className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
              disabled={!selectedBinary}
              onClick={onFinalJudgment}
            >
              Final Judgement
            </button>
          </div>
        }
      />
      <VeredictsModal isOpen={isVeredictModalOpen} setIsOpen={setIsVeredictModalOpen} />
    </>
  )
}
export default Judge
