interface IRecentUploadsItem {
    image: string;
    desc: string;
    date: string;
}
interface IRecentUploadsItems extends Array<IRecentUploadsItem> {
}
interface IRecentUploadsProps {
    title: string;
}
declare const RecentUploads: ({ title }: IRecentUploadsProps) => import("react/jsx-runtime").JSX.Element;
export { RecentUploads, type IRecentUploadsItem, type IRecentUploadsItems, type IRecentUploadsProps };
