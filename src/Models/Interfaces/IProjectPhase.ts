import { IProjectSubphase } from './IProjectSubphase';

export interface IProjectPhase{
  phase_id: any;
  phase_details: string;
  phase_weight: number;
  sub_phase: IProjectSubphase;
  phase_status: boolean;
}
