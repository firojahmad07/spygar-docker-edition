interface IDeviceData {
    device: {
        icon: string;
        name: string;
        browser: string;
    };
    ipAddress: string;
    location: string;
    added: string;
    lastSession: string;
}
declare const DeviceData: IDeviceData[];
export { DeviceData, type IDeviceData };
