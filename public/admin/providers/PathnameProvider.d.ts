import { ReactNode } from 'react';
interface IPathnameContextProps {
    pathname: string;
    prevPathname: string | undefined;
}
declare const PathnameProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
declare const usePathname: () => IPathnameContextProps;
export { PathnameProvider, usePathname };
