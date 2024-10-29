interface IReportSettingsItem {
    title: string;
    description: string;
    checked: boolean;
}
interface IReportSettingsItems extends Array<IReportSettingsItem> {
}
interface IReportSettingsProps {
    limit?: number;
    className?: string;
}
declare const ReportSettings: ({ limit, className }: IReportSettingsProps) => import("react/jsx-runtime").JSX.Element;
export { ReportSettings, type IReportSettingsItem, type IReportSettingsItems, type IReportSettingsProps };
