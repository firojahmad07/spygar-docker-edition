interface ISummaryItem {
    icon: string;
    info: string;
}
interface ISummaryItems extends Array<ISummaryItem> {
}
interface ISummaryProps {
    title: string;
}
declare const Summary: ({ title }: ISummaryProps) => import("react/jsx-runtime").JSX.Element;
export { Summary, type ISummaryItem, type ISummaryItems, type ISummaryProps };
