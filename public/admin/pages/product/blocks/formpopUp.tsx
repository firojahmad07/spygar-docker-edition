import { useMemo,useState } from 'react';
import { DataGrid, KeenIcon , MenuIcon, Menu,MenuLink,MenuSub, MenuTitle, MenuItem, MenuSeparator, MenuToggle} from '@/admin/components';
import { UsersData, IUsersData,ModalProfile } from '.';

const ParentComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const userData = {
      name: "John Doe",
      avatar: "/media/avatars/300-1.png",
      role: "Software Engineer",
    };
  
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Profile Modal</button>
  
        <ModalProfile open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  };
  export { ParentComponent };


  