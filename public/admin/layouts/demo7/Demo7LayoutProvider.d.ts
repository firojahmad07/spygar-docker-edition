import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo7LayoutProviderProps {
    layout: ILayoutConfig;
    headerSticky: boolean;
    mobileMegaMenuOpen: boolean;
    setMobileMegaMenuOpen: (open: boolean) => void;
}
declare const useDemo7Layout: () => IDemo7LayoutProviderProps;
declare const Demo7LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo7LayoutProvider, useDemo7Layout };
