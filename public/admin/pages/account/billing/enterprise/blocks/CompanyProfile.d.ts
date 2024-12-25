interface ICompanyProfileItem {
    total: string;
    description: string;
}
interface ICompanyProfileItems extends Array<ICompanyProfileItem> {
}
declare const CompanyProfile: () => import("react/jsx-runtime").JSX.Element;
export { CompanyProfile, type ICompanyProfileItem, type ICompanyProfileItems };
