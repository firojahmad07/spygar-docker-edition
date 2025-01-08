interface ITabsProps {
    postId: number;
    activeTab: string;
    setActiveTab: (newTab: string) => void;
    comments: number;
    likes: string;
    saves: number;
    className?: string;
}
declare const Tabs: ({ postId, activeTab, setActiveTab, comments, likes, saves, className }: ITabsProps) => import("react/jsx-runtime").JSX.Element;
export { Tabs, type ITabsProps };
