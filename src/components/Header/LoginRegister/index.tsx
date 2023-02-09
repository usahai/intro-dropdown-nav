import Button from '@/containers/Button'
import clsx from 'clsx'

interface LoginRegisterProp {
  className?: string
}

const LoginRegister: React.FC<LoginRegisterProp> = ({ className }) => {
  return (
    <div
      id="user-profile-button-group"
      className={clsx('flex flex-col gap-4 sm:flex-row', className)}
    >
      <Button
        className="duration-300 focus:text-gray-500"
        onClick={() => console.log('login!')}
      >
        Login
      </Button>
      <Button
        onClick={() => console.log('register!')}
        className="border-2 border-gray-400 duration-300 hover:border-gray-900 focus:text-gray-500"
        variant="outlined"
      >
        Register
      </Button>
    </div>
  )
}

export default LoginRegister
