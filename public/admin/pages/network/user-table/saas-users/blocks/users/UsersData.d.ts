interface IUsersData {
    user: {
        avatar: string;
        name: string;
        email: string;
    };
    labels: string[];
    license: {
        type: string;
        left: string;
    };
    payment: string;
    enforce: boolean;
}
declare const UsersData: IUsersData[];
export { UsersData, type IUsersData };
