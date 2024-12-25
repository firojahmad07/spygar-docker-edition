import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
interface AuthLayoutProviderProps {
    layout: ILayoutConfig;
}
declare const useErrorsLayout: () => AuthLayoutProviderProps;
declare const ErrorsLayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { ErrorsLayoutProvider, useErrorsLayout };
