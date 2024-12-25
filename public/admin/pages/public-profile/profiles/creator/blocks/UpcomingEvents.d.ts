interface IUpcomingEventsItem {
    month: string;
    date: string;
    image: string;
    label: string;
    title: string;
    desc: string;
}
interface IUpcomingEventsItems extends Array<IUpcomingEventsItem> {
}
declare const UpcomingEvents: () => import("react/jsx-runtime").JSX.Element;
export { UpcomingEvents, type IUpcomingEventsItem, type IUpcomingEventsItems };
