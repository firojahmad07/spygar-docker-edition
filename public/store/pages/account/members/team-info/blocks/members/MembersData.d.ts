interface MemberData {
    avatar: string;
    name: string;
    tasks: string;
}
interface LocationData {
    name: string;
    flag: string;
}
interface StatusData {
    label: string;
    variant: string;
}
interface IMembersData {
    member: MemberData;
    location: LocationData;
    status: StatusData;
    recentlyActivity: string;
}
declare const MembersData: IMembersData[];
export { MembersData, type IMembersData };
