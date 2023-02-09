import Button from '@/containers/Button'
import clsx from 'clsx'
import Image from 'next/image'
import { NavLinkItemProps } from './definition'

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  children,
  id,
  dropdown = false,
  isOpen,
  handleClick,
}) => {
  return (
    <Button
      id={id}
      className="flex items-center gap-4 text-2xl text-gray-500 hover:text-gray-500"
      onClick={handleClick}
    >
      {children}
      {dropdown && (
        <Image
          src={'/icon-arrow-down.svg'}
          alt="icon-arrow-down"
          width={16}
          height={16}
          className={clsx('ml-2 h-[30%] w-4 duration-200', {
            ['rotate-180 ']: isOpen,
          })}
        />
      )}
    </Button>
  )
}

export default NavLinkItem
