interface IAvatar {
    className: string;
    image?: string;
    imageClass?: string;
    fallback?: string;
    badgeClass: string;
}
interface IStatistic {
    total: string;
    description: string;
}
interface INFTContentItem {
    name: string;
    info: string;
    avatar: IAvatar;
    email: string;
    statistics: IStatistic[];
    bgImage: string;
}
interface INFTContentItems extends Array<INFTContentItem> {
}
declare const NetworkNFTContent: () => import("react/jsx-runtime").JSX.Element;
export { NetworkNFTContent, type INFTContentItem, type INFTContentItems };
