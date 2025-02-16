import { Fragment } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader } from '@/admin/components/modal'; // Import your custom Modal component
import { KeenIcon } from '@/admin/components';
import { toAbsoluteUrl } from '@/admin/utils';

import {
  CommunityBadges,
  Connections,
  Contributions,
  Projects
} from '@/admin/pages/public-profile/profiles/default';

interface IModalProfileProps {
  open: boolean;
  onClose: () => void;
}

const ModalProfile = ({ open, onClose }: IModalProfileProps) => {
  return (
    <Fragment>
      <style>
        {`
          .modal-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/2.png')}');
          }
          .dark .modal-bg  {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/2-dark.png')}');
          }
        `}
      </style>

      <Modal open={open} onClose={onClose} className="!flex py-[5%]">
        <ModalContent className="container-fixed p-0">
          <ModalHeader className="modal-rounded-t p-0 border-0 relative min-h-80 flex flex-col items-stretch justify-end bg-center bg-cover bg-no-repeat mb-7 modal-bg">
            <div className="flex flex-col justify-end border-b-0 grow px-9 bg-gradient-to-t from-light from-3% to-transparent">
              <button
                className="btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-10 shadow-default"
                onClick={onClose}
              >
                <KeenIcon icon="cross" />
              </button>

              <div style={{width: "90%"}}>
                  <label className="input m-[15px]">
                    <input placeholder="first name" type="text" value="" />
                  </label>
                  
                  <label className="input m-[15px]">
                    <input placeholder="last name" type="text" value="" />
                  </label>
                  <label className="input m-[15px]">
                    <input placeholder="email" type="text" value="" />
                  </label>
                  <label className="input m-[15px]">
                    <input placeholder="password" type="text" value="" />
                  </label>
            </div>


              <div className="grid lg:grid-cols-3 gap-3 w-full items-center">
                <div></div>
                <div className="flex justify-end gap-2">
                  <button className="dropdown-toggle btn btn-sm btn-primary m-[15px]">
                   submit form
                  </button>
                </div>
              </div>
            </div>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export { ModalProfile };
