interface IUsersData {
    user: {
        avatar: string;
        userName: string;
        description: string;
    };
    total: string;
    team: {
        logo: string;
        label: string;
    };
    products: string;
    rating: {
        value: number;
        round: number;
    };
}
declare const UsersData: IUsersData[];
export { UsersData, type IUsersData };
