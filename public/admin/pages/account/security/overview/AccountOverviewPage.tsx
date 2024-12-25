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

import { AccountOverviewContent } from '.';
import { useLayout } from '@/admin/providers';

const AccountOverviewPage = () => {
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
              <Link to="/account/security/overview" className="btn btn-sm btn-light">
                Security History
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountOverviewContent />
      </Container>
    </Fragment>
  );
};

export { AccountOverviewPage };
