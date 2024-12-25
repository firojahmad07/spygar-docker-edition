interface IOptionsSubItem {
    path: string;
    title: string;
}
interface IOptionsItem {
    icon: string;
    title: string;
    description: string;
    sub: IOptionsSubItem[];
}
interface IOptionsItems extends Array<IOptionsItem> {
}
interface IOptionsProps {
    items: IOptionsItem[];
}
declare const Options: ({ items }: IOptionsProps) => import("react/jsx-runtime").JSX.Element;
export { Options, type IOptionsItem, type IOptionsItems, type IOptionsProps };
