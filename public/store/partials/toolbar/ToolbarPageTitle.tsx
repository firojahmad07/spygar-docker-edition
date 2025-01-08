import { useLocation } from 'react-router';

import { useMenuCurrentItem } from '@/admin/components/menu';
import { useMenus } from '@/admin/providers';

import { IToolbarPageTitleProps } from './types';

const ToolbarPageTitle = ({ text }: IToolbarPageTitleProps) => {
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);

  return (
    <h1 className="text-xl font-semibold leading-none text-gray-900">{text ?? menuItem?.title}</h1>
  );
};

export { ToolbarPageTitle };
