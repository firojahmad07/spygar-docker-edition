import { type ReactNode } from 'react';
import { TSettingsContainer } from '@/config';
export interface TPageContainerProps {
    children?: ReactNode;
    width?: TSettingsContainer;
    className?: string;
}
declare const Container: ({ children, width, className }: TPageContainerProps) => import("react/jsx-runtime").JSX.Element;
export { Container };
