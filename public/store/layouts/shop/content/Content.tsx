import { Outlet } from 'react-router';

import { Container } from '@/admin/components/container';
import { useResponsive } from '@/admin/hooks';

import { Breadcrumbs } from '..';

const Content = () => {
  const mobileMode = useResponsive('down', 'lg');

  return (
    <div className="grow content pt-5" role="content">
      {mobileMode && (
        <Container>
          <Breadcrumbs />
        </Container>
      )}
      <Outlet />
    </div>
  );
};

export { Content };
