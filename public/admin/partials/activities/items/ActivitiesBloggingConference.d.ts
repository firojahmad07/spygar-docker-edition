import { ReactNode } from 'react';
interface IBloggingConferenceProps {
    heading?: string;
    datetime?: string;
    image?: ReactNode;
    title?: string;
}
declare const ActivitiesBloggingConference: ({ heading, datetime, image, title }: IBloggingConferenceProps) => import("react/jsx-runtime").JSX.Element;
export { ActivitiesBloggingConference, type IBloggingConferenceProps };
