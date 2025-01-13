interface IIPAddressesData {
    id: number;
    status: string;
    ipAddress: string;
    lastSession: string;
    label: string;
    method: string;
}
declare const IPAddressesData: IIPAddressesData[];
export { IPAddressesData, type IIPAddressesData };
