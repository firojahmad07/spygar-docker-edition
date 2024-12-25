import { ReactNode } from 'react';
interface IModalContentProps {
    className?: string;
    children: ReactNode;
    tabIndex?: number;
}
declare const ModalContent: import("react").ForwardRefExoticComponent<IModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { ModalContent };
