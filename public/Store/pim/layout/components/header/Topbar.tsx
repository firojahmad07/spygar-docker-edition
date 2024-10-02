
import {FC} from 'react'
import {KTIcon,toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from '../../../partials'

const Topbar: FC = () => (
  <div className='d-flex flex-shrink-0'>
    {/* begin::Invite user */}
    <div className='d-flex ms-3'>
      <a
        href='#'
        className='btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_invite_friends'
      >
        <KTIcon iconName='plus' className='fs-2 text-primary me-0 me-md-2' />
        <span className='d-none d-md-inline'>New Member</span>
      </a>
    </div>
    {/* end::Invite user */}
     {/* begin::User */}
      <div className='d-flex align-items-center mb-10' id='kt_header_user_menu_toggle'>
        {/* begin::Menu wrapper */}
        <div
          className='cursor-pointer symbol symbol-40px'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='false'
          data-kt-menu-placement='top-start'
          title='User profile'
        >
          <img src={toAbsoluteUrl('media/avatars/300-1.jpg')} alt='avatar' />
        </div>
        {/* end::Menu wrapper */}
        <HeaderUserMenu />
      </div>
      {/* end::User */}
  </div>
)

export {Topbar}
