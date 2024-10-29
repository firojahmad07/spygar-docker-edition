import { ReactNode } from 'react';
interface INotificationProps {
    icon: string;
    title: string;
    description: string;
    button?: boolean;
    actions: ReactNode;
}
declare const CardNotification: ({ icon, title, description, button, actions }: INotificationProps) => import("react/jsx-runtime").JSX.Element;
export { CardNotification, type INotificationProps };
