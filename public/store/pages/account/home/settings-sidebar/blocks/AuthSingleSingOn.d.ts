interface IAuthSingleSingOnItem {
    logo: string;
    title: string;
    size: string;
    checked?: boolean;
}
interface IAuthSingleSingOnItems extends Array<IAuthSingleSingOnItem> {
}
declare const AuthSingleSingOn: () => import("react/jsx-runtime").JSX.Element;
export { AuthSingleSingOn, type IAuthSingleSingOnItem, type IAuthSingleSingOnItems };
