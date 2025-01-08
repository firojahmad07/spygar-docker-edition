interface IContributorsItem {
    avatar: string;
    name: string;
    connections: number;
    connected: boolean;
}
interface IContributorsItems extends Array<IContributorsItem> {
}
declare const Contributors: () => import("react/jsx-runtime").JSX.Element;
export { Contributors, type IContributorsItem, type IContributorsItems };
