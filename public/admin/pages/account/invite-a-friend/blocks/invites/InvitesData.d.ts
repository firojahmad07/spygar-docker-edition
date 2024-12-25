interface IInvitesMember {
    avatar: string;
    name: string;
    tasks: string;
}
interface IInvitesLocation {
    name: string;
    flag: string;
}
interface IInvitesStatus {
    label: string;
    variant: string;
}
interface IInvitesData {
    member: IInvitesMember;
    location: IInvitesLocation;
    status: IInvitesStatus;
    recentlyActivity: string;
}
declare const InvitesData: IInvitesData[];
export { InvitesData, type IInvitesData };
