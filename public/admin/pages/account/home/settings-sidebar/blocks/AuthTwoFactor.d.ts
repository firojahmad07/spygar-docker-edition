interface IAuthTwoFactorItem {
    icon: string;
    title: string;
    description: string;
    checkbox: boolean;
}
interface IAuthTwoFactorItems extends Array<IAuthTwoFactorItem> {
}
declare const AuthTwoFactor: () => import("react/jsx-runtime").JSX.Element;
export { AuthTwoFactor, type IAuthTwoFactorItem, type IAuthTwoFactorItems };
