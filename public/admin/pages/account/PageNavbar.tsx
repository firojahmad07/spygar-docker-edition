import { Container } from '@/admin/components/container';
import { useLayout, useMenus } from '@/admin/providers';
import { NavbarMenu } from '@/admin/partials/menu/NavbarMenu';
import { Navbar } from '@/admin/partials/navbar';

const PageNavbar = () => {
  const { getMenuConfig } = useMenus();
  const { currentLayout } = useLayout();
  const menuConfig = getMenuConfig('primary');
  const accountMenuConfig = menuConfig?.['3']?.children;

  if (accountMenuConfig && currentLayout?.name === 'demo1-layout') {
    return (
      <Navbar>
        <Container>
          <NavbarMenu items={accountMenuConfig} />
        </Container>
      </Navbar>
    );
  } else {
    return <></>;
  }
};

export { PageNavbar };
