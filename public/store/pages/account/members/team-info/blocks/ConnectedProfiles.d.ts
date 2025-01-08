interface IConnectedProfilesItem {
    user: {
        name: string;
        tasks: number;
        avatar: string;
    };
    socialLogo: string;
    socialLogoDark?: string;
}
interface IConnectedProfilesItems extends Array<IConnectedProfilesItem> {
}
declare const ConnectedProfiles: () => import("react/jsx-runtime").JSX.Element;
export { ConnectedProfiles, type IConnectedProfilesItem, type IConnectedProfilesItems };
