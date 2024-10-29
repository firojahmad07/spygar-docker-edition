import { ReactNode } from 'react';
interface IAdvancedSettingsNotificationsItem {
    title: string;
    description: string;
    badge: ReactNode;
}
interface IAdvancedSettingsNotificationsItems extends Array<IAdvancedSettingsNotificationsItem> {
}
declare const AdvancedSettingsNotifications: () => import("react/jsx-runtime").JSX.Element;
export { AdvancedSettingsNotifications, type IAdvancedSettingsNotificationsItem, type IAdvancedSettingsNotificationsItems };
