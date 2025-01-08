import { Link } from 'react-router-dom';
import { KeenIcon } from '@/admin/components/keenicons';
import { toAbsoluteUrl } from '@/admin/utils';

import { useShopLayout } from '..';

const HeaderLogo = () => {
  const { setMobileSidebarOpen, setMobileMegaMenuOpen, megaMenuEnabled } = useShopLayout();

  const handleSidebarOpen = () => {
    setMobileSidebarOpen(true);
  };

  const handleMegaMenuOpen = () => {
    setMobileMegaMenuOpen(true);
  };

  return (
    <div className="flex gap-1 lg:hidden items-center">
      <Link to="/" className="shrink-0">
        <img src={toAbsoluteUrl('/media/app/mini-logo.svg')} className="h-[25px]" alt="mini-logo" />
      </Link>

      <div className="flex items-center">
        <button
          type="button"
          className="btn btn-icon btn-light btn-clear btn-sm"
          onClick={handleSidebarOpen}
        >
          <KeenIcon icon="menu" />
        </button>

        {megaMenuEnabled && (
          <button
            type="button"
            className="btn btn-icon btn-light btn-clear btn-sm"
            onClick={handleMegaMenuOpen}
          >
            <KeenIcon icon="burger-menu-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export { HeaderLogo };
