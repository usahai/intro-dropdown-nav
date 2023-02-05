import HeroDesktop from '@/assets/image-hero-desktop.png'
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
      className=" mt-16 flex flex-row-reverse md:flex-row"
    >
      <div id="details-lhs-container" className="flex h-[48rem] w-1/2 flex-col">
        <div
          id="details-interactive"
          className="flex grow flex-col justify-center gap-8 "
        >
          <div id="title-text">
            <h1 className="text-[6rem] font-bold leading-[5rem]">
              Make
              <br />
              remote work
            </h1>
          </div>
          <div id="description-text">
            <p className="text-2xl text-gray-400">
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
        <div id="clients" className="flex items-center gap-10">
          <Image src={Client1} alt="client-databiz" />
          <Image src={Client2} alt="client-audiophile" />
          <Image src={Client3} alt="client-meet" />
          <Image src={Client4} alt="client-maker" />
        </div>
      </div>

      <div id="image-rhs-container" className="relative h-[48rem] w-1/2">
        <Image
          src={HeroDesktop}
          alt="Hero"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default HomePage
