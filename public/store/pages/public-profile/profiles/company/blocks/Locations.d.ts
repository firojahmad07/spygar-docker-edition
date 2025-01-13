interface ILocationsItem {
    image: string;
    title: string;
    description: string;
}
interface ILocationsItems extends Array<ILocationsItem> {
}
declare const Locations: () => import("react/jsx-runtime").JSX.Element;
export { Locations, type ILocationsItem, type ILocationsItems };
