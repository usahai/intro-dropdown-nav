import { MouseEvent, useState } from 'react'
import CompanyMobile from './CompanyMobile'
import { MenuTypes, MobileMenuProps, SidebarMenuItemsProps } from './definition'
import FeaturesMobile from './FeaturesMobile'
import NavLinkItem from './NavLinkItem'

const SidebarMenuItems: React.FC<SidebarMenuItemsProps> = () => {
  const [menuOpen, setMenuOpen] = useState<MobileMenuProps>({
    featuresMenu: false,
    companyMenu: false,
  })

  const handleChange = (event: MouseEvent<HTMLButtonElement> | undefined) => {
    const key: MenuTypes = event?.currentTarget?.id as MenuTypes
    const currVal: boolean = menuOpen[key]

    setMenuOpen((prev) => ({
      ...prev,
      [key]: !currVal,
    }))
  }

  return (
    <div id="sidebar-menu-items" className="ml-4 mt-4 flex flex-col gap-2">
      <NavLinkItem
        id={MenuTypes.featuresMenu}
        dropdown
        isOpen={menuOpen.featuresMenu}
        handleClick={handleChange}
      >
        Features
      </NavLinkItem>
      <FeaturesMobile isShow={menuOpen[MenuTypes.featuresMenu]} />
      <NavLinkItem
        id={MenuTypes.companyMenu}
        dropdown
        isOpen={menuOpen.companyMenu}
        handleClick={handleChange}
      >
        Company
      </NavLinkItem>
      <CompanyMobile isShow={menuOpen[MenuTypes.companyMenu]} />
      <NavLinkItem>Careers</NavLinkItem>
      <NavLinkItem>About</NavLinkItem>
    </div>
  )
}

export default SidebarMenuItems
