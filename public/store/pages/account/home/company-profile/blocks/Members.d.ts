interface IMembersItem {
    avatar: string;
    name: string;
    connections: number;
    label: string;
    joined: string;
    disabled: boolean;
}
interface IMembersItems extends Array<IMembersItem> {
}
interface IMembersProps {
    url: string;
}
declare const Members: ({ url }: IMembersProps) => import("react/jsx-runtime").JSX.Element;
export { Members, type IMembersItem, type IMembersItems, type IMembersProps };
