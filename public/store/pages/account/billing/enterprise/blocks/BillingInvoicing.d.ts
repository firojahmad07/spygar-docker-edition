interface IBillingInvoicingItem {
    number: string;
    date: string;
    ammount: string;
    label: string;
    color: string;
}
interface IBillingInvoicingItems extends Array<IBillingInvoicingItem> {
}
declare const BillingInvoicing: () => import("react/jsx-runtime").JSX.Element;
export { BillingInvoicing, type IBillingInvoicingItem, type IBillingInvoicingItems };
