interface ITagsItem {
    label: string;
}
interface ITagsItems extends Array<ITagsItem> {
}
interface ITagsProps {
    title: string;
}
declare const Tags: ({ title }: ITagsProps) => import("react/jsx-runtime").JSX.Element;
export { Tags, type ITagsItem, type ITagsItems, type ITagsProps };
