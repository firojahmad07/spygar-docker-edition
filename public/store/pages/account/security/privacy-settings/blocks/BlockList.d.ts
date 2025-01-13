interface IBlockListItem {
    avatar: string;
    name: string;
    commits: number;
}
interface IBlockListItems extends Array<IBlockListItem> {
}
interface IBlockListProps {
    text: string;
    limit?: number;
    className?: string;
}
declare const BlockList: ({ text, limit, className }: IBlockListProps) => import("react/jsx-runtime").JSX.Element;
export { BlockList, type IBlockListItem, type IBlockListItems, type IBlockListProps };
