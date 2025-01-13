import { Header } from '@tanstack/react-table';
export interface TDataGridTableHeadCellProps<TData, TValue> {
    header: Header<TData, TValue>;
}
declare const DataGridTableHeadCell: <TData, TValue>({ header }: TDataGridTableHeadCellProps<TData, TValue>) => import("react/jsx-runtime").JSX.Element;
export { DataGridTableHeadCell };
