import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import BurgerMenu from '@/assets/icon-menu.svg'
import Button from '@/containers/Button'
import { CompanyMenu, FeaturesMenu } from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import { useSidebarContext } from '@/contexts/SidebarContext'
import clsx from 'clsx'
import LoginRegister from './LoginRegister'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { isOpen, handleOpen } = useSidebarContext()

  return (
    <div
      id="nav-bar-container"
      className={clsx('mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-0', {
        ['z-20 w-full bg-black/60']: isOpen,
      })}
    >
      <div id="logo" className="mb-[-0.75rem] grow sm:mr-16 sm:grow-0">
        <Image src={Logo} alt="company-logo" height={32} />
      </div>
      <div
        id="nav-items"
        className="hidden grow gap-12 font-medium text-mediumGray sm:flex"
      >
        <FeaturesMenu />
        <CompanyMenu />
        <span
          id="careers-nav"
          className="cursor-pointer hover:text-almostBlack"
        >
          Careers
        </span>
        <span id="about-nav" className="cursor-pointer hover:text-almostBlack">
          About
        </span>
      </div>
      <LoginRegister className="hidden sm:flex" />
      <div id="burger-menu" className="block sm:hidden">
        <Button onClick={handleOpen}>
          <Image src={BurgerMenu} alt="mobile-open-menu" height={16} />
        </Button>
      </div>
      <div id="sidebar-container" className="block sm:hidden">
        <Sidebar />
      </div>
    </div>
  )
}

export default Header
