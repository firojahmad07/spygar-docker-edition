import React from 'react';
interface IModalReportUserProps {
    open: boolean;
    onClose: () => void;
}
declare const ModalReportUser: React.ForwardRefExoticComponent<IModalReportUserProps & React.RefAttributes<HTMLDivElement>>;
export { ModalReportUser };
