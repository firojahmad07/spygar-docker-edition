interface IWorkExperienceItem {
    image?: string;
    title?: string;
    desc?: string;
    date?: string;
    heading?: string;
}
interface IWorkExperienceItems extends Array<IWorkExperienceItem> {
}
declare const WorkExperience: () => import("react/jsx-runtime").JSX.Element;
export { WorkExperience, type IWorkExperienceItem, type IWorkExperienceItems };
