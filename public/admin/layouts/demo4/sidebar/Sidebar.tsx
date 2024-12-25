/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer } from '@/admin/components';
import { useEffect } from 'react';
import { useResponsive } from '@/admin/hooks';
import { SidebarPrimary, SidebarSecondary } from '.';
import { usePathname } from '@/admin/providers';
import { useDemo4Layout } from '..';

import { useMenus } from '@/admin/providers';

// const SidebarSecondary = () => {

  const offset = 0;
  // const [scrollableHeight, setScrollableHeight] = useState<number>(0);



const Sidebar = () => {
  const desktopMode = useResponsive('up', 'lg');
  const mobileMode = useResponsive('down', 'lg');
  const { pathname, prevPathname } = usePathname();
  const { mobileSidebarOpen, setMobileSidebarOpen } = useDemo4Layout();
  // const { pathname } = useLocation();
  // const [viewportHeight] = useViewport();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('secondaryMenuItems');
  console.log('pathname data', pathname);
  console.log('menuConfig data', menuConfig);
  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };
  // tw-sidebar-default-width
  // tw-sidebar-width
  const renderContent = () => {
    return (
      <div className="lg:fixed top-0 bottom-0 z-20 flex items-stretch shrink-0 w-[--tw-sidebar-pefault-width] bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]">
        <SidebarPrimary />
        <SidebarSecondary /> 
        
      </div>
    );
  };

  useEffect(() => {
    // Hide drawer on route chnage after menu link click
    if (mobileMode && prevPathname !== pathname) {
      handleMobileSidebarClose();
    }
  }, [mobileMode, pathname, prevPathname]);

  if (desktopMode) {
    return renderContent();
  } else {
    return (
      <Drawer
        open={mobileSidebarOpen}
        onClose={handleMobileSidebarClose}
        ModalProps={{
          keepMounted: true
        }}
      >
        {renderContent()}
      </Drawer>
    );
  }
};

export { Sidebar };
