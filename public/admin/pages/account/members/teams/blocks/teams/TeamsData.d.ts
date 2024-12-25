import { IAvatarsProps } from '@/partials/common';
interface ITeamData {
    team: {
        name: string;
        description: string;
    };
    rating: {
        value: number;
        round: number;
    };
    lastModified: string;
    members: IAvatarsProps;
}
declare const TeamsData: ITeamData[];
export { TeamsData, type ITeamData };
