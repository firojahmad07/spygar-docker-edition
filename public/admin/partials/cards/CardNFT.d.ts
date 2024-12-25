interface INFTProps {
    image: string;
    title: string;
    id: number;
    info: string;
    date: string;
}
declare const CardNFT: ({ image, id, title, info, date }: INFTProps) => import("react/jsx-runtime").JSX.Element;
export { CardNFT, type INFTProps };
