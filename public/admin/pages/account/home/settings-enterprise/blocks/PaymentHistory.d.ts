interface IPaymentHistoryItem {
    date: string;
    type: string;
    amount: string;
}
interface IPaymentHistoryItems extends Array<IPaymentHistoryItem> {
}
declare const PaymentHistory: () => import("react/jsx-runtime").JSX.Element;
export { PaymentHistory, type IPaymentHistoryItem, type IPaymentHistoryItems };
