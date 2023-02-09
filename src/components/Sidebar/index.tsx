import { useSidebarContext } from '@/contexts/SidebarContext'
import clsx from 'clsx'
import Image from 'next/image'
import BurgerMenuClose from '@/assets/icon-close-menu.svg'
import SidebarMenuItems from './SidebarMenuItems'
import LoginRegister from '../Header/LoginRegister'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { isOpen, handleClose } = useSidebarContext()

  return (
    <aside
      id="sidebar-container"
      className={clsx(
        'fixed top-0 left-full z-40 h-screen w-64 duration-300 ease-in-out',
        {
          ['-translate-x-full']: isOpen,
          ['translate-x-0']: !isOpen,
        },
      )}
    >
      <div
        id="sidebar-content"
        className={clsx(
          'flex h-full flex-col overflow-y-auto !bg-white px-3 py-4 dark:bg-gray-800',
          {
            ['hidden']: !isOpen,
          },
        )}
      >
        <div
          id="close-sidebar-btn"
          className="flex justify-end pr-4"
          onClick={handleClose}
        >
          <Image src={BurgerMenuClose} alt="mobile-close-menu" height={32} />
        </div>
        <SidebarMenuItems />
        <LoginRegister />
      </div>
    </aside>
  )
}

export default Sidebar
