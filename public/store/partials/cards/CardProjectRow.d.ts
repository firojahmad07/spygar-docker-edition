interface IProjectRowProps {
    logo: string;
    name: string;
    description: string;
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
declare const CardProjectRow: ({ logo, name, description, status, progress, team }: IProjectRowProps) => import("react/jsx-runtime").JSX.Element;
export { CardProjectRow, type IProjectRowProps };
