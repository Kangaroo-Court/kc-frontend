import { GiScrollUnfurled } from 'react-icons/gi'
import Modal from '~/components/shared/Modal'
import { IoClose } from 'react-icons/io5'
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client'
import GET_EAS_ATTESTATIONS from '~/queries/getEASAttestations.query'
import { formatEther } from 'ethers/lib/utils.js'

type VeredictsModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
const VeredictsModal: React.FC<VeredictsModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useQuery(GET_EAS_ATTESTATIONS, {
    variables: {
      schemaId:
        '0x56c13171ec212b1bd36ca786b7ed53678a03136863c85063ec0fa23f15e8fcee',
    },
  })

  const parsedData = data?.attestations.map((x: any) =>
    JSON.parse(x.decodedDataJson)
  )
  console.log(parsedData)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-96 flex-col gap-20 rounded-lg border border-primary-600 bg-accent p-10">
        <div className="flex w-full items-center justify-between  p-5 text-primary-600">
          <h1 className="flex items-center text-3xl font-bold ">
            <GiScrollUnfurled /> Veredicts
          </h1>
          <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <IoClose size={24} />
          </span>
        </div>
        <h3 className="text-2xl font-medium text-primary-600">
          ***Transaction Hash***
        </h3>
        <div className="flex flex-col items-center gap-5 pb-10">
          {parsedData?.map(
            (
              item: {
                name: string
                type: string
                signature: string
                value: { name: string; type: string; value: any }
              }[]
            ) => (
              <div
                className="flex gap-5 text-lg font-medium text-primary-600"
                key={item[0]?.value.value}
              >
                <h3>
                  Jury{' '}
                  {item[1]?.value.value
                    ? parseFloat(formatEther(item[1].value.value)) * 1e18
                    : undefined}
                </h3>
                <h3>{item[2]?.value.value ? 'True' : 'False'}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </Modal>
  )
}
export default VeredictsModal
