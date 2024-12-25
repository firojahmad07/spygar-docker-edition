import { MutableRefObject } from 'react';
import { TImageInputFiles } from './';
export declare const openFileDialog: (inputRef: MutableRefObject<HTMLInputElement | null>) => void;
export declare const getAcceptTypeString: (acceptType?: string[], allowNonImageType?: boolean) => string;
export declare const getBase64: (file: File) => Promise<string>;
export declare const getImage: (file: File) => Promise<HTMLImageElement>;
export declare const getListFiles: (files: FileList, dataURLKey: string) => Promise<TImageInputFiles>;
