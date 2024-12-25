interface IStatisticsItem {
    number: string;
    label: string;
}
interface IStatisticsItems extends Array<IStatisticsItem> {
}
interface IStatisticsProps {
    items: IStatisticsItem[];
}
declare const Statistics: ({ items }: IStatisticsProps) => import("react/jsx-runtime").JSX.Element;
export { Statistics, type IStatisticsItem, type IStatisticsItems, type IStatisticsProps };
