import { ReactNode } from 'react';
interface IApiIntegrationsData {
    integration: string;
    apiKey: string;
    dailyCalls: string;
    status: ReactNode;
}
declare const ApiIntegrationsData: IApiIntegrationsData[];
export { ApiIntegrationsData, type IApiIntegrationsData };
