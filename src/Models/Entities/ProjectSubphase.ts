import { IProjectSubphase } from '../Interfaces/IProjectSubphase';

export class ProjectSubphase implements IProjectSubphase {
  subphase_id: any;
  subphase_details: string;
  parent_phase_id: any;
  subphase_weight: number;
  subphase_status: boolean;
}
