interface IRecentInvoicesItem {
    icon: string;
    number: string;
    date: string;
    ammount: string;
}
interface IRecentInvoicesItems extends Array<IRecentInvoicesItem> {
}
declare const RecentInvoices: () => import("react/jsx-runtime").JSX.Element;
export { RecentInvoices, type IRecentInvoicesItem, type IRecentInvoicesItems };
