import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export type DefendantType = { id: number; address: string }

type SelectPanelProps = {
  items: DefendantType[]
  selectedOption: DefendantType | undefined
  changeSelectedOption: Dispatch<SetStateAction<DefendantType | undefined>>
}
const SelectPanel: React.FC<SelectPanelProps> = ({
  items,
  selectedOption,
  changeSelectedOption,
}) => {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'cursor-pointer rounded-lg p-4 text-xl font-medium text-primary-600 transition duration-300 hover:bg-primary-600 hover:text-accent',
            { 'bg-primary-600 text-accent': item.id === selectedOption?.id }
          )}
          onClick={() => changeSelectedOption(item)}
        >
          {item.address}
        </div>
      ))}
    </div>
  )
}
export default SelectPanel
