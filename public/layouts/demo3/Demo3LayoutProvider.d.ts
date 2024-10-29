import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo3LayoutProviderProps {
    layout: ILayoutConfig;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo3Layout: () => IDemo3LayoutProviderProps;
declare const Demo3LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo3LayoutProvider, useDemo3Layout };
