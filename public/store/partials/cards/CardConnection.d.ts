interface IConnectionItem {
    total: string;
    description: string;
}
interface IConnectionItems extends Array<IConnectionItem> {
}
interface IConnectionProps {
    name: string;
    info: string;
    avatar: {
        className: string;
        fallback?: string;
        image?: string;
        imageClass?: string;
        badgeClass: string;
    };
    email: string;
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
    };
    statistics: IConnectionItem[];
    connected: boolean;
}
declare const CardConnection: ({ name, info, avatar, email, team, statistics, connected }: IConnectionProps) => import("react/jsx-runtime").JSX.Element;
export { CardConnection, type IConnectionItem, type IConnectionItems, type IConnectionProps };
