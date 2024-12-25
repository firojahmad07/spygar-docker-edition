interface INowPlayingItem {
    image: string;
    logo: string;
    title: string;
    date: string;
    statistics: Array<{
        number: string;
        description: string;
    }>;
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
interface INowPlayingItems extends Array<INowPlayingItem> {
}
declare const NowPlaying: () => import("react/jsx-runtime").JSX.Element;
export { NowPlaying, type INowPlayingItem, type INowPlayingItems };
