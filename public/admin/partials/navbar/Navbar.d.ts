import { ReactNode } from 'react';
export interface INavbarProps {
    children: ReactNode;
}
export interface INavbarActionsProps {
    children: ReactNode;
}
declare const Navbar: ({ children }: INavbarProps) => import("react/jsx-runtime").JSX.Element;
export { Navbar };
