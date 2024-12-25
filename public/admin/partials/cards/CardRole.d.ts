import { ReactNode } from 'react';
interface IRoleProps {
    path: string;
    title: string;
    subTitle: string;
    description: string;
    team: string;
    badge: ReactNode;
}
declare const CardRole: ({ path, title, subTitle, description, team, badge }: IRoleProps) => import("react/jsx-runtime").JSX.Element;
export { CardRole, type IRoleProps };
