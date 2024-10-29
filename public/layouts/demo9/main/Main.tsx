import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import {
  MenuItem,
  MenuSub,
  MenuTitle,
  MenuToggle,
  useMenuCurrentItem,
  KeenIcon,
  Menu,
  MenuLink
} from '@/components';
import { useMenus } from '@/providers';

import { Header, Navbar, Footer, Toolbar, ToolbarHeading, ToolbarActions } from '../';

interface IMainMonth {
  title: string;
  active?: boolean;
}
interface IMainMonths extends Array<IMainMonth> {}

const Main = () => {
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);

  const months: IMainMonths = [
    { title: 'January, 2024' },
    { title: 'February, 2024' },
    { title: 'March, 2024', active: true },
    { title: 'April, 2024' },
    { title: 'May, 2024' },
    { title: 'June, 2024' },
    { title: 'July, 2024' },
    { title: 'August, 2024' },
    { title: 'September, 2024' },
    { title: 'October, 2024' },
    { title: 'November, 2024' },
    { title: 'December, 2024' }
  ];

  return (
    <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>
      <div className="flex grow flex-col [[data-sticky-header=on]_&]:pt-[--tw-header-height]">
        <Header />

        <Navbar />

        <div className="container-fixed w-full flex px-0">
          <main className="flex flex-col grow" role="content">
            {!pathname.includes('/public-profile/') && (
              <Toolbar>
                <ToolbarHeading />
                <ToolbarActions>
                  <Link to={'/account/home/get-started'} className="btn btn-xs btn-sm btn-light">
                    <KeenIcon icon="exit-down" />
                    Export
                  </Link>

                  <Menu className="menu-default">
                    <MenuItem
                      toggle="dropdown"
                      trigger="hover"
                      dropdownProps={{
                        placement: 'bottom-end',
                        modifiers: [
                          {
                            name: 'offset',
                            options: {
                              offset: [0, 0] // [skid, distance]
                            }
                          }
                        ]
                      }}
                    >
                      <MenuToggle className="btn btn-light btn-sm flex-nowrap">
                        <span className="flex items-center me-1">
                          <KeenIcon icon="calendar" className="!text-md" />
                        </span>
                        <span className="hidden md:inline text-nowrap">September, 2024</span>
                        <span className="inline md:hidden text-nowrap">Sep, 2024</span>
                        <span className="flex items-center lg:ms-4">
                          <KeenIcon icon="down" className="!text-xs" />
                        </span>
                      </MenuToggle>

                      <MenuSub className="w-48 py-2 scrollable-y max-h-[250px]">
                        {months.map((item, index) => (
                          <MenuItem key={index} className={item.active ? 'active' : ''}>
                            <MenuLink path="/">
                              <MenuTitle>{item.title}</MenuTitle>
                            </MenuLink>
                          </MenuItem>
                        ))}
                      </MenuSub>
                    </MenuItem>
                  </Menu>
                </ToolbarActions>
              </Toolbar>
            )}
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export { Main };
