import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo4LayoutProviderProps {
    layout: ILayoutConfig;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo4Layout: () => IDemo4LayoutProviderProps;
declare const Demo4LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo4LayoutProvider, useDemo4Layout };
