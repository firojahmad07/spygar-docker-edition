interface IVisitorsData {
    user: {
        avatar: string;
        name: string;
    };
    browser: string;
    ipAddress: string;
    location: {
        flag: string;
        name: string;
    };
    activity: string;
}
declare const VisitorsData: IVisitorsData[];
export { VisitorsData, type IVisitorsData };
