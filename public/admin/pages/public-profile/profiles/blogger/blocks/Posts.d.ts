interface IPostsItem {
    image: string;
    label: string;
    description: string;
    time: string;
}
interface IPostsItems extends Array<IPostsItem> {
}
declare const Posts: () => import("react/jsx-runtime").JSX.Element;
export { Posts, type IPostsItem, type IPostsItems };
