import { Fragment } from 'react';

import { Container } from '@/admin/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/admin/partials/toolbar';
import { PageNavbar } from '@/admin/pages/account';

import { AccountBackupAndRecoveryContent } from '.';
import { useLayout } from '@/admin/providers';

const AccountBackupAndRecoveryPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>Central Hub for Personal Customization</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Order History
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountBackupAndRecoveryContent />
      </Container>
    </Fragment>
  );
};

export { AccountBackupAndRecoveryPage };
