interface IImportItem {
    label: string;
    description: string;
    checked: boolean;
}
interface IImportItems extends Array<IImportItem> {
}
declare const Import: () => import("react/jsx-runtime").JSX.Element;
export { Import, type IImportItem, type IImportItems };
