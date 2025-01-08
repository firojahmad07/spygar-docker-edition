import { ICommentsItem } from '../blocks';
interface ICommentsProps {
    items: ICommentsItem[];
}
declare const Comments: ({ items }: ICommentsProps) => import("react/jsx-runtime").JSX.Element;
export { Comments, type ICommentsProps };
