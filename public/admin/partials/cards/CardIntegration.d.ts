import { ReactNode } from 'react';
interface IIntegrationProps {
    logo: string;
    path: string;
    name: string;
    description: string;
    actions: ReactNode;
}
declare const CardIntegration: ({ logo, path, name, description, actions }: IIntegrationProps) => import("react/jsx-runtime").JSX.Element;
export { CardIntegration, type IIntegrationProps };
