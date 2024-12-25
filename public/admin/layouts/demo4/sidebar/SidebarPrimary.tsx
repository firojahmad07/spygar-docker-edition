import { Link, useLocation } from 'react-router-dom';
import { KeenIcon, Menu, MenuItem, MenuToggle, DefaultTooltip } from '@/admin/components';
import { useEffect, useRef, useState } from 'react';
import { getHeight, toAbsoluteUrl } from '@/admin/utils';
import { useViewport } from '@/admin/hooks';
import { DropdownUser } from '@/admin/partials/dropdowns/user';
import { DropdownChat } from '@/admin/partials/dropdowns/chat';
import { DropdownApps } from '@/admin/partials/dropdowns/apps';

interface IMenuItem {
  icon: string;
  tooltip: string;
  path: string;
  rootPath?: string;
}

const menuItems: IMenuItem[] = [
  { icon: 'chart-line-star', tooltip: 'Dashboard', path: '/', rootPath: '/' },
  {
    icon: 'tab-tablet',
    tooltip: 'Products',
    path: '/authentication/get-started',
    rootPath: 'authentication/'
  },
  {
    icon: 'bookmark',
    tooltip: 'Sales',
    path: '/account/security/security-log',
    rootPath: '/account/'
  },
  {
    icon: 'shop',
    tooltip: 'Store',
    path: '/account/security/security-log',
    rootPath: '/account/'
  },
  {
    icon: 'setting-2',
    tooltip: 'Setting',
    path: '/account/home/get-started',
    rootPath: '/account/'
  },
  {
    icon: 'setting-3',
    tooltip: 'System',
    path: '/account/home/get-started',
    rootPath: '/account/'
  },
  { icon: 'users', tooltip: 'Network', path: '/network/get-started', rootPath: 'network/' },
  {
    icon: 'security-user',
    tooltip: 'Authentication',
    path: '/authentication/get-started',
    rootPath: 'authentication/'
  },
  {
    icon: 'profile-circle',
    tooltip: 'Profile',
    path: '/public-profile/profiles/default',
    rootPath: 'public-profile/'
  },
  { icon: 'code', tooltip: 'Plans', path: '/account/billing/plans', rootPath: '' },
 
  { icon: 'cheque', tooltip: 'Notifications', path: '/account/notifications', rootPath: '' },
  { icon: 'code', tooltip: 'ACL', path: '/account/members/roles', rootPath: '' },
  { icon: 'question', tooltip: 'API Keys', path: '/account/api-keys', rootPath: '' }
];

const SidebarPrimary = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const scrollableOffset = 80;

  useEffect(() => {
    if (headerRef.current && footerRef.current) {
      const headerHeight = getHeight(headerRef.current);
      const footerHeight = getHeight(footerRef.current);
      const availableHeight = viewportHeight - headerHeight - footerHeight - scrollableOffset;
      setScrollableHeight(availableHeight);
    } else {
      setScrollableHeight(viewportHeight);
    }
  }, [viewportHeight]);

  const { pathname } = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);

  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.rootPath === pathname || (item.rootPath && pathname.includes(item.rootPath))) {
        setSelectedMenuItem(item);
      }
    });
  }, [pathname]);
  const itemChatRef = useRef<any>(null);
  const handleDropdownChatShow = () => {
    window.dispatchEvent(new Event('resize'));
  };

  return (
    <div className="flex flex-col items-stretch shrink-0 gap-5 py-5 w-[70px] border-e border-gray-300 dark:border-gray-200">
      <div ref={headerRef} className="hidden lg:flex items-center justify-center shrink-0">
        <Link to="/">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
            className="dark:hidden min-h-[30px]"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
            className="hidden dark:block min-h-[30px]"
          />
        </Link>
      </div>
      <div className="flex grow shrink-0">
        <div
          className="scrollable-y-hover grow gap-2.5 shrink-0 flex ps-4 flex-col"
          style={{
            height: `${scrollableHeight}px`
          }}
        >
          {menuItems.map((item, index) => (
            <DefaultTooltip key={index} title={item.tooltip} placement="right">
              <Link
                key={index}
                to={item.path}
                className={`btn btn-icon btn-icon-xl rounded-md size-9 border border-transparent text-gray-600 hover:bg-light hover:text-primary hover:border-gray-200 ${item === selectedMenuItem && 'active bg-light text-primary border-gray-200'}`}
              >
                <KeenIcon icon={item.icon} />
              </Link>
            </DefaultTooltip>
          ))}
        </div>
      </div>
      <div ref={footerRef} className="flex flex-col gap-5 items-center shrink-0">
        <div className="flex flex-col gap-1.5">
          <Menu>
            <MenuItem
              ref={itemChatRef}
              onShow={handleDropdownChatShow}
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: 'right-end',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [10, 15] // [skid, distance]
                    }
                  }
                ]
              }}
            >
              <MenuToggle>
                <button className="btn btn-icon btn-icon-xl size-9 border border-transparent hover:bg-light hover:text-primary hover:border-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                  <KeenIcon icon="messages" />
                </button>
              </MenuToggle>

              {DropdownChat({ menuTtemRef: itemChatRef })}
            </MenuItem>
          </Menu>

          <Menu>
            <MenuItem
              ref={itemChatRef}
              onShow={handleDropdownChatShow}
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: 'right-end',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [-10, 15] // [skid, distance]
                    }
                  }
                ]
              }}
            >
              <MenuToggle className="btn btn-icon btn-icon-xl size-9 border border-transparent hover:bg-light hover:text-primary hover:border-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                <KeenIcon icon="setting-4" className="text-gray-600" />
              </MenuToggle>

              {DropdownApps()}
            </MenuItem>
          </Menu>
        </div>

        <Menu>
          <MenuItem
            toggle="dropdown"
            trigger="click"
            dropdownProps={{
              placement: 'right-end',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [-10, 15]
                  }
                }
              ]
            }}
          >
            <MenuToggle>
              <div className="btn btn-icon rounded-full">
                <img
                  className="size-8 rounded-full justify-center border border-gray-500 shrink-0"
                  src={toAbsoluteUrl('/media/avatars/gray/5.png')}
                  alt=""
                />
              </div>
            </MenuToggle>
            {DropdownUser()}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export { SidebarPrimary };
