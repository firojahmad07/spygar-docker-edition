import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { useMenus } from '@/providers';
import { Header, Navbar, Footer } from '../';
import { Toolbar, ToolbarHeading, ToolbarActions } from '../toolbar';
import { Link } from 'react-router-dom';

const Main = () => {
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);

  return (
    <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>
      <div className="flex grow flex-col [[data-sticky-header=on]_&]:pt-[--tw-header-height-default]">
        <Header />

        <Navbar />

        <div className="grow" role="content">
          {!pathname.includes('/public-profile/') && (
            <Toolbar>
              <ToolbarHeading />
              <ToolbarActions>
                <Link to={'public-profile/profiles/default'} className="btn btn-light btn-sm">
                  View Profile
                </Link>
              </ToolbarActions>
            </Toolbar>
          )}
          <Outlet />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export { Main };
