import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo8LayoutProviderProps {
    layout: ILayoutConfig;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo8Layout: () => IDemo8LayoutProviderProps;
declare const Demo8LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo8LayoutProvider, useDemo8Layout };
