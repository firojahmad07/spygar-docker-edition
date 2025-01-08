interface IProjectsItem {
    name: string;
    team: {
        group: Array<{
            filename?: string;
            fallback?: string;
            variant?: string;
        }>;
        more?: {
            number: number;
            variant: string;
        };
    };
    dueDate: string;
    progress: {
        variant: string;
        value: number;
    };
}
interface IProjectsItems extends Array<IProjectsItem> {
}
declare const Projects: () => import("react/jsx-runtime").JSX.Element;
export { Projects, type IProjectsItem, type IProjectsItems };
