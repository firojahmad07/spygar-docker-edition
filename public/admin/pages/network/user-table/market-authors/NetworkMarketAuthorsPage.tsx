import { Fragment } from 'react';

import { Container } from '@/admin/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/admin/partials/toolbar';

import { NetworkMarketAuthorsContent } from '.';
import { useLayout } from '@/admin/providers'; 

const NetworkMarketAuthorsPage = () => {
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
        <NetworkMarketAuthorsContent />
      </Container>
    </Fragment>
  );
};

export { NetworkMarketAuthorsPage };
