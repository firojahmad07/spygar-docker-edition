interface IOptionsItem {
    icon: string;
    title: string;
    desc: string;
    path: string;
}
interface IOptionsItems extends Array<IOptionsItem> {
}
interface IOptionsProps {
    items: IOptionsItems;
    dropdown: boolean;
}
declare const Options: ({ items, dropdown }: IOptionsProps) => import("react/jsx-runtime").JSX.Element;
export { Options, type IOptionsItem, type IOptionsItems, type IOptionsProps };
