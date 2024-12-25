import { MutableRefObject, ReactNode } from 'react';
type IScrollSpyProps = {
    children: ReactNode;
    targetRef?: MutableRefObject<HTMLElement | Document | undefined>;
    onUpdate?: (id: string) => void;
    offset?: number;
    smooth?: boolean;
    className?: string;
    dataAttribute?: string;
    activeClass?: string;
    history?: boolean;
    throttleTime?: number;
};
declare const Scrollspy: ({ children, targetRef, onUpdate, className, offset, smooth, dataAttribute, activeClass, history, throttleTime }: IScrollSpyProps) => import("react/jsx-runtime").JSX.Element;
export { Scrollspy };
