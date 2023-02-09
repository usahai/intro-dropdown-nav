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
        ['w-[12rem] rounded-2xl border-2 border-solid border-black bg-black !p-4 text-lg font-semibold !text-almostWhite sm:duration-500 sm:hover:bg-white sm:hover:!text-almostBlack']:
          variant === 'filled',
      },
      'py-2 px-4 font-medium text-mediumGray hover:text-almostBlack',
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
