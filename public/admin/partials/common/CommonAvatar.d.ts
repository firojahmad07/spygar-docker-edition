interface IAvatarProps {
    image?: string;
    fallback?: string;
    icon?: string;
    iconClass?: string;
    badgeClass?: string;
    className?: string;
    imageClass?: string;
}
declare const CommonAvatar: ({ image, fallback, icon, iconClass, badgeClass, className, imageClass }: IAvatarProps) => import("react/jsx-runtime").JSX.Element;
export { CommonAvatar, type IAvatarProps };
