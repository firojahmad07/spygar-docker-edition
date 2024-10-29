interface ILatestPaymentItem {
    status: string;
    logo?: boolean;
    info: string;
}
interface ILatestPaymentItems extends Array<ILatestPaymentItem> {
}
declare const LatestPayment: () => import("react/jsx-runtime").JSX.Element;
export { LatestPayment, type ILatestPaymentItem, type ILatestPaymentItems };
