import clsx from 'clsx'
import { HTMLInputTypeAttribute } from 'react'

type InputProps = {
  value: string | undefined
  type?: HTMLInputTypeAttribute
  size?: 'md' | 'checkbox'
  onChange: (value: string) => void
  isDisabled?: boolean
  checked?: boolean
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  value,
  type = 'text',
  size = 'md',
  onChange,
  isDisabled = false,
  checked = false,
  placeholder,
}: InputProps) => {
  return (
    <input
      className={clsx(
        'items-center gap-6 pl-2 border-input-border rounded-lg border border-solid  px-4 font-medium focus-visible:outline-none bg-gray-700 text-white',
        {
          'h-4 w-4 accent-primary': size === 'checkbox',
          'h-8 py-6': size === 'md',
        }
      )}
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      disabled={isDisabled}
      checked={checked}
      placeholder={placeholder}
    />
  )
}

export default Input
