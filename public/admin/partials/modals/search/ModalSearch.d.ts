import React from 'react';
interface ModalSearchProps {
    open: boolean;
    onClose: () => void;
}
declare const ModalSearch: React.ForwardRefExoticComponent<ModalSearchProps & React.RefAttributes<HTMLDivElement>>;
export { ModalSearch };
