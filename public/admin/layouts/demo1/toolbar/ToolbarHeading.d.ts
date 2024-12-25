import { ReactNode } from 'react';
export interface IToolbarHeadingProps {
    title?: string | ReactNode;
    description?: string | ReactNode;
}
declare const ToolbarHeading: ({ title, description }: IToolbarHeadingProps) => import("react/jsx-runtime").JSX.Element;
export { ToolbarHeading };
