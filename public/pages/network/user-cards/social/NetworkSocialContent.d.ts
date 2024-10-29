import { IAvatarProps } from '@/partials/common';
interface ISocialContentItem {
    avatar: IAvatarProps;
    name: string;
    description: string;
    verify: boolean;
}
interface ISocialContentItems extends Array<ISocialContentItem> {
}
declare const NetworkSocialContent: () => import("react/jsx-runtime").JSX.Element;
export { NetworkSocialContent, type ISocialContentItem, type ISocialContentItems };
