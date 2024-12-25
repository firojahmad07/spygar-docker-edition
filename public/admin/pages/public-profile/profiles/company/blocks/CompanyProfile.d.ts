import 'leaflet/dist/leaflet.css';
interface IProfileRow {
    icon: string;
    text: string;
    info: boolean;
}
interface IProfileRows extends Array<IProfileRow> {
}
interface IProfileProduct {
    label: string;
}
interface IProfileProducts extends Array<IProfileProduct> {
}
declare const CompanyProfile: () => import("react/jsx-runtime").JSX.Element;
export { CompanyProfile, type IProfileRow, type IProfileRows, type IProfileProduct, type IProfileProducts };
