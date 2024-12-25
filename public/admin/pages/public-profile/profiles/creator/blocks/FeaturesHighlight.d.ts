import { ReactNode } from 'react';
interface IFeaturesHighlightProps {
    image: ReactNode;
    title: string;
    description: string;
    more: {
        title: string;
        url: string;
    };
    features: string[][];
}
declare const FeaturesHighlight: ({ title, description, features, image, more }: IFeaturesHighlightProps) => import("react/jsx-runtime").JSX.Element;
export { FeaturesHighlight, type IFeaturesHighlightProps };
