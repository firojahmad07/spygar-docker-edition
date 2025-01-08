import { Fragment } from 'react';

import { Container } from '@/admin/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/admin/partials/toolbar';


import { Users } from '@/admin/pages/network/user-table/team-crew/blocks/users/Users';

// public/pages/network/user-table/team-crew/blocks/users/Users.tsx
import { MiscFaq, MiscHelp2 } from '@/admin/partials/misc';

const NetworkUserTableTeamCrewContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Users />
    </div>
  );
};

import { useLayout } from '@/admin/providers'; 

const Channels = () => {
  const { currentLayout } = useLayout ();

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">All Members:</span>
                  <span className="text-md text-gray-800 font-medium me-2">49,053</span>
                  <span className="text-md text-gray-700">Pro Licenses</span>
                  <span className="text-md text-gray-800 font-medium">724</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Import CSV
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Add Member
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <NetworkUserTableTeamCrewContent />
      </Container>
    </Fragment>
  );
};

export { Channels };
