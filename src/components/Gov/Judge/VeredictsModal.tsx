import { GiScrollUnfurled } from 'react-icons/gi'
import Modal from '~/components/shared/Modal'
import { IoClose } from 'react-icons/io5'

type VeredictsModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
const VeredictsModal: React.FC<VeredictsModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const veredicts: { hash: string; jury: string; veredict: boolean }[] = [
    {
      hash: '0xa123ias1231j123123',
      jury: 'Jury1',
      veredict: false,
    },
    {
      hash: '0xa123ias1231j123123',
      jury: 'Jury2',
      veredict: true,
    },
    {
      hash: '0xa123ias1231j123123',
      jury: 'Jury3',
      veredict: false,
    },
  ]

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
          {veredicts.map((item) => (
            <div
              className="flex gap-5 text-lg font-medium text-primary-600"
              key={item.jury}
            >
              <h3>{item.jury}</h3> <h3>{item.veredict ? 'True' : 'False'}</h3>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
export default VeredictsModal
