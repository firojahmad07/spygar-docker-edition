import { KeenIcon } from '@/admin/components/keenicons';
import {
  IMenuItemConfig,
  Menu,
  MenuArrow,
  TMenuConfig,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSeparator,
  MenuSub,
  MenuTitle
} from '@/admin/components/menu';
import { useMenus } from '@/admin/providers';
import { useResponsive } from '@/admin/hooks';

const SidebarMenu = () => {
  const isDesktop = useResponsive('up', 'lg');
  const { getMenuConfig } = useMenus();
  const primaryMenuConfig = getMenuConfig('primary');
  console.log('primaryMenuConfig', primaryMenuConfig);
  const megaMenuConfig = getMenuConfig('mega');
  const menuConfig = [
    {
      title: 'Dashboard',
      icon: 'chart-line-star',
      path: '/'
    },
    {
      title: 'Products',
      icon: 'tab-tablet',
      path: '/products'
    },
    {
      title: 'Sales',
      icon: 'bookmark',
      children: primaryMenuConfig?.[1].children 
    },
    {
      title: 'Store',
      icon: 'shop',
      children: primaryMenuConfig?.[2].children
    },
    {
      title: 'Settings',
      icon: 'setting-2',
      children: primaryMenuConfig?.[3].children
    },
    {
      title: 'System',
      icon: 'setting-3',
      children: primaryMenuConfig?.[4].children
    },
  ];

  const buildMenu = (items: TMenuConfig) => {
    return items.map((item, index) => {
      return buildMenuItemRoot(item, index);
    });
  };

  const buildMenuItemRoot = (item: IMenuItemConfig, index: number, level: number = 0) => {
    if (item.children) {
      return (
        <MenuItem
          key={index}
          toggle="dropdown"
          trigger="hover"
          dropdownProps={{
            placement: 'right-start',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [-10, 14]
                }
              }
            ]
          }}
        >
          <MenuLink
            className="
              rounded-[9px] 
              border 
              border-transparent
              menu-item-here:border-gray-200 
              menu-item-here:bg-light 
              menu-link-hover:bg-light  
              menu-link-hover:border-gray-200  
              w-[62px]
              h-[60px]
              flex flex-col 
              justify-center 
              items-center 
              gap-1 p-2 
              grow
            "
          >
            {item.icon && (
              <MenuIcon
                className="
                  menu-item-here:text-primary
                  menu-item-active:text-primary
                  menu-link-hover:text-primary
                  text-gray-600
                "
              >
                <KeenIcon icon={item.icon} className="text-1.5xl" />
              </MenuIcon>
            )}
            <MenuTitle
              className="
                menu-item-here:text-primary
                menu-item-active:text-primary
                menu-link-hover:text-primary
                font-medium
                text-xs
                text-gray-600
              "
            >
              {item.title}
            </MenuTitle>
          </MenuLink>
          <MenuSub className="menu-default gap-0.5 w-[220px] scrollable-y-auto lg:overflow-visible max-h-[50vh]">
            {buildMenuChildren(item.children, level + 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink
            path={item.path}
            className="
              rounded-[9px] 
              border 
              border-transparent
              menu-item-active:border-gray-200 
              menu-item-active:bg-light 
              menu-link-hover:bg-light  
              menu-link-hover:border-gray-200
              w-[62px]
              h-[60px]
              flex 
              flex-col 
              justify-center 
              items-center 
              gap-1 p-2
            "
          >
            {item.icon && (
              <MenuIcon
                className="
                  menu-item-here:text-primary
                  menu-item-active:text-primary
                  menu-link-hover:text-primary
                  text-gray-600
                "
              >
                <KeenIcon icon={item.icon} className="text-1.5xl" />
              </MenuIcon>
            )}
            <MenuTitle
              className="
                menu-item-here:text-primary
                menu-item-active:text-primary
                menu-link-hover:text-primary
                font-medium
                text-xs
                text-gray-600
              "
            >
              {item.title}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };

  const buildMenuChildren = (items: TMenuConfig, level: number) => {
    return items.map((item, index) => {
      if (!item.disabled) {
        return buildMenuItemChild(item, index, level);
      }
    });
  };

  const buildMenuItemChild = (item: IMenuItemConfig, index: number, level: number = 0) => {
    if (item.separator) {
      return <MenuSeparator key={index} />;
    } else if (item.children) {
      return (
        <MenuItem
          key={index}
          toggle={isDesktop ? 'dropdown' : 'accordion'}
          trigger={isDesktop ? 'hover' : 'click'}
          dropdownProps={{
            placement: 'right-start'
          }}
        >
          <MenuLink className="grow cursor-pointer">
            <MenuTitle>{item.title}</MenuTitle>
            <MenuArrow>
              <KeenIcon icon="right" className="text-3xs" />
            </MenuArrow>
          </MenuLink>
          <MenuSub className="menu-default gap-0.5 w-[220px] scrollable-y-auto lg:overflow-visible max-h-[50vh]">
            {buildMenuChildren(item.children, level + 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink path={item.path}>
            <MenuTitle>{item.title}</MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };

  return (
    <Menu highlight={true} multipleExpand={false} className="flex flex-col gap-2.5 grow">
      {menuConfig && buildMenu(menuConfig)}
    </Menu>
  );
};

export { SidebarMenu };
