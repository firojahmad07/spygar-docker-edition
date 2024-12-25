interface IIntegrationsItem {
    logo: string;
    title: string;
    email: string;
    description: string;
    checkbox: boolean;
}
interface IIntegrationsItems extends Array<IIntegrationsItem> {
}
declare const Integrations: () => import("react/jsx-runtime").JSX.Element;
export { Integrations, type IIntegrationsItem, type IIntegrationsItems };
