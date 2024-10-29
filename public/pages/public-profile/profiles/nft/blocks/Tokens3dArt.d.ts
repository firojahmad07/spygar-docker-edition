interface ITokens3dArtItem {
    image: string;
    title: string;
    id: number;
    info: string;
    date: string;
}
interface ITokens3dArtItems extends Array<ITokens3dArtItem> {
}
declare const Tokens3dArt: () => import("react/jsx-runtime").JSX.Element;
export { Tokens3dArt, type ITokens3dArtItem, type ITokens3dArtItems };
