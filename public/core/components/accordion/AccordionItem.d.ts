import { ReactNode } from 'react';
interface IAccordionItemProps {
    title: string;
    indicator?: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}
declare const AccordionItem: import("react").MemoExoticComponent<({ title, indicator, children, isOpen, onClick }: IAccordionItemProps) => import("react/jsx-runtime").JSX.Element>;
export { AccordionItem, type IAccordionItemProps };
