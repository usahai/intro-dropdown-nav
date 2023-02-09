import HeroDesktop from '@/assets/image-hero-desktop.png'
import HeroMobile from '@/assets/image-hero-mobile.png'
import Client1 from '@/assets/client-databiz.svg'
import Client2 from '@/assets/client-audiophile.svg'
import Client3 from '@/assets/client-meet.svg'
import Client4 from '@/assets/client-maker.svg'
import Image from 'next/image'
import Button from '@/containers/Button'

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const handleClick = () => {
    window.alert('Learn more!')
  }

  return (
    <div
      id="home-container"
      className="mt-8 flex flex-col-reverse text-center sm:mt-16 sm:flex-row sm:text-left"
    >
      <div
        id="details-lhs-container"
        className="flex w-full flex-col sm:h-[48rem] sm:w-1/2"
      >
        <div
          id="details-interactive"
          className="flex grow flex-col justify-center gap-8 "
        >
          <div id="title-text">
            <h1 className="hidden text-[6rem] font-bold leading-[5rem] sm:block">
              Make
              <br />
              remote work
            </h1>
            <h1 className="mt-8 block text-4xl font-bold sm:hidden">
              Make remote work
            </h1>
          </div>
          <div id="description-text">
            <p className="text-lg text-mediumGray sm:text-2xl">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div id="learn-more-btn-container">
            <Button variant="filled" onClick={handleClick}>
              Learn more
            </Button>
          </div>
        </div>
        <div
          id="clients"
          className="my-8 flex items-center justify-center gap-4 px-2 sm:my-0 sm:justify-start sm:gap-10 sm:px-0"
        >
          <Image
            src={Client1}
            alt="client-databiz"
            className="w-1/5 sm:w-fit"
          />
          <Image
            src={Client2}
            alt="client-audiophile"
            className="w-1/5 sm:w-fit"
          />
          <Image src={Client3} alt="client-meet" className="w-1/5 sm:w-fit" />
          <Image src={Client4} alt="client-maker" className="w-1/5 sm:w-fit" />
        </div>
      </div>

      <div
        id="image-rhs-container"
        className="relative w-full sm:h-[48rem] sm:w-1/2"
      >
        <Image
          src={HeroDesktop}
          alt="Hero"
          className="hidden h-full w-full object-contain sm:block"
        />
        <Image
          src={HeroMobile}
          alt="Hero"
          className="block h-full w-full object-contain sm:hidden"
        />
      </div>
    </div>
  )
}

export default HomePage
