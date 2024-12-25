import { type PropsWithChildren } from 'react';
export interface ILoadersProvider {
    contentLoader: boolean;
    setContentLoader: (state: boolean) => void;
    progressBarLoader: boolean;
    setProgressBarLoader: (state: boolean) => void;
    screenLoader: boolean;
    setScreenLoader: (state: boolean) => void;
}
declare const useLoaders: () => ILoadersProvider;
declare const LoadersProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export { LoadersProvider, useLoaders };
