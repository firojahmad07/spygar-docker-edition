interface IAuthorContentAvatar {
    className: string;
    image: string;
    imageClass: string;
    badgeClass: string;
}
interface IAuthorContentWork {
    image: string;
    title: string;
    id: number;
}
interface IAuthorContentItem {
    avatar: IAuthorContentAvatar;
    bgImage: string;
    name: string;
    location: string;
    url?: string;
    works: IAuthorContentWork[];
}
interface IAuthorContentItems extends Array<IAuthorContentItem> {
}
declare const NetworkAuthorContent: () => import("react/jsx-runtime").JSX.Element;
export { NetworkAuthorContent, type IAuthorContentItem, type IAuthorContentItems };
