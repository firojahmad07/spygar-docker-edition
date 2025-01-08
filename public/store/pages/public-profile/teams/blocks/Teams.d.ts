interface ITeamsItem {
    icon: string;
    title: string;
    description: string;
    labels: string[];
    team: {
        size?: string;
        group: Array<{
            filename?: string;
            variant?: string;
            fallback?: string;
        }>;
        more?: {
            number: number;
            variant: string;
        };
        className?: string;
    };
    connected: boolean;
    rating: {
        value: number;
        round: number;
    };
}
interface ITeamsItems extends Array<ITeamsItem> {
}
declare const Teams: () => import("react/jsx-runtime").JSX.Element;
export { Teams, type ITeamsItem, type ITeamsItems };
