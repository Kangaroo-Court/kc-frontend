import { GiScrollUnfurled } from 'react-icons/gi'
import Modal from '~/components/shared/Modal'
import { IoClose } from 'react-icons/io5'
import { useQuery } from '@apollo/client'
import GET_EAS_ATTESTATIONS from '~/queries/getEASAttestations.query'

type VeredictsModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
const VeredictsModal: React.FC<VeredictsModalProps> = ({ isOpen, setIsOpen }) => {
  const { data: jury1Data } = useQuery<{ attestations: { decodedDataJson: string }[] }>(GET_EAS_ATTESTATIONS, {
    variables: {
      schemaId: '0xb50db0f640c9e9d6f22efa9ac2cdb347d62a8253ccbd0a8cbaa1b42bf85b28f4',
    },
  })

  const jury1ParsedData: //eslint-disable-line @typescript-eslint/no-unsafe-assignment
  | {
        name: string
        type: string
        signature: string
        value: { name: string; type: string; value: any }
      }[]
    | undefined = jury1Data?.attestations.map(
    (item: { decodedDataJson: string }) => JSON.parse(item.decodedDataJson) //eslint-disable-line  @typescript-eslint/no-unsafe-return
  )[0]

  const { data: jury2Data } = useQuery<{ attestations: { decodedDataJson: string }[] }>(GET_EAS_ATTESTATIONS, {
    variables: {
      schemaId: '0xfdf312958f2f6e8ebea5130060e3c902d84ad66084cf1277610d16f503876221',
    },
  })

  const jury2ParsedData: //eslint-disable-line @typescript-eslint/no-unsafe-assignment
  | {
        name: string
        type: string
        signature: string
        value: { name: string; type: string; value: any }
      }[]
    | undefined = jury2Data?.attestations.map(
    (item: { decodedDataJson: string }) => JSON.parse(item.decodedDataJson) //eslint-disable-line  @typescript-eslint/no-unsafe-return
  )[0]

  const { data: jury3Data } = useQuery<{ attestations: { decodedDataJson: string }[] }>(GET_EAS_ATTESTATIONS, {
    variables: {
      schemaId: '0xf74e7e9ef220a498ed0cfebc7d3983614ff18ad7360a83b93009c0b9ff80c0fc',
    },
  })

  const jury3ParsedData: //eslint-disable-line @typescript-eslint/no-unsafe-assignment
  | {
        name: string
        type: string
        signature: string
        value: { name: string; type: string; value: any }
      }[]
    | undefined = jury3Data?.attestations.map(
    (item: { decodedDataJson: string }) => JSON.parse(item.decodedDataJson) //eslint-disable-line  @typescript-eslint/no-unsafe-return
  )[0]

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
        <h3 className="text-2xl font-medium text-primary-600">***Transaction Hash***</h3>
        <div className="flex flex-col items-center gap-5 pb-10">
          <div className="flex gap-5 text-lg font-medium text-primary-600">
            <h3>Jury 1</h3>
            <h3>
              {jury1ParsedData && jury1ParsedData.length ? (jury1ParsedData[2]?.value?.value ? 'True' : 'False') : '-'}
            </h3>
          </div>
          <div className="flex gap-5 text-lg font-medium text-primary-600">
            <h3>Jury 2</h3>
            <h3>
              {jury2ParsedData && jury2ParsedData.length ? (jury2ParsedData[2]?.value?.value ? 'True' : 'False') : '-'}
            </h3>
          </div>
          <div className="flex gap-5 text-lg font-medium text-primary-600">
            <h3>Jury 3</h3>
            <h3>
              {jury3ParsedData && jury3ParsedData.length ? (jury3ParsedData[2]?.value?.value ? 'True' : 'False') : '-'}
            </h3>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default VeredictsModal
