interface INetworkItem {
    logo: string;
    info: string;
}
interface INetworkItems extends Array<INetworkItem> {
}
declare const Network: () => import("react/jsx-runtime").JSX.Element;
export { Network, type INetworkItem, type INetworkItems };
