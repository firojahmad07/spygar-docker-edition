import { ReactNode } from 'react';
interface IAccordionProps {
    className?: string;
    children: ReactNode;
    allowMultiple?: boolean;
}
declare const Accordion: import("react").MemoExoticComponent<({ className, children, allowMultiple }: IAccordionProps) => import("react/jsx-runtime").JSX.Element>;
export { Accordion, type IAccordionProps };
