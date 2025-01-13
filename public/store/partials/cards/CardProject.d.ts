interface IProjectProps {
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
declare const CardProject: ({ logo, name, description, startDate, endDate, status, progress, team }: IProjectProps) => import("react/jsx-runtime").JSX.Element;
export { CardProject, type IProjectProps };
