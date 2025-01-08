import { ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useLoaders } from '@/core/providers';
import { AppRoutingSetup } from '.';

const AppRouting = (): ReactElement => {
  const { setProgressBarLoader } = useLoaders();
  const [previousLocation, setPreviousLocation] = useState('');
  const location = useLocation();
  const path = location.pathname.trim();

  const init = async () => {
    setProgressBarLoader(true);
    setPreviousLocation(path);
    if (path === previousLocation) {
      setPreviousLocation('');
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setProgressBarLoader(false);
    if (!CSS.escape(window.location.hash)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [previousLocation]);

  return <AppRoutingSetup />;
};

export { AppRouting };
