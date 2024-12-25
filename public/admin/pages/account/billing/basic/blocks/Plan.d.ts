interface IPlanItem {
    total: string;
    description: string;
}
interface IPlanItems extends Array<IPlanItem> {
}
declare const Plan: () => import("react/jsx-runtime").JSX.Element;
export { Plan, type IPlanItem, type IPlanItems };
