interface IPaymentMethodsItem {
    logo: string;
    title: string;
    email: string;
    label: boolean;
}
interface IPaymentMethodsItems extends Array<IPaymentMethodsItem> {
}
declare const PaymentMethods: () => import("react/jsx-runtime").JSX.Element;
export { PaymentMethods, type IPaymentMethodsItem, type IPaymentMethodsItems };
