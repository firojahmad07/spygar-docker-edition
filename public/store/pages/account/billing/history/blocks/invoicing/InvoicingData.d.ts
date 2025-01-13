interface IInvoicingData {
    invoice: string;
    label: string;
    color: string;
    date: string;
    dueDate: string;
    amount: string;
}
declare const InvoicingData: IInvoicingData[];
export { InvoicingData, type IInvoicingData };
