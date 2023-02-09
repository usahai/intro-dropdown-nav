import { MouseEventHandler } from 'react'

export interface SidebarMenuItemsProps {}

export interface NavLinkItemBaseProps {
  children: React.ReactNode
  id?: string
}

type DropdownState =
  | {
      dropdown: true
      isOpen: boolean
      handleClick: MouseEventHandler<HTMLButtonElement> | undefined
    }
  | {
      dropdown?: false
      isOpen?: undefined
      handleClick?: undefined
    }

export type NavLinkItemProps = DropdownState & NavLinkItemBaseProps

export enum MenuTypes {
  featuresMenu = 'featuresMenu',
  companyMenu = 'companyMenu',
}

export type MobileMenuProps = {
  [key in MenuTypes]: boolean
}
