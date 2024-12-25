import { ReactNode, CSSProperties } from 'react';
interface IModalBodyProps {
    className?: string;
    children: ReactNode;
    tabIndex?: number;
    style?: CSSProperties;
}
declare const ModalBody: import("react").ForwardRefExoticComponent<IModalBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export { ModalBody };
