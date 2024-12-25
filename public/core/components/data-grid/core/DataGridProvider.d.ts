import { TDataGridProps } from './DataGrid';
export interface IDataGridContextProps<TData extends object> {
    props: TDataGridProps<TData>;
    table: any;
    totalRows: number;
    loading: boolean;
    setLoading: (state: boolean) => void;
    selectedRowIds: Set<string>;
    toggleRowSelection: (id: string) => void;
    toggleAllRowsSelection: (checked: boolean) => void;
    getSelectedRowIds: () => string[];
    isSelectAllChecked: boolean;
    isSelectAllIndeterminate: boolean;
}
export declare const useDataGrid: () => IDataGridContextProps<any>;
export declare const DataGridProvider: <TData extends object>(props: TDataGridProps<TData>) => import("react/jsx-runtime").JSX.Element;
