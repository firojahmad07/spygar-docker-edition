import { ReactNode } from 'react';
export interface TDataGridTableBodyRowProps {
    children: ReactNode;
    className?: string;
    id: string;
}
declare const DataGridTableBodyRow: ({ id, children, className }: TDataGridTableBodyRowProps) => import("react/jsx-runtime").JSX.Element;
export { DataGridTableBodyRow };
