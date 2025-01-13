import { IModalSearchUsersItem } from './types';
interface IModalSearchUsersProps {
    items: IModalSearchUsersItem[];
    more?: boolean;
}
declare const ModalSearchUsers: ({ items, more }: IModalSearchUsersProps) => import("react/jsx-runtime").JSX.Element;
export { ModalSearchUsers };
