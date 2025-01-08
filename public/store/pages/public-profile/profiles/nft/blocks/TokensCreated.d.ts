interface ITokensCreatedItem {
    image: string;
    title: string;
    id: number;
    info: string;
    date: string;
}
interface ITokensCreatedItems extends Array<ITokensCreatedItem> {
}
declare const TokensCreated: () => import("react/jsx-runtime").JSX.Element;
export { TokensCreated, type ITokensCreatedItem, type ITokensCreatedItems };
