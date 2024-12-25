interface IMember {
    avatar: string;
    name: string;
    tasks: string;
}
interface ILocation {
    name: string;
    flag: string;
}
interface IStatus {
    label: string;
    variant: string;
}
interface IMembersData {
    member: IMember;
    roles: string[];
    location: ILocation;
    status: IStatus;
    recentlyActivity: string;
}
declare const MembersData: IMembersData[];
export { MembersData, type IMembersData };
