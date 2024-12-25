import { type TKeenIconsStyle } from '../components/keenicons/types';
export type TSettingsThemeMode = 'light' | 'dark' | 'system';
export type TSettingsContainer = 'default' | 'fluid' | 'fixed';
export interface ISettings {
    themeMode: TSettingsThemeMode;
    container: TSettingsContainer;
    keeniconsStyle: TKeenIconsStyle;
}
declare const defaultSettings: ISettings;
export { defaultSettings };
