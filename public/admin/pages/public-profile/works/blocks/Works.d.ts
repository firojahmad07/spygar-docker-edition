interface IWorksItem {
    title: string;
    description: string;
    image: string;
    authorName: string;
    authorAvatar: string;
    likes: number;
    comments: number;
}
interface IWorksItems extends Array<IWorksItem> {
}
declare const Works: () => import("react/jsx-runtime").JSX.Element;
export { Works, type IWorksItem, type IWorksItems };
