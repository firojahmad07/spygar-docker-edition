interface IOptionsItem {
    title: string;
    icon: string;
    desc: string;
    path: string;
}
interface IOptionsItems extends Array<IOptionsItem> {
}
declare const Options: () => import("react/jsx-runtime").JSX.Element;
export { Options, type IOptionsItem, type IOptionsItems };
