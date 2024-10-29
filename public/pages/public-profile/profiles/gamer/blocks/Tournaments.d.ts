interface ITournamentsItem {
    image: string;
    logo: string;
    title: string;
    time: string;
    labels: string[];
    progress: {
        variant: string;
        value: number;
        slotNumber: number;
        leftNumber: number;
    };
}
interface ITournamentsItems extends Array<ITournamentsItem> {
}
declare const Tournaments: () => import("react/jsx-runtime").JSX.Element;
export { Tournaments, type ITournamentsItem, type ITournamentsItems };
