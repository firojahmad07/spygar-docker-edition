interface INetworkItem {
    name: string;
    info: string;
    avatar: {
        className: string;
        fallback?: string;
        image?: string;
        imageClass?: string;
        badgeClass: string;
    };
    email: string;
    team: {
        size?: string;
        group: Array<{
            filename?: string;
            variant?: string;
            fallback?: string;
        }>;
        more?: {
            number: number;
            variant: string;
        };
    };
    statistics: Array<{
        total: string;
        description: string;
    }>;
    connected: boolean;
}
interface INetworkItems extends Array<INetworkItem> {
}
declare const Network: () => import("react/jsx-runtime").JSX.Element;
export { Network, type INetworkItem, type INetworkItems };
