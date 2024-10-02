import clsx from 'clsx'
import {Dispatch, FC, SetStateAction} from 'react'
import {KTIcon} from '../../../helpers'

const tabs: ReadonlyArray<{link: string; icon: string; label: string}> = [
  {
    link: 'projects',
    icon: 'element-11',
    label: 'Catalog',
  },
  {
    link: 'menu',
    icon: 'briefcase',
    label: 'Sales',
  },
  {
    link: 'subscription',
    icon: 'chart-simple',
    label: 'Store',
  },
  {
    link: 'subscription',
    icon: 'chart-simple',
    label: 'Marketing',
  },
  {
    link: 'tasks',
    icon: 'shield-tick',
    label: 'Setting',
  },
  {
    link: 'notifications',
    icon: 'abstract-26',
    label: 'System',
  },
]

type Props = {
  link: string
  setLink: Dispatch<SetStateAction<string>>
}
const AsideTabs: FC<Props> = ({link, setLink}) => ( 
  <div
    className='mb-10' //hover-scroll-y if need then add this
    data-kt-scroll='true'
    data-kt-scroll-activate='{default: false, lg: true}'
    data-kt-scroll-height='auto'
    data-kt-scroll-wrappers='#kt_aside_nav'
    data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
    data-kt-scroll-offset='0px'
  >
    {/* begin::Nav */}
    <ul className='nav flex-column' id='kt_aside_nav_tabs'>
      {/* begin::Nav item */}
      {tabs.map((t) => (
        <li key={t.link}>
          {/* begin::Nav link */}
          <a
            className={clsx(
              'nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light',
              {active: t.link === link}
            )}
            onClick={() => setLink(t.link)}
            style={{ display: 'block', marginBottom: '20px' }}>
            <KTIcon iconName={t.icon} className='fs-2x' />
            <p>{t.label}</p>
          </a>
          {/* end::Nav link */}
        </li>
      ))}
      {/* end::Nav link */}
    </ul>
    {/* end::Tabs */}
  </div>
)

export {AsideTabs}
