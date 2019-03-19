import { IProjectPhase } from '../Interfaces/IProjectPhase';
import { IProjectSubphase } from '../Interfaces/IProjectSubphase';

export class ProjectPhase implements IProjectPhase {
  public phase_id: any;
  public phase_details: string;
  public phase_weight: number;
  public sub_phase: IProjectSubphase;
  public phase_status: boolean;
}
