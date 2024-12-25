import { ReactNode } from 'react';
interface IChannelsItem {
    icon: string;
    title: string;
    description: string;
    button?: boolean;
    actions: ReactNode;
}
interface IChannelsItems extends Array<IChannelsItem> {
}
declare const Channels: () => import("react/jsx-runtime").JSX.Element;
export { Channels, type IChannelsItem, type IChannelsItems };
