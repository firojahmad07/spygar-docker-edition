import { ModalProps as BaseModalProps } from '@mui/base/Modal';
interface IModalProps extends BaseModalProps {
    zIndex?: number;
    className?: string;
}
declare const Modal: import("react").ForwardRefExoticComponent<Omit<IModalProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { Modal };
