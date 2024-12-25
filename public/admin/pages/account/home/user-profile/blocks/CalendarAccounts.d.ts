interface ICalendarAccountsItem {
    logo: string;
    title: string;
    email: string;
}
interface ICalendarAccountsItems extends Array<ICalendarAccountsItem> {
}
declare const CalendarAccounts: () => import("react/jsx-runtime").JSX.Element;
export { CalendarAccounts, type ICalendarAccountsItem, type ICalendarAccountsItems };
