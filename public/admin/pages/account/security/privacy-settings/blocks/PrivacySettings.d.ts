import { ReactNode } from 'react';
interface IPrivacySettingsItem {
    icon: string;
    title: ReactNode;
    description: string;
    actions: ReactNode;
}
interface IPrivacySettingsItems extends Array<IPrivacySettingsItem> {
}
declare const PrivacySettings: () => import("react/jsx-runtime").JSX.Element;
export { PrivacySettings, type IPrivacySettingsItem, type IPrivacySettingsItems };
