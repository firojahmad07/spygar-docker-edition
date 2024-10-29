interface IInvoicingItem {
    number: string;
    date: string;
    ammount: string;
    label: string;
    color: string;
}
interface IInvoicingItems extends Array<IInvoicingItem> {
}
declare const Invoicing: () => import("react/jsx-runtime").JSX.Element;
export { Invoicing, type IInvoicingItem, type IInvoicingItems };
