import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ScreenLoader } from '@/admin/components/loaders';

import { useAuthContext } from './useAuthContext';

const RequireAuth = () => {
  const { auth, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <ScreenLoader />;
  }
  console.log("we are here : auth : ", auth);
  return auth ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export { RequireAuth };
