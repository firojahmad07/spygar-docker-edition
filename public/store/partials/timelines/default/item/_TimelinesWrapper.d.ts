import { ReactNode } from 'react';
interface ITimelinesWrapperProps {
    icon: string;
    line: boolean;
    children: ReactNode;
}
declare const TimelinesWrapper: ({ line, icon, children }: ITimelinesWrapperProps) => import("react/jsx-runtime").JSX.Element;
export { TimelinesWrapper };
