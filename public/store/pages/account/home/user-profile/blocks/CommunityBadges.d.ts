interface ICommunityBadgesItem {
    title: string;
    stroke: string;
    fill: string;
    icon: string;
    iconColor: string;
}
interface ICommunityBadgesItems extends Array<ICommunityBadgesItem> {
}
declare const CommunityBadges: () => import("react/jsx-runtime").JSX.Element;
export { CommunityBadges, type ICommunityBadgesItem, type ICommunityBadgesItems };
