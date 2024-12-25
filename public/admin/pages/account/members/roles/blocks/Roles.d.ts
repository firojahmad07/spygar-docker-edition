import { ReactNode } from 'react';
interface IRolesItem {
    badge: {
        size: string;
        badge: ReactNode;
        fill: string;
        stroke: string;
    };
    title: string;
    subTitle: string;
    description: string;
    team: string;
    path: string;
}
interface IRolesItems extends Array<IRolesItem> {
}
declare const Roles: () => import("react/jsx-runtime").JSX.Element;
export { Roles, type IRolesItem, type IRolesItems };
