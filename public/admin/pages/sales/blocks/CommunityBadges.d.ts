interface ICommunityBadgesItem {
    stroke: string;
    fill: string;
    icon: string;
    iconColor: string;
}
interface ICommunityBadgesItems extends Array<ICommunityBadgesItem> {
}
interface ICommunityBadgesProps {
    title: string;
}
declare const CommunityBadges: ({ title }: ICommunityBadgesProps) => import("react/jsx-runtime").JSX.Element;
export { CommunityBadges, type ICommunityBadgesItem, type ICommunityBadgesItems, type ICommunityBadgesProps };
