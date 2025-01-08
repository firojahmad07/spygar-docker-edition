import { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import {
  Attributes,
} from './Edit/index';

import { RequireAuth } from '@/admin/auth/RequireAuth';
import { Demo8Layout } from '@/admin/layouts/demo8';

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo8Layout />}>
        {/* <Route element={<Demo4Layout />}> */}
        
          {/* <Route path="/" element={<AuthenticationGetStartedPage />} /> */}
          <Route path="/" element={<Attributes />} />
          <Route path="/assets" element={<Attributes />} />
          <Route path="/categories" element={<Attributes />} />
          <Route path="/association" element={<Attributes />} />
          <Route path="/comments" element={<Attributes />} />
          <Route path="/history" element={<Attributes />} />
        </Route>
      </Route>
    </Routes>
  );
};

export { AppRoutingSetup };
