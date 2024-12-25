interface IGeneralInfoItem {
    label: string;
    info: string;
    type?: number;
}
interface IGeneralInfoItems extends Array<IGeneralInfoItem> {
}
declare const GeneralInfo: () => import("react/jsx-runtime").JSX.Element;
export { GeneralInfo, type IGeneralInfoItem, type IGeneralInfoItems };
