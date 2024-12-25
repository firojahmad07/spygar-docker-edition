interface IStatisticsItem {
    value: string;
    title: string;
}
interface IStatisticsItems extends Array<IStatisticsItem> {
}
interface IStatisticsProps {
    data: IStatisticsItem[];
}
declare const Statistics: ({ data }: IStatisticsProps) => import("react/jsx-runtime").JSX.Element;
export { Statistics, type IStatisticsItem, type IStatisticsItems, type IStatisticsProps };
