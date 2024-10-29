import { Link, useLocation } from 'react-router-dom';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import {
  Menu,
  MenuArrow,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';
import { MENU_ROOT } from '@/config';
import { useEffect, useState } from 'react';
import { useDemo3Layout } from '..';

const HeaderLogo = () => {
  const { pathname } = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(MENU_ROOT[1]);
  const { setMobileSidebarOpen } = useDemo3Layout();

  const handleSidebarOpen = () => {
    setMobileSidebarOpen(true);
  };

  useEffect(() => {
    MENU_ROOT.forEach((item) => {
      if (item.rootPath && pathname.includes(item.rootPath)) {
        setSelectedMenuItem(item);
      }
    });
  }, [pathname]);

  return (
    <div className="flex items-center mr-1">
      <div className="flex items-center justify-center lg:w-[--tw-sidebar-width] gap-2 shrink-0">
        <button
          type="button"
          onClick={handleSidebarOpen}
          className="btn btn-icon btn-light btn-clear btn-sm -ms-2 lg:hidden"
        >
          <KeenIcon icon="menu" />
        </button>

        <Link to="/" className="mx-1">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-primary.svg')}
            className="dark:hidden min-h-[24px]"
            alt="logo"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-primary-dark.svg')}
            className="hidden dark:inline-block min-h-[24px]"
            alt="logo"
          />
        </Link>

         
      </div>
      <div className="flex items-center">
          <h3 className="text-gray-700 text-base hidden md:block">MetronicTeam</h3>
          <span className="text-sm text-gray-400 font-medium px-2.5 hidden md:inline">/</span>

          <Menu className="menu-default">
            <MenuItem
              toggle="dropdown"
              trigger="hover"
              dropdownProps={{
                placement: 'bottom-start',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10] // [skid, distance]
                    }
                  }
                ]
              }}
            >
              <MenuToggle>
                <MenuTitle className="!text-gray-900 !text-base !font-medium">
                  {selectedMenuItem.title}
                </MenuTitle>
                <MenuArrow>
                  <KeenIcon icon="down" />
                </MenuArrow>
              </MenuToggle>
              <MenuSub className="menu-default">
                {MENU_ROOT.map((item, index) => (
                  <MenuItem key={index} className={item === selectedMenuItem ? 'active' : ''}>
                    <MenuLink path={item.path}>
                      {item.icon && (
                        <MenuIcon>
                          <KeenIcon icon={item.icon} />
                        </MenuIcon>
                      )}
                      <MenuTitle>{item.title}</MenuTitle>
                    </MenuLink>
                  </MenuItem>
                ))}
              </MenuSub>
            </MenuItem>
          </Menu>
        </div>
    </div>
  );
};

export { HeaderLogo };
