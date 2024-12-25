import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo9LayoutProviderProps {
    layout: ILayoutConfig;
    headerSticky: boolean;
    mobileMegaMenuOpen: boolean;
    setMobileMegaMenuOpen: (open: boolean) => void;
}
declare const useDemo9Layout: () => IDemo9LayoutProviderProps;
declare const Demo9LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo9LayoutProvider, useDemo9Layout };
