import { IProjectPhase } from '../Interfaces/IProjectPhase';
import { IProjectSubphase } from '../Interfaces/IProjectSubphase';

export class ProjectPhase implements IProjectPhase {
  phase_id: any;
  phase_details: string;
  phase_weight: number;
  sub_phase: IProjectSubphase;
  phase_status: boolean;
}
