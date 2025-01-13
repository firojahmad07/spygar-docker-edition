import { Container } from '@/store/components/container';
import { useLayout, useMenus } from '@/store/providers';
import { NavbarMenu } from '@/store/partials/menu/NavbarMenu';
import { Navbar } from '@/store/partials/navbar';

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
