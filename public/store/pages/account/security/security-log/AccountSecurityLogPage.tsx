import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@/admin/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/admin/partials/toolbar';
import { PageNavbar } from '@/admin/pages/account';

import { AccountSecurityLogContent } from '.';
import { useLayout } from '@/admin/providers';

const AccountSecurityLogPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-sm text-gray-600">Authorized Devices for Report Access</span>
                  <span className="size-0.75 bg-gray-600 rounded-full"></span>
                  <a href="#" className="font-semibold btn btn-link link">
                    Unlink All Devices
                  </a>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to="/account/security/overview" className="btn btn-sm btn-light">
                Security Overview
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountSecurityLogContent />
      </Container>
    </Fragment>
  );
};

export { AccountSecurityLogPage };
