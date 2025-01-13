interface IAvatar {
    className: string;
    image?: string;
    imageClass?: string;
    fallback?: string;
    badgeClass: string;
}
interface IMiniCardsContentItem {
    avatar: IAvatar;
    name: string;
    email: string;
    verify: boolean;
}
interface IMiniCardsContentItems extends Array<IMiniCardsContentItem> {
}
declare const NetworkMiniCardsContent: () => import("react/jsx-runtime").JSX.Element;
export { NetworkMiniCardsContent, type IMiniCardsContentItem, type IMiniCardsContentItems };
