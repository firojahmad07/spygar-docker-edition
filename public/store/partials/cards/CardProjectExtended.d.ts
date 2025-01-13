interface IProjectExtendedItem {
    total: string;
    description: string;
}
interface IProjectExtendedItems extends Array<IProjectExtendedItem> {
}
interface IProjectExtendedProps {
    status: {
        variant: string;
        label: string;
    };
    logo: string;
    title: string;
    description: string;
    team: {
        size?: string;
        group: Array<{
            filename?: string;
            variant?: string;
            fallback?: string;
        }>;
    };
    statistics: IProjectExtendedItem[];
    progress?: {
        variant: string;
        value: number;
    };
    url: string;
}
declare const CardProjectExtended: ({ status, logo, title, description, team, statistics, progress, url }: IProjectExtendedProps) => import("react/jsx-runtime").JSX.Element;
export { CardProjectExtended, type IProjectExtendedItem, type IProjectExtendedItems, type IProjectExtendedProps };
