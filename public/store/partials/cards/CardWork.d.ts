interface IWorkProps {
    image: string;
    title: string;
    description?: string;
    authorAvatar: string;
    authorName: string;
    likes: number;
    comments: number;
}
declare const CardWork: ({ image, title, authorAvatar, authorName, likes, comments }: IWorkProps) => import("react/jsx-runtime").JSX.Element;
export { CardWork, type IWorkProps };
