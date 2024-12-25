interface ITrustedDevicesItem {
    logo: string;
    browser: string;
    location: string;
    flag: string;
    device: string;
    datetime: string;
}
interface ITrustedDevicesItems extends Array<ITrustedDevicesItem> {
}
declare const TrustedDevices: () => import("react/jsx-runtime").JSX.Element;
export { TrustedDevices, type ITrustedDevicesItem, type ITrustedDevicesItems };
