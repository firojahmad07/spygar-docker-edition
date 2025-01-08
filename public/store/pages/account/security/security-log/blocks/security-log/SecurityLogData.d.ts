interface EventIcon {
    name: string;
    variant: string;
}
interface EventType {
    icon: EventIcon;
    label: string;
}
interface Severity {
    label: string;
    variant: string;
}
interface ISecurityLogData {
    timestamp: string;
    eventType: EventType;
    actionTaken: string;
    sourceIp: string;
    destinationIp: string;
    severity: Severity;
}
declare const SecurityLogData: ISecurityLogData[];
export { SecurityLogData, type ISecurityLogData };
