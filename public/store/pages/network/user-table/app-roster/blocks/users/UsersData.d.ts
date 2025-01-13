interface IUsersData {
    user: {
        avatar: string;
        userName: string;
    };
    phone: string;
    branch: string;
    logos: string[];
    labels: string[];
    switch: boolean;
}
declare const UsersData: IUsersData[];
export { UsersData, type IUsersData };
