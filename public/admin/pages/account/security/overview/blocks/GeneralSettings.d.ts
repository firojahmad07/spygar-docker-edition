import { ReactNode } from 'react';
interface IGeneralSettingsItem {
    icon: string;
    title: ReactNode;
    description: string;
    actions: ReactNode;
}
interface IGeneralSettingsItems extends Array<IGeneralSettingsItem> {
}
declare const GeneralSettings: () => import("react/jsx-runtime").JSX.Element;
export { GeneralSettings, type IGeneralSettingsItem, type IGeneralSettingsItems };
