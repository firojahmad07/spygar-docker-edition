import { IModalSearchIntegrationsItem, IModalSearchSettingsItem, IModalSearchUsersItem } from './types';
export interface IModalSearchMixedProps {
    settings: IModalSearchSettingsItem[];
    integrations: IModalSearchIntegrationsItem[];
    users: IModalSearchUsersItem[];
}
declare const ModalSearchMixed: ({ settings, integrations, users }: IModalSearchMixedProps) => import("react/jsx-runtime").JSX.Element;
export { ModalSearchMixed };
