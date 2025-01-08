interface IHighlightsRow {
    icon: string;
    text: string;
    total: number;
    stats: number;
    increase: boolean;
}
interface IHighlightsRows extends Array<IHighlightsRow> {
}
interface IHighlightsItem {
    badgeColor: string;
    lebel: string;
}
interface IHighlightsItems extends Array<IHighlightsItem> {
}
interface IHighlightsProps {
    limit?: number;
}
declare const Highlights: ({ limit }: IHighlightsProps) => import("react/jsx-runtime").JSX.Element;
export { Highlights, type IHighlightsRow, type IHighlightsRows, type IHighlightsItem, type IHighlightsItems, type IHighlightsProps };
