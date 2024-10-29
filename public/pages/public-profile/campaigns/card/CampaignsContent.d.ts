interface ICampaignsContentItem {
    logo: string;
    logoSize?: string;
    logoDark?: string;
    title: string;
    description: string;
    status: {
        variant: string;
        label: string;
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
interface ICampaignsContentItems extends Array<ICampaignsContentItem> {
}
interface ICampaignsContentProps {
    mode: string;
}
declare const CampaignsContent: ({ mode }: ICampaignsContentProps) => import("react/jsx-runtime").JSX.Element;
export { CampaignsContent, type ICampaignsContentItem, type ICampaignsContentItems, type ICampaignsContentProps };
