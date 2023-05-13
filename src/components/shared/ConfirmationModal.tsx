import Modal from '~/components/shared/Modal'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'

type ConfirmationModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  setIsOpen,
  isLoading,
  isSuccess,
  isError,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-1/3 flex-col gap-20 rounded-lg border border-primary-600 bg-accent p-10">
        <div className="flex w-full items-center justify-between  p-5 text-primary-600">
          <h1 className="flex items-center text-3xl font-bold ">
            Signing Message
          </h1>
          <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <IoClose size={24} />
          </span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          {isLoading && (
            <Image src="/gavel.gif" alt="gavel gif" width={500} height={500} />
          )}
          {isError && (
            <h3 className="text-lg font-medium text-primary-600">
              Message signing rejected
            </h3>
          )}
          {isSuccess && (
            <h3 className="text-lg font-medium text-primary-600">
              Message signing successfull
            </h3>
          )}
          {!isLoading && (
            <button
              onClick={() => setIsOpen(false)}
              className="flex self-end rounded-lg border border-white bg-primary-600 px-3 py-1 text-lg font-medium text-white disabled:opacity-50"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </Modal>
  )
}
export default ConfirmationModal
