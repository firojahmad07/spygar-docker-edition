interface IProjectsItem {
    status: {
        variant: string;
        label: string;
    };
    logo: string;
    title: string;
    description: string;
    team: {
        size: string;
        group: Array<{
            filename?: string;
            variant?: string;
            fallback?: string;
        }>;
    };
    statistics: Array<{
        total: string;
        description: string;
    }>;
    progress: {
        variant: string;
        value: number;
    };
}
interface IProjectsItems extends Array<IProjectsItem> {
}
declare const Projects: () => import("react/jsx-runtime").JSX.Element;
export { Projects, type IProjectsItem, type IProjectsItems };
