import { type PropsWithChildren } from 'react';
import { ISettings, type TSettingsThemeMode } from '@/config/settings.config';
export interface ISettingsProps {
    settings: ISettings;
    storeSettings: (settings: Partial<ISettings>) => void;
    updateSettings: (settings: Partial<ISettings>) => void;
    getThemeMode: () => TSettingsThemeMode;
}
declare const useSettings: () => ISettingsProps;
declare const SettingsProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { SettingsProvider, useSettings };
