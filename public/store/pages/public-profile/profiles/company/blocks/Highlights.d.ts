interface IHighlightsItem {
    label: string;
    info: string;
    type?: number;
}
interface IHighlightsItems extends Array<IHighlightsItem> {
}
declare const Highlights: () => import("react/jsx-runtime").JSX.Element;
export { Highlights, type IHighlightsItem, type IHighlightsItems };
