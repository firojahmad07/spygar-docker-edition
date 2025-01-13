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

import { AccountMembersStarterContent } from '.';
import { useLayout } from '@/store/providers';

const AccountMembersStarterPage = () => {
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
                Invite with Link
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Invite People
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountMembersStarterContent />
      </Container>
    </Fragment>
  );
};

export { AccountMembersStarterPage };
