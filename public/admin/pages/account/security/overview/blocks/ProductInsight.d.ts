import { ReactNode } from 'react';
interface IProductInsightProps {
    image: ReactNode;
    title: string;
    description: string;
    number: number;
}
declare const ProductInsight: ({ image, title, description, number }: IProductInsightProps) => import("react/jsx-runtime").JSX.Element;
export { ProductInsight, type IProductInsightProps };
