interface IStoreClientsData {
    user: {
        avatar: string;
        name: string;
        email: string;
    };
    clientId: string;
    ordersValue: string;
    location: {
        flag: string;
        name: string;
    };
    activity: string;
}
declare const StoreClientsData: IStoreClientsData[];
export { StoreClientsData, type IStoreClientsData };
