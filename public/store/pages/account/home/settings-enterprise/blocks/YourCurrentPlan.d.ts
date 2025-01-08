interface IYourCurrentPlanItem {
    title: string;
    summary: string;
    link: string;
    path: string;
}
interface IYourCurrentPlanItems extends Array<IYourCurrentPlanItem> {
}
declare const YourCurrentPlan: () => import("react/jsx-runtime").JSX.Element;
export { YourCurrentPlan, type IYourCurrentPlanItem, type IYourCurrentPlanItems };
