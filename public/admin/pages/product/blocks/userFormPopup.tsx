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

              <div className="flex justify-center mb-5">
                <img
                  src={toAbsoluteUrl('/media/avatars/300-1.png')}
                  className="rounded-full border-3 border-success max-h-[100px]"
                  alt=""
                />
              </div>

              <div className="grid lg:grid-cols-3 gap-3 w-full items-center">
                <div></div>
                <div className="flex justify-end gap-2">
                  <button className="dropdown-toggle btn btn-sm btn-primary">
                    <KeenIcon icon="users" /> submit form
                  </button>
                  <button className="btn btn-sm btn-icon btn-light">
                    <KeenIcon icon="messages" />
                  </button>
                </div>
              </div>
            </div>
          </ModalHeader>
          <ModalBody className="scrollable-y py-0 mb-5 pl-6 pr-3 mr-3">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
              <div className="col-span-1">
                <div className="grid gap-5 lg:gap-7.5">
                  <CommunityBadges title="Community Badges" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col gap-5 lg:gap-7.5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
                  <div className="flex">
                  <label className="input input-sm">
                    <input placeholder="first name" type="text" value="" />
                  </label>
                  </div>
                  </div>
                  <Projects />
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export { ModalProfile };
