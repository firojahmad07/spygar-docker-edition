import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo5LayoutProviderProps {
    layout: ILayoutConfig;
    headerSticky: boolean;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo5Layout: () => IDemo5LayoutProviderProps;
declare const Demo5LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo5LayoutProvider, useDemo5Layout };
