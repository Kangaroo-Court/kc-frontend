import { useSignMessage } from 'wagmi'
import ImageActionLayout from '../Layout/ImageActionLayout'
import ConfirmationModal from '../shared/ConfirmationModal'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import GET_EAS_ATTESTATIONS from '~/queries/getEASAttestations.query'
import { formatEther } from 'ethers/lib/utils.js'

const Bailiff: React.FC = () => {
  const guiltyStatus: 'Guilty' | 'Not Guilty' = 'Guilty'
  const sentenceTime = 12301
  const { isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Execute sentence',
  })
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false)

  const { data } = useQuery(GET_EAS_ATTESTATIONS, {
    variables: {
      schemaId:
        '0xbf564b3ed16b42c3bcfad0e6f5f6016b9657dabc57a4c4e37706b6d017918a55',
    },
  })

  const parsedData = data?.attestations[0]?.decodedDataJson
    ? JSON.parse(data?.attestations[0].decodedDataJson)
    : undefined
  console.log(parsedData)

  return (
    <>
      <ImageActionLayout
        imageSrc="/bailiff.png"
        imageAlt="bailiff"
        actionNode={
          <div className="flex flex-col items-center gap-24">
            <h1 className="px-5 text-6xl font-bold text-primary-600 underline">
              Bailiff
            </h1>
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-20">
                <h3 className="text-2xl font-medium text-primary-600">
                  ***Transaction Hash***
                </h3>
              </div>
              <h3 className="text-5xl font-medium text-primary-600">
                {parsedData[2]?.value.value ? 'Guilty' : 'Not Guilty'}
              </h3>

              <h4 className="flex gap-5 text-2xl font-medium text-primary-600">
                <span>Sentence time</span>
                <span>
                  {parsedData[3]?.value.value
                    ? parseFloat(formatEther(parsedData[3].value.value)) * 1e18
                    : undefined}
                </span>
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
