import { type PropsWithChildren } from 'react';
export interface ILayoutConfig {
    name: string;
    options: any;
}
export interface ILayoutProvider {
    layout: ILayoutConfig;
}
export interface ILayoutProps {
    getLayout: (name: string) => Partial<ILayoutConfig> | undefined;
    hasLayout: (name: string) => boolean;
    updateLayout: (name: string, config: Partial<ILayoutConfig>) => void;
    currentLayout: any;
    setCurrentLayout: (layoutProvider: any) => void;
}
declare const LayoutContext: import("react").Context<ILayoutProps>;
declare const useLayout: () => ILayoutProps;
declare const LayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { LayoutContext, LayoutProvider, useLayout };
