interface IAvatarsItem {
    path?: string;
    filename?: string;
    fallback?: string;
    variant?: string;
}
interface IAvatarsItems extends Array<IAvatarsItem> {
}
interface IAvatarsProps {
    size?: string;
    group: IAvatarsItem[];
    more?: {
        variant?: string;
        number?: number | string;
        label?: string;
    };
    className?: string;
}
declare const CommonAvatars: ({ size, group, more, className }: IAvatarsProps) => import("react/jsx-runtime").JSX.Element;
export { CommonAvatars, type IAvatarsItem, type IAvatarsItems, type IAvatarsProps };
