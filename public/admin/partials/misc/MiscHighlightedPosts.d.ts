interface IHighlightedPostsItem {
    icon: string;
    title: string;
    summary: string;
    path: string;
}
interface IHighlightedPostsItems extends Array<IHighlightedPostsItem> {
}
interface IHighlightedPostsProps {
    posts: IHighlightedPostsItem[];
}
declare const MiscHighlightedPosts: ({ posts }: IHighlightedPostsProps) => import("react/jsx-runtime").JSX.Element;
export { MiscHighlightedPosts, type IHighlightedPostsItem, type IHighlightedPostsItems, type IHighlightedPostsProps };
