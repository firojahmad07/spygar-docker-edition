interface INetworkItem {
    icon: string;
    link: string;
}
interface INetworkItems extends Array<INetworkItem> {
}
interface INetworkProps {
    data: INetworkItem[];
    title: string;
    className?: string;
}
declare const Network: ({ data, className, title }: INetworkProps) => import("react/jsx-runtime").JSX.Element;
export { Network, type INetworkItem, type INetworkItems, type INetworkProps };
