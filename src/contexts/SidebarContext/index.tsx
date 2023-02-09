import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface SidebarContextProviderProps {
  isOpen: boolean
  handleOpen?: () => void
  handleClose?: () => void
}

const SidebarContextProvider = createContext<SidebarContextProviderProps>({
  isOpen: false,
  handleOpen: undefined,
  handleClose: undefined,
})

const SidebarContext = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      body.style.overflow = isOpen ? 'hidden' : 'auto'
    }
  }, [isOpen])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const value = useMemo(
    () => ({
      isOpen,
      handleOpen,
      handleClose,
    }),
    [isOpen],
  )

  return (
    <SidebarContextProvider.Provider value={value}>
      {children}
    </SidebarContextProvider.Provider>
  )
}

const useSidebarContext = () => {
  const context = useContext(SidebarContextProvider)

  if (context === undefined) {
    throw new Error(
      'Please use SidebarContext within the SidebarContextProvider',
    )
  }

  return context
}

export { SidebarContext, useSidebarContext }
