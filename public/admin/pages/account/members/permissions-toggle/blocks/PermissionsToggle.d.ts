interface IPermissionsToggleItem {
    icon: string;
    title: string;
    description: string;
    checked: boolean;
}
interface IPermissionsToggleItems extends Array<IPermissionsToggleItem> {
}
declare const PermissionsToggle: () => import("react/jsx-runtime").JSX.Element;
export { PermissionsToggle, type IPermissionsToggleItem, type IPermissionsToggleItems };
