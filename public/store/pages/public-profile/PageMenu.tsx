import { useMenus } from '@/store/providers';
import { NavbarMenu } from '@/store/partials/menu/NavbarMenu';

const PageMenu = () => {
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const accountMenuConfig = menuConfig?.['2']?.children;

  if (accountMenuConfig) {
    return <NavbarMenu items={accountMenuConfig} />;
  } else {
    return <>test</>;
  }
};

export { PageMenu };
