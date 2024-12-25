interface ITokensCollectedItem {
    image: string;
    title: string;
    id: number;
    info: string;
    date: string;
}
interface ITokensCollectedItems extends Array<ITokensCollectedItem> {
}
declare const TokensCollected: () => import("react/jsx-runtime").JSX.Element;
export { TokensCollected, type ITokensCollectedItem, type ITokensCollectedItems };
