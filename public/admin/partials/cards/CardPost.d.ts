interface IPostProps {
    image: string;
    label: string;
    description: string;
    time: string;
}
declare const CardPost: ({ image, label, description, time }: IPostProps) => import("react/jsx-runtime").JSX.Element;
export { CardPost, type IPostProps };
