interface IUser {
    avatar: string;
    name: string;
}
interface IBrowser {
    icon: string;
    name: string;
}
interface ILocation {
    name: string;
    flag: string;
}
interface ICurrentSessionsData {
    id: number;
    user: IUser;
    browser: IBrowser;
    ipAddress: string;
    location: ILocation;
}
declare const CurrentSessionsData: ICurrentSessionsData[];
export { CurrentSessionsData, type ICurrentSessionsData };
