interface IEngageProps {
    title: string;
    description: string;
    image: any;
    more: {
        url: string;
        title: string;
    };
}
declare const MiscEngage: ({ title, description, image, more }: IEngageProps) => import("react/jsx-runtime").JSX.Element;
export { MiscEngage, type IEngageProps };
