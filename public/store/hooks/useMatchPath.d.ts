interface IUseMatchPath {
    match: boolean;
    isExternal: boolean;
}
declare const useMatchPath: (path: string, mode?: string) => IUseMatchPath;
export { useMatchPath };
