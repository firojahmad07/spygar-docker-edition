interface IPlanPrice {
    regular: string;
    annual?: string;
}
interface IPlanInfo {
    title: string;
    description: string;
    free?: boolean;
    price?: IPlanPrice;
}
interface IFeaturePlans {
    basic: string | boolean;
    pro: string | boolean;
    premium: string | boolean;
    enterprise: string | boolean;
}
interface IFeature {
    title: string;
    plans: IFeaturePlans;
}
interface IPlansInfo {
    basic: IPlanInfo;
    pro: IPlanInfo;
    premium: IPlanInfo;
    enterprise: IPlanInfo;
}
interface IPlansItem {
    title: string;
    plans: IFeaturePlans;
}
interface IPlansItems {
    info: IPlansInfo;
    features: IFeature[];
}
declare const Plans: () => import("react/jsx-runtime").JSX.Element;
export { Plans, type IPlansItem, type IPlansItems };
