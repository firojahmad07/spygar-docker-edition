/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Drawer } from '@/components';
import clsx from 'clsx';
import { useResponsive, useScrollPosition, useViewport } from '@/hooks';
import { usePathname } from '@/providers';

import { useDemo5Layout } from '../';
import { SidebarMenuDashboard, SidebarMenuDefault } from '.';

const Sidebar = () => {
  const { pathname, prevPathname } = usePathname();
  const [viewportHeight] = useViewport();
  const [sidebarSticky, setSidebarSticky] = useState(false);
  const scrollPosition = useScrollPosition();
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const scrollableOffset = 100;
  const desktopMode = useResponsive('up', 'lg');
  const { mobileSidebarOpen, setMobileSidebarOpen } = useDemo5Layout();
  const { layout } = useDemo5Layout();

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  useEffect(() => {
    if (scrollPosition > layout.options.sidebar.stickyOffset) {
      setSidebarSticky(true);
    } else {
      setSidebarSticky(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const availableHeight = viewportHeight - scrollableOffset;
    setScrollableHeight(availableHeight);
  }, [viewportHeight]);

  const renderContent = () => {
    return (
      <div className="w-[--tw-sidebar-width] shrink-0 lg:flex items-start">
        <div
          className={clsx(
            'w-[--tw-sidebar-width] z-5 lg:top-[80px] top-0 bottom-0 lg:right-auto lg:left-auto shrink-0 py-3 lg:py-0 bg-light dark:bg-coal-100 lg:dark:bg-transparent',
            sidebarSticky && 'fixed'
          )}
        >
          <div
            className="scrollable-y-auto"
            style={{
              ...(desktopMode && scrollableHeight > 0 && { height: `${scrollableHeight}px` })
            }}
          >
            {pathname === '/' ? <SidebarMenuDashboard /> : <SidebarMenuDefault />}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!desktopMode && prevPathname !== pathname) {
      handleMobileSidebarClose();
    }
  }, [desktopMode, pathname, prevPathname]);

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
