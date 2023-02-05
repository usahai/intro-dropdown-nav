import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Button from '@/containers/Button'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div
      id="nav-bar-container"
      className="mx-auto flex h-16 max-w-7xl items-center"
    >
      <div id="logo" className="mb-[-0.75rem] mr-16">
        <Image src={Logo} alt="company-logo" height={32} />
      </div>
      <div id="nav-items" className="flex grow gap-12">
        <span id="features-dropdown">Features</span>
        <span id="company-dropdown">Company</span>
        <span id="careers-nav">Careers</span>
        <span id="about-nav">About</span>
      </div>
      <div id="user-profile-button-group" className="flex gap-4">
        <Button
          onClick={() => console.log('login!')}
          className="py-2 px-4 font-medium text-gray-400 hover:text-gray-900"
        >
          Login
        </Button>
        <Button
          onClick={() => console.log('register!')}
          className="border-2 border-gray-400 py-2 px-4 font-medium text-gray-400 hover:border-gray-900 hover:text-gray-900"
          variant="outlined"
        >
          Register
        </Button>
      </div>
    </div>
  )
}

export default Header
