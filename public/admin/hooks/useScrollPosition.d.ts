import { RefObject } from 'react';
interface IUseScrollPositionProps {
    targetRef?: RefObject<HTMLElement | Document | undefined>;
}
declare const useScrollPosition: ({ targetRef }?: IUseScrollPositionProps) => number;
export { useScrollPosition };
