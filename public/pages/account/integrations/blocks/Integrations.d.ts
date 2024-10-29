import { ReactNode } from 'react';
interface IIntegrationsItem {
    logo: string;
    path: string;
    name: string;
    description: string;
    actions: ReactNode;
}
interface IIntegrationsItems extends Array<IIntegrationsItem> {
}
declare const Integrations: () => import("react/jsx-runtime").JSX.Element;
export { Integrations, type IIntegrationsItem, type IIntegrationsItems };
