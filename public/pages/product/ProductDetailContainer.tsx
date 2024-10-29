import { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import {
  Attributes,
} from '@/pages/product/Edit';

import { RequireAuth } from '@/auth/RequireAuth';
import { Demo8Layout } from '@/layouts/demo8';

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo8Layout />}>
        {/* <Route element={<Demo4Layout />}> */}
        
          {/* <Route path="/" element={<AuthenticationGetStartedPage />} /> */}
          <Route path="/" element={<DefaultPage />} />
          <Route path="/dark-sidebar" element={<Demo1DarkSidebarPage />} />
          <Route path="/public-profile/profiles/default" element={<ProfileDefaultPage />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<AccountEnterprisePage />} />


          {/* sales */}
          <Route path="/sale/orders" element={<Products />} />
          <Route path="/sale/payments" element={<Products />} />
        </Route>
      </Route>
    </Routes>
  );
};

export { AppRoutingSetup };
