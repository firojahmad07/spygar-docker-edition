import { IAvatar } from './CardAuthor';
interface IUserMiniProps {
    avatar?: IAvatar;
    name: string;
    verify: boolean;
    email: string;
}
declare const CardUserMini: ({ avatar, verify, name, email }: IUserMiniProps) => import("react/jsx-runtime").JSX.Element;
export { CardUserMini, type IUserMiniProps };
