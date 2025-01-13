import { type PropsWithChildren } from 'react';
import { IMenuItemConfig, TMenuConfig } from '@/components/menu';
export interface IMenusProps {
    configs: Map<string, TMenuConfig | null>;
    setMenuConfig: (name: string, config: TMenuConfig | null) => void;
    getMenuConfig: (name: string) => TMenuConfig | null;
    setCurrentMenuItem: (config: IMenuItemConfig | null) => void;
    getCurrentMenuItem: () => IMenuItemConfig | null;
}
declare const useMenus: () => IMenusProps;
declare const MenusProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { MenusProvider, useMenus };
