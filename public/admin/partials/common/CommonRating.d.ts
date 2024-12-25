interface IRatingProps {
    className?: string;
    rating: number;
    round?: number;
}
declare const CommonRating: ({ className, rating, round }: IRatingProps) => import("react/jsx-runtime").JSX.Element;
export { CommonRating, type IRatingProps };
