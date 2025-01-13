interface ICampaignItem {
    total: string;
    description: string;
}
interface ICampaignItems extends Array<ICampaignItem> {
}
interface ICampaignProps {
    logo: string;
    logoSize?: string;
    logoDark?: string;
    title: string;
    description: string;
    status: {
        variant: string;
        label: string;
    };
    statistics: ICampaignItem[];
    progress?: {
        variant: string;
        value: number;
    };
    url: string;
}
declare const CardCampaign: ({ logo, logoSize, logoDark, title, description, status, statistics, progress, url }: ICampaignProps) => import("react/jsx-runtime").JSX.Element;
export { CardCampaign, type ICampaignItem, type ICampaignItems, type ICampaignProps };
