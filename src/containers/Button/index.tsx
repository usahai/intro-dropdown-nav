import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  id?: string
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  children: React.ReactNode
  variant?: 'normal' | 'outlined' | 'filled'
}

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  onClick,
  children,
  variant = 'normal',
}) => (
  <button
    id={id}
    className={clsx(
      className,
      {
        ['rounded-xl border border-black']: variant === 'outlined',
        ['w-[12rem] rounded-2xl border-2 border-solid border-black bg-black !p-4 text-lg font-semibold !text-white duration-500 hover:bg-white hover:!text-black']:
          variant === 'filled',
      },
      'py-2 px-4 font-medium text-gray-500 hover:text-gray-900',
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
