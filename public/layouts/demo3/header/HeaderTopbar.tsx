import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import { Menu, MenuItem, MenuToggle } from '@/components';
import { DropdownUser } from '@/partials/dropdowns/user';
import { ModalSearch } from '@/partials/modals/search/ModalSearch';
import { DropdownNotifications } from '@/partials/dropdowns/notifications';
import { DropdownApps } from '@/partials/dropdowns/apps';
import { DropdownChat } from '@/partials/dropdowns/chat';

const HeaderTopbar = () => {
  const itemAppsRef = useRef<any>(null);
  const itemChatRef = useRef<any>(null);
  const itemNotificationsRef = useRef<any>(null);

  const handleDropdownChatShow = () => {
    window.dispatchEvent(new Event('resize'));
  };

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const handleSearchModalOpen = () => setSearchModalOpen(true);
  const handleSearchModalClose = () => {
    setSearchModalOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Link to={'account/home/get-started'} className="btn btn-xs btn-primary">
        Get Started
      </Link>

      <div className="flex items-center">
        <button
          onClick={handleSearchModalOpen}
          className="btn btn-icon btn-icon-lg size-8 text-gray-600 hover:text-primary"
        >
          <KeenIcon icon="magnifier" />
        </button>
        <ModalSearch open={searchModalOpen} onClose={handleSearchModalClose} />
      </div>

      <Menu className="items-stretch">
        <MenuItem
          ref={itemNotificationsRef}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [115, 13] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <button className="btn btn-icon btn-icon-lg size-8 text-gray-600 hover:text-primary [dropdown-open:text-primary">
              <KeenIcon icon="notification-status" />
            </button>
          </MenuToggle>
          {DropdownNotifications({ menuTtemRef: itemNotificationsRef })}
        </MenuItem>
      </Menu>

      <Menu className="items-stretch">
        <MenuItem
          ref={itemChatRef}
          onShow={handleDropdownChatShow}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [75, 13] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <button className="btn btn-icon btn-icon-lg size-8 text-gray-600 hover:text-primary [dropdown-open:text-primary">
              <KeenIcon icon="messages" />
            </button>
          </MenuToggle>

          {DropdownChat({ menuTtemRef: itemChatRef })}
        </MenuItem>
      </Menu>

      <Menu className="items-stretch">
        <MenuItem
          ref={itemAppsRef}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [10, 13] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <button className="btn btn-icon btn-icon-lg size-8 text-gray-600 hover:text-primary [dropdown-open:text-primary">
              <KeenIcon icon="element-11" />
            </button>
          </MenuToggle>

          {DropdownApps()}
        </MenuItem>
      </Menu>

      <Menu className="items-stretch -me-1">
        <MenuItem
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [-5, 10] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <div className="btn btn-icon rounded-full">
              <img
                className="size-8 rounded-full justify-center border border-gray-500 shrink-0"
                src={toAbsoluteUrl('/media/avatars/300-2.png')}
                alt=""
              />
            </div>
          </MenuToggle>
          {DropdownUser()}
        </MenuItem>
      </Menu>
    </div>
  );
};

export { HeaderTopbar };
