interface IStatisticsItem {
    image: string;
    number: string;
    label: string;
}
interface IStatisticsItems extends Array<IStatisticsItem> {
}
interface IStatisticsProps {
    details: IStatisticsItem[];
}
declare const Statistics: ({ details }: IStatisticsProps) => import("react/jsx-runtime").JSX.Element;
export { Statistics, type IStatisticsItem, type IStatisticsItems, type IStatisticsProps };
