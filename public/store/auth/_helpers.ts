import { User as Auth0UserModel } from '@auth0/auth0-spa-js';

import { getData, setData } from '@/admin/utils';
import { type AuthModel } from './_models';

const AUTH_LOCAL_STORAGE_KEY = `spygar-pim-auth-v5468sadfas54d4d`;

const getAuth = (): AuthModel | undefined => {
  try {
    const auth = getData(AUTH_LOCAL_STORAGE_KEY) as AuthModel | undefined;

    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error);
  }
  
  return undefined;
};

const setAuth = (auth: AuthModel | Auth0UserModel) => {
  setData(AUTH_LOCAL_STORAGE_KEY, auth);
};

const removeAuth = () => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error);
  }
};

export function setupAxios(axios: any) {
  // axios.defaults.headers.Accept = 'application/json';
  axios.defaults.headers.Accept = 'application/vnd.api+json';
  axios.interceptors.request.use(
    (config: { headers: { Authorization: string } }) => {
      const auth = getAuth();
      console.log('auth : ', auth);
      if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }

      return config;
    },
    async (err: any) => await Promise.reject(err)
  );
}

export { AUTH_LOCAL_STORAGE_KEY, getAuth, removeAuth, setAuth };
