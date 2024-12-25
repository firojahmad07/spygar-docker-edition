import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
interface AuthLayoutProviderProps {
    layout: ILayoutConfig;
}
declare const useAuthBrandedLayout: () => AuthLayoutProviderProps;
declare const AuthBrandedLayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { AuthBrandedLayoutProvider, useAuthBrandedLayout };
