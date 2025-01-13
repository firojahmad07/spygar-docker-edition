import { ReactNode } from 'react';
interface IHexagonBadgeProps {
    size?: string;
    stroke?: string;
    fill?: string;
    badge?: ReactNode;
}
declare const CommonHexagonBadge: ({ size, stroke, fill, badge }: IHexagonBadgeProps) => import("react/jsx-runtime").JSX.Element;
export { CommonHexagonBadge, type IHexagonBadgeProps };
