interface IAboutTable {
    status: string;
    info: string;
}
interface IAboutTables extends Array<IAboutTable> {
}
declare const About: () => import("react/jsx-runtime").JSX.Element;
export { About, type IAboutTable, type IAboutTables };
