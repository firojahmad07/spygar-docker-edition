import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo2LayoutProviderProps {
    layout: ILayoutConfig;
    headerSticky: boolean;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo2Layout: () => IDemo2LayoutProviderProps;
declare const Demo2LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo2LayoutProvider, useDemo2Layout };
