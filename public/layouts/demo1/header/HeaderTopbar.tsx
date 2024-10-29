import { useRef, useState } from 'react';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import { Menu, MenuItem, MenuToggle } from '@/components';
import { DropdownUser } from '@/partials/dropdowns/user';
import { DropdownNotifications } from '@/partials/dropdowns/notifications';
import { DropdownApps } from '@/partials/dropdowns/apps';
import { DropdownChat } from '@/partials/dropdowns/chat';
import { ModalSearch } from '@/partials/modals/search/ModalSearch';

const HeaderTopbar = () => {
  const itemChatRef = useRef<any>(null);
  const itemAppsRef = useRef<any>(null);
  const itemNotificationsRef = useRef<any>(null);

  const handleShow = () => {
    window.dispatchEvent(new Event('resize'));
  };

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const handleOpen = () => setSearchModalOpen(true);
  const handleClose = () => {
    setSearchModalOpen(false);
  };

  return (
    <div className="flex items-stretch gap-1 lg:gap-3.5">
      <div className="flex items-center">
        <button
          onClick={handleOpen}
          className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
        >
          <KeenIcon icon="magnifier" />
        </button>
        <ModalSearch open={searchModalOpen} onClose={handleClose} />
      </div>

      <Menu className="items-stretch">
        <MenuItem
          ref={itemChatRef}
          onShow={handleShow}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [170, 0] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <div className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500 menu-item-show:bg-primary-light menu-item-show:text-primary">
              <KeenIcon icon="messages" />
            </div>
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
                  offset: [10, 0] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <div className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500 menu-item-show:bg-primary-light menu-item-show:text-primary">
              <KeenIcon icon="element-11" />
            </div>
          </MenuToggle>

          {DropdownApps()}
        </MenuItem>
      </Menu>

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
                  offset: [70, 0] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <div className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500 menu-item-show:bg-primary-light menu-item-show:text-primary">
              <KeenIcon icon="notification-on" />
            </div>
          </MenuToggle>
          {DropdownNotifications({ menuTtemRef: itemNotificationsRef })}
        </MenuItem>
      </Menu>

      <Menu className="items-stretch -me-2">
        <MenuItem
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [20, 0] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle>
            <div className="btn btn-icon rounded-full">
              <img
                className="size-9 rounded-full border-2 border-success shrink-0"
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
