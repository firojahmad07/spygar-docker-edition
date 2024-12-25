interface IHeadingProps {
    author: string;
    avatar: {
        image?: string;
        fallback?: string;
        icon?: string;
        iconClass?: string;
        badgeClass?: string;
        className?: string;
        imageClass?: string;
    };
    date: string;
}
declare const Heading: ({ author, avatar, date }: IHeadingProps) => import("react/jsx-runtime").JSX.Element;
export { Heading, type IHeadingProps };
