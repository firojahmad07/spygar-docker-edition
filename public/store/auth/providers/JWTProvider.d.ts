import { AxiosResponse } from 'axios';
import { type Dispatch, type PropsWithChildren, type SetStateAction } from 'react';
import { type AuthModel, type UserModel } from '@/auth';
export declare const GET_USER_BY_ACCESSTOKEN_URL = "/user";
export declare const LOGIN_URL = "api/login";
export declare const REGISTER_URL = "/register";
export declare const REQUEST_PASSWORD_URL = "/forgotpassword";
interface AuthContextProps {
    isLoading: boolean;
    auth: AuthModel | undefined;
    saveAuth: (auth: AuthModel | undefined) => void;
    currentUser: UserModel | undefined;
    setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle?: () => Promise<void>;
    loginWithFacebook?: () => Promise<void>;
    loginWithGithub?: () => Promise<void>;
    register: (email: string, password: string, firstname?: string, lastname?: string, password_confirmation?: string) => Promise<void>;
    requestPassword: (email: string) => Promise<void>;
    getUser: () => Promise<AxiosResponse<any>>;
    logout: () => void;
    verify: () => Promise<void>;
}
declare const AuthContext: import("react").Context<AuthContextProps | null>;
declare const AuthProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { AuthContext, AuthProvider };
