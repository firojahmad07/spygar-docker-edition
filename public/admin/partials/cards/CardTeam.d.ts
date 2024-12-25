interface ITeamProps {
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
declare const CardTeam: ({ icon, title, description, labels, rating, team, connected }: ITeamProps) => import("react/jsx-runtime").JSX.Element;
export { CardTeam, type ITeamProps };
