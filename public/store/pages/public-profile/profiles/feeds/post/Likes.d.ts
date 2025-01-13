interface ILikesItem {
    avatar: string;
    name: string;
    subscribers: number;
    connected: boolean;
}
interface ILikesItems extends Array<ILikesItem> {
}
declare const Likes: () => import("react/jsx-runtime").JSX.Element;
export { Likes, type ILikesItem, type ILikesItems };
