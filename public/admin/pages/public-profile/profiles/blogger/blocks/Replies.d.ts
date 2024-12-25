interface IRepliesItem {
    borderColor: string;
    date: string;
    comments: number;
    text: string;
}
interface IRepliesItems extends Array<IRepliesItem> {
}
declare const Replies: () => import("react/jsx-runtime").JSX.Element;
export { Replies, type IRepliesItem, type IRepliesItems };
