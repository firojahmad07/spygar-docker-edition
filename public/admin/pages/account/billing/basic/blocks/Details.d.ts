interface IDetailsItem {
    status: string;
    info: string;
}
interface IDetailsItems extends Array<IDetailsItem> {
}
declare const Details: () => import("react/jsx-runtime").JSX.Element;
export { Details, type IDetailsItem, type IDetailsItems };
