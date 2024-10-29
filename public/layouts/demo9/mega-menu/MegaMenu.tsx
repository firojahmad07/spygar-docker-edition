/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Drawer } from '@/components';
import { useResponsive } from '@/hooks';
import { usePathname } from '@/providers';
import { useDemo9Layout } from '@/layouts/demo9';

import { MegaMenuInner } from '.';

const MegaMenu = () => {
  const desktopMode = useResponsive('up', 'lg');
  const { pathname, prevPathname } = usePathname();
  const { mobileMegaMenuOpen, setMobileMegaMenuOpen } = useDemo9Layout();

  const handleDrawerClose = () => {
    setMobileMegaMenuOpen(false);
  };

  useEffect(() => {
    // Hide drawer on route chnage after menu link click
    if (desktopMode === false && prevPathname !== pathname) {
      handleDrawerClose();
    }
  }, [desktopMode, pathname, prevPathname]);

  if (desktopMode) {
    return <MegaMenuInner />;
  } else {
    return (
      <Drawer
        open={mobileMegaMenuOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true
        }}
        PaperProps={{
          sx: {
            width: '225px',
            maxWidth: '90%' // Set the maximum width to 90%
          }
        }}
      >
        <MegaMenuInner />
      </Drawer>
    );
  }
};

export { MegaMenu };
