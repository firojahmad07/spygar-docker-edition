import { ReactNode } from 'react';
interface IAccessibilityItem {
    icon: string;
    title: string;
    description: string;
    actions: ReactNode;
}
interface IAccessibilityItems extends Array<IAccessibilityItem> {
}
declare const Accessibility: () => import("react/jsx-runtime").JSX.Element;
export { Accessibility, type IAccessibilityItems };
