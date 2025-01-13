interface ILoginSessionsItem {
    avatar: string;
    name: string;
    connections: number;
    location: string;
    recent: string;
}
interface ILoginSessionsItems extends Array<ILoginSessionsItem> {
}
declare const LoginSessions: () => import("react/jsx-runtime").JSX.Element;
export { LoginSessions, type ILoginSessionsItem, type ILoginSessionsItems };
