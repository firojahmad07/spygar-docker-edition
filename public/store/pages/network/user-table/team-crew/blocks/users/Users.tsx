/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { toAbsoluteUrl } from '@/admin/utils';
import { Link } from 'react-router-dom';
import { DataGrid, KeenIcon , MenuIcon, Menu,MenuLink,MenuSub, MenuTitle, MenuItem, MenuSeparator, MenuToggle} from '@/admin/components';
import { ColumnDef } from '@tanstack/react-table';
import { UsersData, IUsersData } from '.';
// import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';

const DropdownCrudItem1 = () => {
  return (
    <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
      <MenuItem path="#">
        <MenuLink path='125'>
          <MenuIcon>
            <KeenIcon icon="pencil" />
          </MenuIcon>
          <MenuTitle>Edit</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="copy" />
          </MenuIcon>
          <MenuTitle>Make a copy</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuSeparator />
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="trash" />
          </MenuIcon>
          <MenuTitle>Remove</MenuTitle>
        </MenuLink>
      </MenuItem>
    </MenuSub>
  );
};
const Users = () => {
  const columns = useMemo<ColumnDef<IUsersData>[]>(
    () => [
      {
        accessorFn: (row: IUsersData) => row.user,
        id: 'users',
        header: () => 'Member', 
        enableSorting: true,
        cell: ({ row }) => {  // 'row' argumentini cell funksiyasiga qo'shdik
          return (
            
            <div className="flex items-center gap-4">
              <img
                src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
                className="rounded-full size-9 shrink-0"
                alt={`${row.original.user.userName}`}
              />

              <div className="flex flex-col gap-0.5">
                <Link to="#" className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px">
                  {row.original.user.userName}
                </Link>
                
                <Link to="#" className="text-2sm text-gray-700 font-normal hover:text-primary-active">
                  {row.original.user.userGmail}
                </Link> 
              </div>
            </div>
          );
        },
        meta: {
          className: 'min-w-[250px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        accessorFn: (row) => row.role,
        id: 'role',
        header: () => 'Pole',
        enableSorting: true,
        cell: (info) => {
          return info.row.original.role;
        },
        meta: {
          className: 'min-w-[170px]',
        }
      },   
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: () => 'Status',
        enableSorting: true,
        cell: (info) => {                    
          return (
            <span className={`badge badge-${info.row.original.status.color} shrink-0 badge-outline rounded-[30px]`}>
              <span className={`size-1.5 rounded-full bg-${info.row.original.status.color} me-1.5`}></span>
              {info.row.original.status.label}
            </span>
          );
        },
        meta: {
          className: 'min-w-[170px]' 
        }
      },
      {
        accessorFn: (row) => row.location,
        id: 'location',
        header: () => 'Location',
        enableSorting: true,
        cell: (info) => {                    
          return (
            
            <div className="flex items-center text-gray-800 font-normal gap-1.5">
              <img
                src={toAbsoluteUrl(`/media/flags/${info.row.original.flag}`)}
                className="rounded-full size-4 shrink-0"
                alt={`${info.row.original.user.userName}`}
              />
              {info.row.original.location}
            </div>
          );
        }, 
        meta: {
          className: 'min-w-[170px]' 
        }
      },    
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: () => 'Activity',
        enableSorting: true,
        cell: (info) => {                    
          return info.row.original.activity;
        },
        meta: {
          className: 'min-w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        }
      },
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: () => {                    
          return (
            // <button className="btn btn-sm btn-icon btn-clear btn-light">
            //   <KeenIcon icon="dots-vertical" /> 
            // </button>
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
                  {DropdownCrudItem1()}
                </MenuItem>
              </Menu>
          );
        },
        meta: {
          className: 'w-[70px]'
        }
      }
    ],
    []
  );

  const data: IUsersData[] = useMemo(() => UsersData, []);

  return (
    <div className="card card-grid h-full min-w-full">
      <div className="card-header flex-wrap gap-2.5">
        <h3 className="card-title">Showing 20 of 68 users</h3>

				<div className="flex items-center flex-wrap gap-2.5">
          <div className="flex">
            <label className="input input-sm">
              <KeenIcon icon="magnifier" />
              <input placeholder="Search users" type="text" value="" />
            </label>
          </div>

          <select className="select select-sm w-28">
            <option value="1">Active</option>
            <option value="2">Disabled</option>
            <option value="2">Pending</option>
          </select>

          <select className="select select-sm w-28">
            <option value="1">Latest</option>
            <option value="2">Older</option>
            <option value="3">Oldest</option>
          </select>

          <button className="btn btn-sm btn-outline btn-primary">
            <KeenIcon icon="setting-4" /> Filters
          </button>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'users', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { Users };
