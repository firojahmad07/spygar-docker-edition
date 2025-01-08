import { IAvatar } from './CardAuthor';
interface IUserSocialProps {
    avatar: IAvatar;
    name: string;
    description: string;
    verify: boolean;
}
declare const CardUserSocial: ({ avatar, name, description, verify }: IUserSocialProps) => import("react/jsx-runtime").JSX.Element;
export { CardUserSocial, type IUserSocialProps };
