import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

type SelectPanelProps<T> = {
  items: T[]
  selectedOption: T | undefined
  changeSelectedOption: Dispatch<SetStateAction<T | undefined>>
  isHorizontal?: boolean
}
export default function SelectPanel<T extends { id: number; label: string }>({
  items,
  selectedOption,
  changeSelectedOption,
  isHorizontal = false,
}: SelectPanelProps<T>) {
  return (
    <div
      className={clsx('flex gap-5', {
        'flex-row': isHorizontal,
        'flex-col': !isHorizontal,
      })}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'cursor-pointer rounded-lg p-4 text-xl font-medium text-primary-600 transition duration-300 hover:bg-primary-600 hover:text-accent',
            { 'bg-primary-600 text-accent': item.id === selectedOption?.id }
          )}
          onClick={() => changeSelectedOption(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}
