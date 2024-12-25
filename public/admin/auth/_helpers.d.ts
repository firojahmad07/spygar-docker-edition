import { User as Auth0UserModel } from '@auth0/auth0-spa-js';
import { type AuthModel } from './_models';
declare const AUTH_LOCAL_STORAGE_KEY = "spygar-pim-auth-v5468sadfas54d4d";
declare const getAuth: () => AuthModel | undefined;
declare const setAuth: (auth: AuthModel | Auth0UserModel) => void;
declare const removeAuth: () => void;
export declare function setupAxios(axios: any): void;
export { AUTH_LOCAL_STORAGE_KEY, getAuth, removeAuth, setAuth };
