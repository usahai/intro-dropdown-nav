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
  handleChange?: () => void
}

const SidebarContextProvider = createContext<SidebarContextProviderProps>({
  isOpen: false,
  handleChange: undefined,
})

const SidebarContext = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      body.style.overflow = isOpen ? 'hidden' : 'auto'
    }
  }, [isOpen])

  const handleChange = () => {
    setOpen((prev) => !prev)
  }

  const value = useMemo(
    () => ({
      isOpen,
      handleChange,
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
