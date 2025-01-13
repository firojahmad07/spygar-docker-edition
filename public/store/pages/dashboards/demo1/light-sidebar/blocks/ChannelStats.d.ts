interface IChannelStatsItem {
    logo: string;
    logoDark?: string;
    info: string;
    desc: string;
    path: string;
}
interface IChannelStatsItems extends Array<IChannelStatsItem> {
}
declare const ChannelStats: () => import("react/jsx-runtime").JSX.Element;
export { ChannelStats, type IChannelStatsItem, type IChannelStatsItems };
