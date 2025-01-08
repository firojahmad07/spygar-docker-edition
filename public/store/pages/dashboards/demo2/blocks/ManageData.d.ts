import { ReactNode } from 'react';
interface IManageDataItem {
    title: string;
    description: string;
    control: ReactNode;
}
interface IManageDataItems extends Array<IManageDataItem> {
}
interface IManageDataProps {
    className: string;
}
declare const ManageData: ({ className }: IManageDataProps) => import("react/jsx-runtime").JSX.Element;
export { ManageData, type IManageDataItem, type IManageDataItems, type IManageDataProps };
