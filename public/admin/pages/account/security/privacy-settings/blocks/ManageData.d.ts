import { ReactNode } from 'react';
interface IManageDataItem {
    title: string;
    description: string;
    control: ReactNode;
}
interface IManageDataItems extends Array<IManageDataItem> {
}
declare const ManageData: () => import("react/jsx-runtime").JSX.Element;
export { ManageData, type IManageDataItem, type IManageDataItems };
