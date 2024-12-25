import useBodyClasses from '@/admin/hooks/useBodyClasses';
import { Demo4LayoutProvider, Main } from '.';
import { useEffect } from 'react';
import { useSettings } from '@/admin/providers';

const Demo4Layout = () => {
  const { updateSettings } = useSettings();

  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClasses(`
    [--tw-page-bg:#F6F6F9] 
    [--tw-page-bg-dark:var(--tw-coal-200)] 
    [--tw-content-bg:var(--tw-light)] 
    [--tw-content-bg-dark:var(--tw-coal-500)] 
    [--tw-content-scrollbar-color:#e8e8e8] 
    [--tw-header-height:60px] 
    [--tw-sidebar-width:290px]
    [--tw-sidebar-default-width:69px]
    bg-[--tw-page-bg] 
    dark:bg-[--tw-page-bg-dark] 
    lg:overflow-hidden
  `);

  useEffect(() => {
    updateSettings({
      container: 'fluid'
    });
  });

  return (
    // Providing layout context and rendering the main content
    <Demo4LayoutProvider>
      <Main />
    </Demo4LayoutProvider>
  );
};

export { Demo4Layout };
