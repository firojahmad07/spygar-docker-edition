export interface IScrollspyMenuItem {
    title: string;
    target?: string;
    active?: boolean;
    children?: IScrollspyMenuItem[];
}
export interface IScrollspyMenuItems extends Array<IScrollspyMenuItem> {
}
export interface IScrollspyMenuProps {
    items: IScrollspyMenuItem[];
}
declare const ScrollspyMenu: ({ items }: IScrollspyMenuProps) => import("react/jsx-runtime").JSX.Element;
export { ScrollspyMenu };
