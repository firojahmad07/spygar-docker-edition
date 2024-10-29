import { Link } from 'react-router-dom';

import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';

import { DropdownCardItem1 } from '../dropdowns/general';
import { CommonHexagonBadge } from '../common';
import { ReactNode } from 'react';

interface IRoleProps {
  path: string;
  title: string;
  subTitle: string;
  description: string;
  team: string;
  badge: ReactNode;
}

const CardRole = ({ path, title, subTitle, description, team, badge }: IRoleProps) => {
  return (
    <div className="card flex flex-col gap-5 p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-1">
        <div className="flex items-center gap-2.5">
          <CommonHexagonBadge badge={badge} />

          <div className="flex flex-col">
            <Link
              to={`${path}`}
              className="text-md font-semibold text-gray-900 hover:text-primary-active mb-px"
            >
              {title}
            </Link>
            <span className="text-2sm font-medium text-gray-600">{subTitle}</span>
          </div>
        </div>

        <Menu className="items-stretch">
          <MenuItem
            toggle="dropdown"
            trigger="click"
            dropdownProps={{
              placement: 'bottom-end',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10] // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear mb-2.5-">
              <KeenIcon icon="dots-vertical" />
            </MenuToggle>
            {DropdownCardItem1()}
          </MenuItem>
        </Menu>
      </div>

      <p className="text-2sm text-gray-600 font-medium">{description}</p>

      <span className="text-2sm text-gray-700 font-medium">{team}</span>
    </div>
  );
};

export { CardRole, type IRoleProps };
