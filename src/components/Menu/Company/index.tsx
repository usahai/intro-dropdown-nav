import Image from 'next/image'
import styles from './index.module.css'
import clsx from 'clsx'

interface CompanyMenuProps {}

const CompanyMenu: React.FC<CompanyMenuProps> = () => {
  return (
    <div id="company-menu-btn" className={clsx(styles.dropNavLink, 'group')}>
      <span
        id="company-dropdown"
        className=" relative inline-flex cursor-pointer items-center group-hover:text-almostBlack"
      >
        <h5>Company</h5>
        <Image
          src={'/icon-arrow-down.svg'}
          alt="icon-arrow-down"
          width={20}
          height={20}
          className="ml-2 h-[30%] w-full duration-200 group-hover:rotate-180"
        />
      </span>
      <div
        id="company-menu-dropdown"
        className={clsx('rounded-md bg-white', styles.dropdownContent)}
      >
        <div>
          <span className="inline-flex items-center gap-4 pl-2">History</span>
        </div>
        <div>
          <span className="inline-flex items-center gap-4 pl-2">Our Team</span>
        </div>
        <div>
          <span className="inline-flex items-center gap-4 pl-2">Blog</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyMenu
