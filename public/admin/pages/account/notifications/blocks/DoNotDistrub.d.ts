import { ReactNode } from 'react';
interface IDoNotDistrubProps {
    title?: string;
    icon?: ReactNode;
    text?: string;
}
declare const DoNotDistrub: ({ title, icon, text }: IDoNotDistrubProps) => import("react/jsx-runtime").JSX.Element;
export { DoNotDistrub, type IDoNotDistrubProps };
