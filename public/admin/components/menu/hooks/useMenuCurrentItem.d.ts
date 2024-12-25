import { IMenuItemConfig, type TMenuConfig } from '../types';
declare const useMenuCurrentItem: (pathname: string, items: TMenuConfig | null) => IMenuItemConfig | null;
export { useMenuCurrentItem };
