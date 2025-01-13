interface IConnection {
    avatar: string;
    name: string;
    connections: number | 'none';
    jointLinks: number | 'none';
}
interface IConnections extends Array<IConnection> {
}
declare const Connections: () => import("react/jsx-runtime").JSX.Element;
export { Connections, type IConnection, type IConnections };
