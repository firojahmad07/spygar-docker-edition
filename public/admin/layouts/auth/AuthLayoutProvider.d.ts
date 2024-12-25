import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
interface AuthLayoutProviderProps {
    layout: ILayoutConfig;
}
declare const useAuthLayout: () => AuthLayoutProviderProps;
declare const AuthLayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { AuthLayoutProvider, useAuthLayout };
