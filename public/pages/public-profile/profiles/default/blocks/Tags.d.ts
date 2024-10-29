interface ITagsItem {
    label: string;
}
interface ITagsItems extends Array<ITagsItem> {
}
interface ITagsProps {
    title: string;
    className?: string;
}
declare const Tags: ({ title, className }: ITagsProps) => import("react/jsx-runtime").JSX.Element;
export { Tags, type ITagsItem, type ITagsItems, type ITagsProps };
