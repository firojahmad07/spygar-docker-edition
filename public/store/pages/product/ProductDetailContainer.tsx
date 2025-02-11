import { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import {
  Attributes,
} from './Edit/index';

import { RequireAuth } from '@/store/auth/RequireAuth';
import { Demo9Layout } from '@/store/layouts/demo9';

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo9Layout />}>
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
