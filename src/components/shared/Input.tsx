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
        'border-input-border items-center gap-6 rounded-lg border border-solid bg-primary-600  px-4 pl-2 font-medium text-white focus-visible:outline-none disabled:bg-opacity-30',
        {
          'accent-primary h-4 w-4': size === 'checkbox',
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
