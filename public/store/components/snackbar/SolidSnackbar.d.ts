import { CustomContentProps } from 'notistack';
export type TSolidSnackbar = 'default' | 'dark' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
declare module 'notistack' {
    interface VariantOverrides {
        solid: {
            state: TSolidSnackbar;
        };
    }
}
export interface ISolidSnackbarProps extends CustomContentProps {
    state: TSolidSnackbar;
    message: string;
    id: string;
    icon?: string;
}
declare const SolidSnackbar: import("react").ForwardRefExoticComponent<ISolidSnackbarProps & import("react").RefAttributes<HTMLDivElement>>;
export { SolidSnackbar };
