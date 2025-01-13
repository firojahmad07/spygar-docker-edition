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

import { AccountAllowedIPAddressesContent } from '.';
import { useLayout } from '@/store/providers';

const AccountAllowedIPAddressesPage = () => {
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
                Security Overview
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <AccountAllowedIPAddressesContent />
      </Container>
    </Fragment>
  );
};

export { AccountAllowedIPAddressesPage };
