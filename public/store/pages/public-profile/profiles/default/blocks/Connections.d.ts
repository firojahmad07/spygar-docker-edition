interface IConnectionsItem {
    avatar: string;
    name: string;
    connections: number;
    connected: boolean;
}
interface IConnectionsItems extends Array<IConnectionsItem> {
}
interface IConnectionsProps {
    title: string;
}
declare const Connections: ({ title }: IConnectionsProps) => import("react/jsx-runtime").JSX.Element;
export { Connections, type IConnectionsItem, type IConnectionsItems, type IConnectionsProps };
