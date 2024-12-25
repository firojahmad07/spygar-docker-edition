interface IUsersData {
    user: {
        avatar: string;
        userName: string;
        userGmail: string;
    };
    role: string;
    status: {
        label: string;
        color: string;
    };
    location: string;
    flag: string;
    activity: string;
}
declare const UsersData: IUsersData[];
export { UsersData, type IUsersData };
