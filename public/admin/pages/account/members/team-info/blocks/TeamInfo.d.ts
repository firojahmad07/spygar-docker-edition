interface ITeamInfoItem {
    label: string;
}
interface ITeamInfoItems extends Array<ITeamInfoItem> {
}
declare const TeamInfo: () => import("react/jsx-runtime").JSX.Element;
export { TeamInfo, type ITeamInfoItem, type ITeamInfoItems };
