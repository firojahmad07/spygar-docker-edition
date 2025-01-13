interface IBackupData {
    when: {
        duration: string;
        datetime: string;
    };
    details: {
        title: string;
        pages: string;
        media: string;
    };
}
declare const BackupData: IBackupData[];
export { BackupData, type IBackupData };
