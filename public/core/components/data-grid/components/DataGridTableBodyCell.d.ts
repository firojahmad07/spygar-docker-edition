import { ReactNode } from 'react';
export interface TDataGridTableBodyCellProps {
    children: ReactNode;
    className?: string;
    id: string;
}
declare const DataGridTableBodyCell: ({ id, children, className }: TDataGridTableBodyCellProps) => import("react/jsx-runtime").JSX.Element;
export { DataGridTableBodyCell };
