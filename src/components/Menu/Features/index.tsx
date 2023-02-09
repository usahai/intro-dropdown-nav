import Image from 'next/image'
import styles from './index.module.css'
import TodoIcon from '@/assets/icon-todo.svg'
import CalendarsIcon from '@/assets/icon-calendar.svg'
import RemindersIcon from '@/assets/icon-reminders.svg'
import PlanningIcon from '@/assets/icon-planning.svg'
import clsx from 'clsx'

interface FeaturesMenuProps {}

const FeaturesMenu: React.FC<FeaturesMenuProps> = () => {
  return (
    <div id="features-menu-btn" className={clsx(styles.dropNavLink, 'group')}>
      <span
        id="features-dropdown"
        className="relative inline-flex cursor-pointer items-center group-hover:text-almostBlack"
      >
        <h5>Features</h5>
        <Image
          src={'/icon-arrow-down.svg'}
          alt="icon-arrow-down"
          width={20}
          height={20}
          className="ml-2 h-[30%] w-full duration-200 group-hover:rotate-180"
        />
      </span>
      <div
        id="features-menu-dropdown"
        className={clsx('rounded-md bg-white', styles.dropdownContent)}
      >
        <div>
          <span className="inline-flex items-center gap-4 pl-2">
            <Image src={TodoIcon} alt="icon-todo" />
            Todo List
          </span>
        </div>
        <div>
          <span className="inline-flex items-center gap-4 pl-2">
            <Image src={CalendarsIcon} alt="icon-todo" />
            Calendar
          </span>
        </div>
        <div>
          <span className="inline-flex items-center gap-4 pl-2">
            <Image src={RemindersIcon} alt="icon-todo" />
            Reminders
          </span>
        </div>
        <div>
          <span className="inline-flex items-center gap-4 pl-2">
            <Image src={PlanningIcon} alt="icon-todo" />
            Planning
          </span>
        </div>
      </div>
    </div>
  )
}

export default FeaturesMenu
