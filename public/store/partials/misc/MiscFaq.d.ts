interface IFaqItem {
    title: string;
    text: string;
}
interface IFaqItems extends Array<IFaqItem> {
}
declare const MiscFaq: () => import("react/jsx-runtime").JSX.Element;
export { MiscFaq, type IFaqItem, type IFaqItems };
