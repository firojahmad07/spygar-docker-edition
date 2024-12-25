interface INowPlayingItem {
    number: string;
    description: string;
}
interface INowPlayingItems extends Array<INowPlayingItem> {
}
interface INowPlayingProps {
    image: string;
    logo: string;
    title: string;
    date: string;
    statistics: INowPlayingItem[];
    label: number;
    team: {
        group: Array<{
            filename: string;
        }>;
        more?: {
            number: number;
            variant: string;
        };
    };
}
declare const CardNowPlaying: ({ image, logo, title, date, statistics, team, label }: INowPlayingProps) => import("react/jsx-runtime").JSX.Element;
export { CardNowPlaying, type INowPlayingItem, type INowPlayingItems, type INowPlayingProps };
