interface IPermissionsCheckItem {
    module: string;
    view: boolean;
    modify: boolean;
    publish: boolean;
    configure: boolean;
}
interface IPermissionsCheckItems extends Array<IPermissionsCheckItem> {
}
declare const PermissionsCheck: () => import("react/jsx-runtime").JSX.Element;
export { PermissionsCheck, type IPermissionsCheckItem, type IPermissionsCheckItems };
