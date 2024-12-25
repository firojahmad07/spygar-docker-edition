import { Fragment } from 'react';

import { Container } from '@/admin/components/container';
import { toAbsoluteUrl } from '@/admin/utils/Assets';
import { KeenIcon } from '@/admin/components';

import { UserProfileHero } from '@/admin/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/admin/partials/navbar';
import { PageMenu } from '@/admin/pages/public-profile';

import { ProfileGamerContent } from '.';

const ProfileGamerPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-27.png')}
      className="rounded-full border-3 border-success max-h-[100px] max-w-full"
    />
  );

  return (
    <Fragment>
      <UserProfileHero
        name="Floyd Miles"
        image={image}
        info={[
          { label: 'SF, Bay Area', icon: 'geolocation' },
          { label: 'floydgg', icon: 'twitch' },
          { email: 'Level 22', icon: '' }
        ]}
      />

      <Container>
        <Navbar>
          <PageMenu />

          <NavbarActions>
            <button className="dropdown-toggle btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Connect
            </button>
            <button className="dropdown-toggle btn btn-sm btn-light">
              <KeenIcon icon="plus-squared" /> Invite to Team
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <ProfileGamerContent />
      </Container>
    </Fragment>
  );
};

export { ProfileGamerPage };
