import clsx from 'clsx'

interface CompanyMobileProps {
  isShow: boolean
}

const CompanyMobile: React.FC<CompanyMobileProps> = ({ isShow }) => {
  return (
    <div
      id="company-menu-mobile-dropdown"
      className={clsx(`ml-8 flex flex-col gap-2 text-xl text-gray-500`, {
        ['hidden']: !isShow,
      })}
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
  )
}

export default CompanyMobile
