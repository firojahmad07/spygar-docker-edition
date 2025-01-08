import useBodyClasses from '@/core/hooks/useBodyClasses';
import { ShopLayoutProvider, Main } from '.';

const ShopLayouts = () => {
  // Using the useBodyClasses hook to set background styles for light and dark modes
  useBodyClasses(`
    [--tw-page-bg:#fefefe] 
    [--tw-page-bg-dark:var(--tw-coal-500)] 
    bg-[--tw-page-bg] 
    dark:bg-[--tw-page-bg-dark]
  `);

  return (
    <ShopLayoutProvider>
      <Main />
    </ShopLayoutProvider>
  );
};

export { ShopLayouts };
