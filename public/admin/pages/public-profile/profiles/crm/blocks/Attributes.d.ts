interface IAttributesItem {
    label: string;
    info: string;
}
interface IAttributesItems extends Array<IAttributesItem> {
}
declare const Attributes: () => import("react/jsx-runtime").JSX.Element;
export { Attributes, type IAttributesItem, type IAttributesItems };
