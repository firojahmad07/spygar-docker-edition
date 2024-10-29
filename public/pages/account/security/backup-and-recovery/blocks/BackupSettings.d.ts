import { ReactNode } from 'react';
interface IBackupSettingsItem {
    title: string;
    description: string;
    control: ReactNode;
}
interface IBackupSettingsItems extends Array<IBackupSettingsItem> {
}
declare const BackupSettings: () => import("react/jsx-runtime").JSX.Element;
export { BackupSettings, type IBackupSettingsItem, type IBackupSettingsItems };
