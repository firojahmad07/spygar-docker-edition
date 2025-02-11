import { Fragment } from 'react';
import { Container } from '@/store/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/store/layouts/demo9/toolbar';
import { Link } from 'react-router-dom';
import { Demo1LightSidebarContent } from '../light-sidebar';

const Demo1DarkSidebarPage = () => {
  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading title="Dashboard"/>
          <ToolbarActions>
            <Link to="/public-profile/profiles/default" className="btn btn-sm btn-light">
              View Profile
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <Demo1LightSidebarContent />
      </Container>
    </Fragment>
  );
};

export { Demo1DarkSidebarPage };
