import { IModalSearchSettingsGroup } from './types';
export interface IModalSearchSettingsProps {
    items: IModalSearchSettingsGroup[];
    more?: boolean;
}
declare const ModalSearchSettings: ({ items }: IModalSearchSettingsProps) => import("react/jsx-runtime").JSX.Element;
export { ModalSearchSettings };
