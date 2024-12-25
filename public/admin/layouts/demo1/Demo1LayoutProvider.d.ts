import { type PropsWithChildren } from 'react';
import { ILayoutConfig } from '@/providers';
export interface IDemo1LayoutProviderProps {
    layout: ILayoutConfig;
    megaMenuEnabled: boolean;
    headerSticky: boolean;
    mobileSidebarOpen: boolean;
    mobileMegaMenuOpen: boolean;
    sidebarMouseLeave: boolean;
    setSidebarMouseLeave: (state: boolean) => void;
    setMobileSidebarOpen: (open: boolean) => void;
    setMobileMegaMenuOpen: (open: boolean) => void;
    setMegaMenuEnabled: (enabled: boolean) => void;
    setSidebarCollapse: (collapse: boolean) => void;
    setSidebarTheme: (mode: string) => void;
}
declare const useDemo1Layout: () => IDemo1LayoutProviderProps;
declare const Demo1LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { Demo1LayoutProvider, useDemo1Layout };
