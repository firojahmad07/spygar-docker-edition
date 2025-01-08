import { ReactNode } from 'react';
interface ICreateTeamProps {
    className?: string;
    image: ReactNode;
    title: string;
    subTitle: ReactNode;
    engage: {
        path: string;
        btnColor: string;
        label: string;
    };
}
declare const MiscCreateTeam: ({ className, image, title, subTitle, engage }: ICreateTeamProps) => import("react/jsx-runtime").JSX.Element;
export { MiscCreateTeam, type ICreateTeamProps };
