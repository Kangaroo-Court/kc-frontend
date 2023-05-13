import Input from '~/components/shared/Input'
import { useState } from 'react'
import ImageActionLayout from '~/components/Layout/ImageActionLayout'

export default function Home() {
  const [amount, setAmount] = useState(0)

  const onDeposit = () => {
    //TODO on deposit
  }

  return (
    <div className="flex h-full w-full items-center justify-end">
      <ImageActionLayout
        imageSrc={'/background.png'}
        imageAlt={'bg'}
        actionNode={
          <div className="flex flex-col items-center justify-center gap-10 rounded-lg bg-primary-600 p-20">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">Amount</h3>
              <Input
                value={amount.toString()}
                onChange={(e) => setAmount(+e)}
                type="number"
              />
            </div>
            <button
              className="font-xl w-full rounded bg-accent p-4 font-semibold text-white"
              onClick={onDeposit}
            >
              Deposit
            </button>
          </div>
        }
      />
    </div>
  )
}
