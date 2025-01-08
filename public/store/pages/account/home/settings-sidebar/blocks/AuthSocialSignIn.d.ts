interface IAuthSocialSignInItem {
    logo: string;
    title: string;
    email: string;
    checkbox: boolean;
}
interface IAuthSocialSignInItems extends Array<IAuthSocialSignInItem> {
}
interface IAuthSocialSignInBlock {
    logo: string;
    logoDark?: string;
    title: string;
}
interface IAuthSocialSignInBlocks extends Array<IAuthSocialSignInBlock> {
}
declare const AuthSocialSignIn: () => import("react/jsx-runtime").JSX.Element;
export { AuthSocialSignIn, type IAuthSocialSignInItem, type IAuthSocialSignInItems, type IAuthSocialSignInBlock, type IAuthSocialSignInBlocks };
