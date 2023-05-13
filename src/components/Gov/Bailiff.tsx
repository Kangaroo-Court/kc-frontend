import { useSignMessage } from 'wagmi'
import ImageActionLayout from '../Layout/ImageActionLayout'
import ConfirmationModal from '../shared/ConfirmationModal'
import { useState } from 'react'

const Bailiff: React.FC = () => {
  const guiltyStatus: 'Guilty' | 'Not Guilty' = 'Guilty'
  const sentenceTime = 12301
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Execute sentence',
  })
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false)

  return (
    <>
      <ImageActionLayout
        imageSrc="/bailiff.png"
        imageAlt="bailiff"
        actionNode={
          <div className="flex flex-col items-center gap-40">
            <h1 className="px-5 text-6xl font-bold text-primary-600 underline">
              Bailiff
            </h1>
            <div className="flex flex-col items-center gap-20">
              <div className="flex items-center gap-20">
                <h3 className="text-2xl font-medium text-primary-600">
                  ***Transaction Hash***
                </h3>
              </div>
              <h3 className="text-5xl font-medium text-primary-600">
                {guiltyStatus}
              </h3>

              <h4 className="flex gap-5 text-2xl font-medium text-primary-600">
                <span>Sentence time</span>
                <span>{sentenceTime}</span>
              </h4>
            </div>
            <button
              onClick={() => signMessage()}
              className="flex self-end rounded-lg border border-white bg-primary-600 p-4 text-lg font-medium text-white disabled:opacity-50"
            >
              Execute
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
export default Bailiff
