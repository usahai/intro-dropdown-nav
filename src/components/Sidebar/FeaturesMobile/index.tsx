import TodoIcon from '@/assets/icon-todo.svg'
import CalendarsIcon from '@/assets/icon-calendar.svg'
import RemindersIcon from '@/assets/icon-reminders.svg'
import PlanningIcon from '@/assets/icon-planning.svg'
import Image from 'next/image'
import clsx from 'clsx'

interface FeaturesMobileProps {
  isShow: boolean
}

const FeaturesMobile: React.FC<FeaturesMobileProps> = ({ isShow }) => {
  return (
    <div
      id="features-menu-mobile-dropdown"
      className={clsx(`ml-8 flex flex-col gap-2 text-xl text-mediumGray`, {
        ['hidden']: !isShow,
      })}
    >
      <div>
        <span className="inline-flex items-center gap-4 pl-2">
          <Image src={TodoIcon} alt="icon-todo" className="w-6" />
          Todo List
        </span>
      </div>
      <div>
        <span className="inline-flex items-center gap-4 pl-2">
          <Image src={CalendarsIcon} alt="icon-todo" className="w-6" />
          Calendar
        </span>
      </div>
      <div>
        <span className="inline-flex items-center gap-4 pl-2">
          <Image src={RemindersIcon} alt="icon-todo" className="w-6" />
          Reminders
        </span>
      </div>
      <div>
        <span className="inline-flex items-center gap-4 pl-2">
          <Image src={PlanningIcon} alt="icon-todo" className="w-6" />
          Planning
        </span>
      </div>
    </div>
  )
}

export default FeaturesMobile
