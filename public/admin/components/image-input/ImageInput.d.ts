import { FC } from 'react';
import React from 'react';
interface IImageInputFile {
    dataURL?: string;
    file?: File;
    [key: string]: any;
}
type TImageInputFiles = IImageInputFile[];
interface IImageInputProps {
    value: TImageInputFiles;
    onChange: (value: TImageInputFiles, addUpdatedIndex?: number[]) => void;
    children?: (props: IImageInputExport) => React.ReactNode;
    multiple?: boolean;
    maxNumber?: number;
    acceptType?: string[];
    dataURLKey?: string;
    inputProps?: React.HTMLProps<HTMLInputElement>;
}
interface IImageInputExport {
    fileList: TImageInputFiles;
    onImageUpload: () => void;
    onImageRemoveAll: () => void;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    isDragging: boolean;
    dragProps: {
        onDrop: (e: any) => void;
        onDragEnter: (e: any) => void;
        onDragLeave: (e: any) => void;
        onDragOver: (e: any) => void;
        onDragStart: (e: any) => void;
    };
}
export declare const DEFAULT_NULL_INDEX = -1;
export declare const DEFAULT_DATA_URL_KEY = "dataURL";
declare const ImageInput: FC<IImageInputProps>;
export { ImageInput, type IImageInputProps, type TImageInputFiles, type IImageInputFile };
