import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo6LayoutProviderProps {
    layout: ILayoutConfig;
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
}
declare const useDemo6Layout: () => IDemo6LayoutProviderProps;
declare const Demo6LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo6LayoutProvider, useDemo6Layout };
