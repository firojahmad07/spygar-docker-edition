interface IAdvancedSettingsAppearanceItem {
    image: string;
    logo?: string;
    label: string;
    checked: boolean;
}
interface IAdvancedSettingsAppearanceItems extends Array<IAdvancedSettingsAppearanceItem> {
}
interface IAdvancedSettingsAppearanceProps {
    title: string;
}
declare const AdvancedSettingsAppearance: ({ title }: IAdvancedSettingsAppearanceProps) => import("react/jsx-runtime").JSX.Element;
export { AdvancedSettingsAppearance, type IAdvancedSettingsAppearanceItem, type IAdvancedSettingsAppearanceItems, type IAdvancedSettingsAppearanceProps };
