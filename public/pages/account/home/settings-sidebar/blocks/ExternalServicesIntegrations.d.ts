interface IExternalServicesIntegrationsItem {
    logo: string;
    title: string;
    email: string;
    description: string;
    checkbox: boolean;
}
interface IExternalServicesIntegrationsItems extends Array<IExternalServicesIntegrationsItem> {
}
declare const ExternalServicesIntegrations: () => import("react/jsx-runtime").JSX.Element;
export { ExternalServicesIntegrations, type IExternalServicesIntegrationsItem, type IExternalServicesIntegrationsItems };
