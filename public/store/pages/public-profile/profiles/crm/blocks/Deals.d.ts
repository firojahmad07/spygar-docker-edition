interface IDealsItem {
    name: string;
    ammount: string;
    date: number;
    label: string;
    color: string;
}
interface IDealsItems extends Array<IDealsItem> {
}
declare const Deals: () => import("react/jsx-runtime").JSX.Element;
export { Deals, type IDealsItem, type IDealsItems };
