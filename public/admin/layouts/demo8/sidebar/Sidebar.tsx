/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer } from '@/admin/components';
import { Link } from 'react-router-dom';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/admin/components';
import { useEffect, useRef, useState } from 'react';
import { getHeight, toAbsoluteUrl } from '@/core/utils';
import { useResponsive, useViewport } from '@/admin/hooks';
import { DropdownUser } from '@/admin/partials/dropdowns/user';
import { DropdownChat } from '@/admin/partials/dropdowns/chat';
import { DropdownApps } from '@/admin/partials/dropdowns/apps';
import { useDemo8Layout } from '..';
import { SidebarMenu } from '.';
import { usePathname } from '@/admin/providers';

const Sidebar = () => {
  const desktopMode = useResponsive('up', 'lg');
  const mobileMode = useResponsive('down', 'lg');
  const { pathname, prevPathname } = usePathname();
  const { mobileSidebarOpen, setMobileSidebarOpen } = useDemo8Layout();
  const itemChatRef = useRef<any>(null);
  const handleDropdownChatShow = () => {
    window.dispatchEvent(new Event('resize'));
  };

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const scrollableOffset = 40;

  useEffect(() => {
    if (footerRef.current) {
      const headerHeight = headerRef.current ? getHeight(headerRef.current) : 0;
      const footerHeight = getHeight(footerRef.current);
      const availableHeight = viewportHeight - headerHeight - footerHeight - scrollableOffset;
      setScrollableHeight(availableHeight);
    } else {
      setScrollableHeight(viewportHeight);
    }
  }, [viewportHeight]);

  const renderContent = () => {
    return (
      <div className="lg:fixed lg:top-0 lg:bottom-0 lg:z-20 flex flex-col grow shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark] w-[--tw-sidebar-width]">
        {desktopMode && (
          <div
            ref={headerRef}
            className="flex items-center flex-none justify-center shrink-0 pt-8 pb-3.5"
          >
            <Link to="/">
              <img
                src={toAbsoluteUrl('/media/app/mini-logo-square-gray.svg')}
                className="dark:hidden min-h-[42px]"
              />
              <img
                src={toAbsoluteUrl('/media/app/mini-logo-square-gray-dark.svg')}
                className="hidden dark:block min-h-[42px]"
              />
            </Link>
          </div>
        )}

        <div
          className="scrollable-y-auto gap-2.5 shrink-0 flex grow items-center pt-5 lg:pt-0 px-3 flex-col mb-10"
          style={{
            ...(desktopMode && scrollableHeight > 0 && { height: `${scrollableHeight}px` })
          }}
        >
          <SidebarMenu />
        </div>

        <div ref={footerRef} className="flex flex-col gap-5 items-center shrink-0 pb-4">
          <div className="flex flex-col gap-1.5">
            <Menu>
              <MenuItem
                ref={itemChatRef}
                onShow={handleDropdownChatShow}
                toggle="dropdown"
                trigger="click"
                dropdownProps={{
                  placement: 'right-end',
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [10, 15] // [skid, distance]
                      }
                    }
                  ]
                }}
              >
                <MenuToggle>
                  <button className="btn btn-icon btn-icon-xl size-9 border border-transparent hover:bg-light hover:text-primary hover:border-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                    <KeenIcon icon="messages" />
                  </button>
                </MenuToggle>

                {DropdownChat({ menuTtemRef: itemChatRef })}
              </MenuItem>
            </Menu>

            <Menu>
              <MenuItem
                ref={itemChatRef}
                onShow={handleDropdownChatShow}
                toggle="dropdown"
                trigger="click"
                dropdownProps={{
                  placement: 'right-end',
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [-10, 15] // [skid, distance]
                      }
                    }
                  ]
                }}
              >
                <MenuToggle className="btn btn-icon btn-icon-xl size-9 border border-transparent hover:bg-light hover:text-primary hover:border-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                  <KeenIcon icon="setting-4" className="text-gray-600" />
                </MenuToggle>

                {DropdownApps()}
              </MenuItem>
            </Menu>
          </div>

          <Menu>
            <MenuItem
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: 'right-end',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [-10, 15]
                    }
                  }
                ]
              }}
            >
              <MenuToggle>
                <div className="btn btn-icon rounded-full">
                  <img
                    className="size-8 justify-center rounded-lg border border-gray-500 shrink-0"
                    src={toAbsoluteUrl('/media/avatars/gray/5.png')}
                    alt=""
                  />
                </div>
              </MenuToggle>
              {DropdownUser()}
            </MenuItem>
          </Menu>
        </div>
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
