interface ICommentsItem {
    avatar: string;
    author: string;
    date: string;
    text: string;
}
interface ICommentsItems extends Array<ICommentsItem> {
}
declare const Post1: () => import("react/jsx-runtime").JSX.Element;
export { Post1, type ICommentsItem, type ICommentsItems };
