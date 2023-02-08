import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Button from '@/containers/Button'
import { CompanyMenu, FeaturesMenu } from '@/components/Menu'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div
      id="nav-bar-container"
      className="mx-auto flex h-16 max-w-7xl items-center"
    >
      <div id="logo" className="mb-[-0.75rem] mr-16 ">
        <Image src={Logo} alt="company-logo" height={32} />
      </div>
      <div
        id="nav-items"
        className="flex grow gap-12 font-medium text-gray-400"
      >
        <FeaturesMenu />
        <CompanyMenu />
        <span id="careers-nav" className="cursor-pointer hover:text-gray-900">
          Careers
        </span>
        <span id="about-nav" className="cursor-pointer hover:text-gray-900">
          About
        </span>
      </div>
      <div id="user-profile-button-group" className="flex gap-4">
        <Button className="duration-300" onClick={() => console.log('login!')}>
          Login
        </Button>
        <Button
          onClick={() => console.log('register!')}
          className="border-2 border-gray-400 duration-300  hover:border-gray-900"
          variant="outlined"
        >
          Register
        </Button>
      </div>
    </div>
  )
}

export default Header
