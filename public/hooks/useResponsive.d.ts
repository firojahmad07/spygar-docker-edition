export type TResponsiveBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
export type TResponsiveQuery = 'up' | 'down' | 'between';
declare const useResponsive: (query: TResponsiveQuery, key?: TResponsiveBreakpoint, start?: TResponsiveBreakpoint, end?: TResponsiveBreakpoint) => boolean | undefined;
export { useResponsive };
