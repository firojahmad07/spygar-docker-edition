interface IUsersItem {
    image: string;
}
interface IUsersItems extends Array<IUsersItem> {
}
interface IUsersProps {
    items: IUsersItem[];
    title: string;
}
declare const Users: ({ title, items }: IUsersProps) => import("react/jsx-runtime").JSX.Element;
export { Users, type IUsersItem, type IUsersItems, type IUsersProps };
