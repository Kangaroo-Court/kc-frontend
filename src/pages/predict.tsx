import Input from '~/components/Input'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [amount, setAmount] = useState(0)

  const onDeposit = () => {}

  return (
    <div
      className="flex h-full w-full items-center justify-end 
    "
    >
      <span
        className="fixed left-0 h-full w-1/2 py-10
      "
      >
        <Image src="/background.png" alt={''} fill />
      </span>
      <div className="flex w-1/2 items-center justify-center">
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
      </div>
    </div>
  )
}
