interface ITeamCrewAvatar {
    className: string;
    image?: string;
    imageClass?: string;
    fallback?: string;
    badgeClass: string;
}
interface ITeamCrewGroup {
    filename: string;
}
interface ITeamCrewTeam {
    size: string;
    group: ITeamCrewGroup[];
    more?: {
        number: number;
        variant: string;
    };
}
interface ITeamCrewStatistic {
    total: string;
    description: string;
}
interface ITeamCrewContentItem {
    name: string;
    info: string;
    avatar: ITeamCrewAvatar;
    email: string;
    team: ITeamCrewTeam;
    statistics: ITeamCrewStatistic[];
    connected: boolean;
}
interface ITeamCrewContentItems extends Array<ITeamCrewContentItem> {
}
declare const NetworkUserCardsTeamCrewContent: () => import("react/jsx-runtime").JSX.Element;
export { NetworkUserCardsTeamCrewContent, type ITeamCrewContentItem, type ITeamCrewContentItems };
