interface IConnectionsItem {
    avatar: string;
    name: string;
    connections: number;
    jointLinks: number | string;
    connected: boolean;
}
interface IConnectionsItems extends Array<IConnectionsItem> {
}
interface IConnectionsProps {
    url: string;
}
declare const Connections: ({ url }: IConnectionsProps) => import("react/jsx-runtime").JSX.Element;
export { Connections, type IConnectionsItem, type IConnectionsItems, type IConnectionsProps };
