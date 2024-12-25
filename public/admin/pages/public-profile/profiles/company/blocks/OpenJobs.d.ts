interface IOpenJobsItem {
    icon: string;
    link: string;
    desc: string;
    price: string;
}
interface IOpenJobsItems extends Array<IOpenJobsItem> {
}
declare const OpenJobs: () => import("react/jsx-runtime").JSX.Element;
export { OpenJobs, type IOpenJobsItem, type IOpenJobsItems };
