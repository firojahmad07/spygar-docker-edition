import { ReactNode } from 'react';
interface IQuickSettingsItem {
    icon: string;
    title: string;
    description: string;
    actions: ReactNode;
}
interface IQuickSettingsItems extends Array<IQuickSettingsItem> {
}
declare const QuickSettings: () => import("react/jsx-runtime").JSX.Element;
export { QuickSettings, type IQuickSettingsItem, type IQuickSettingsItems };
