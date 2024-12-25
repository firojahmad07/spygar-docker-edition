interface IAvatar {
    className?: string;
    image?: string;
    imageClass?: string;
    fallback?: string;
    badgeClass?: string;
}
interface IWork {
    image: string;
    title: string;
    id: number;
}
interface IAuthorProps {
    avatar?: IAvatar;
    bgImage: string;
    name: string;
    location: string;
    works: IWork[];
}
declare const CardAuthor: ({ avatar, bgImage, name, location, works }: IAuthorProps) => import("react/jsx-runtime").JSX.Element;
export { CardAuthor, type IAvatar, type IWork, type IAuthorProps };
