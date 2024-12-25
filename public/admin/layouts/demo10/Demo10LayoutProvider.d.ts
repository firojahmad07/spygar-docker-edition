import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo10LayoutProviderProps {
    layout: ILayoutConfig;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo10Layout: () => IDemo10LayoutProviderProps;
declare const Demo10LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo10LayoutProvider, useDemo10Layout };
