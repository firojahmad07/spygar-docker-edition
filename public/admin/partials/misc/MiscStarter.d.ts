import { ReactNode } from 'react';
interface IStarterProps {
    image: ReactNode;
    title: string;
    subTitle: ReactNode;
    engage: {
        path: string;
        btnColor: string;
        label: string;
    };
}
declare const MiscStarter: ({ image, title, subTitle, engage }: IStarterProps) => import("react/jsx-runtime").JSX.Element;
export { MiscStarter, type IStarterProps };
