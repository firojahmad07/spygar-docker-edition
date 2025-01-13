import { Fragment } from 'react';

import { Container } from '@/store/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/store/partials/toolbar';
import { PageNavbar } from '@/store/pages/account';

import { AccountRolesContent } from '.';
import { useLayout } from '@/store/providers';

const AccountRolesPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>Overview of all team members and roles.</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                New Role
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountRolesContent />
      </Container>
    </Fragment>
  );
};

export { AccountRolesPage };
