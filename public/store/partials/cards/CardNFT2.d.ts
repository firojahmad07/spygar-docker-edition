import { IAvatar } from './CardAuthor';
interface INFT2Item {
    total: string;
    description: string;
}
interface INFT2Items extends Array<INFT2Item> {
}
interface INFT2Props {
    avatar?: IAvatar;
    bgImage: string;
    name: string;
    email: string;
    info: string;
    statistics: INFT2Item[];
}
declare const CardNFT2: ({ avatar, bgImage, name, email, info, statistics }: INFT2Props) => import("react/jsx-runtime").JSX.Element;
export { CardNFT2, type INFT2Item, type INFT2Items, type INFT2Props };
