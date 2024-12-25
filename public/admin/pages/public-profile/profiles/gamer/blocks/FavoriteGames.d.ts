interface IFavoriteGamesItem {
    image: string;
}
interface IFavoriteGamesItems extends Array<IFavoriteGamesItem> {
}
declare const FavoriteGames: () => import("react/jsx-runtime").JSX.Element;
export { FavoriteGames, type IFavoriteGamesItem, type IFavoriteGamesItems };
