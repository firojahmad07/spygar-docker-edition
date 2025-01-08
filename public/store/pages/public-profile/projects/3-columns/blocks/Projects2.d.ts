interface IProjects2Item {
    logo: string;
    name: string;
    description: string;
    startDate?: string;
    endDate?: string;
    status: {
        variant: string;
        label: string;
    };
    progress: {
        variant: string;
        value: number;
    };
    team: {
        size?: string;
        group: Array<{
            filename?: string;
            variant?: string;
            fallback?: string;
        }>;
        more?: {
            variant?: string;
            number?: number;
        };
    };
}
interface IProjects2Items extends Array<IProjects2Item> {
}
declare const Projects2: () => import("react/jsx-runtime").JSX.Element;
export { Projects2, type IProjects2Item, type IProjects2Items };
