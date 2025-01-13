import { ModalProfile } from '@/store/partials/modals/profile';
import { useState } from 'react';

const ProfileModalContent = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(true);
  const handleClose = () => {
    setProfileModalOpen(false);
  };

  return <ModalProfile open={profileModalOpen} onClose={handleClose} />;
};

export { ProfileModalContent };
