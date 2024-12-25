interface IAboutItem {
    label: string;
    info: string;
    type?: number;
}
interface IAboutItems extends Array<IAboutItem> {
}
declare const About: () => import("react/jsx-runtime").JSX.Element;
export { About, type IAboutItem, type IAboutItems };
