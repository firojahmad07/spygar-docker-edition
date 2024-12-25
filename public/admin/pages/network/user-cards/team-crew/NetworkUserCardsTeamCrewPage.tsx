import { Fragment } from 'react';

import { Container } from '@/admin/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/admin/partials/toolbar';

import { NetworkUserCardsTeamCrewContent } from '.';
import { useLayout } from '@/admin/providers'; 

const NetworkUserCardsTeamCrewPage = () => {
  const { currentLayout } = useLayout ();

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>Central Hub for Personal Customization</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Upload CSV
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Add User
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <NetworkUserCardsTeamCrewContent />
      </Container>
    </Fragment>
  );
};

export { NetworkUserCardsTeamCrewPage };
